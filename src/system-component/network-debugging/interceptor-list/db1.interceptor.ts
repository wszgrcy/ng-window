import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams, HttpEvent, HttpResponse, HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { selectInterceptorConfig } from '../../../ngrx/selector/root.selector';
import { Injector, Injectable } from '@angular/core';
import { InterceptorItem, RequestProperty, InterceptorRetrieveItem, RetrieveValue, QueryType, KeyExtend, CreateOrUpdateValue } from '../../../ngrx/store/intereptor.store';
import { coerceToBoolean, coerceToNumber, coerceToString, coerceToRegexp } from 'src/util/coerce';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { ChangeType } from 'src/interface/interceptor.interface';
import { mixinObjectExtend } from 'src/util/mixinObjectExtend';
@Injectable()
export class Db1Intercepter implements HttpInterceptor {
    requestList: InterceptorItem['requestConfig'][] = []
    responseList: InterceptorItem['responseConfig'][] = []
    constructor(state: Store<any>) {
        state.select(selectInterceptorConfig).pipe(
        ).subscribe((val: InterceptorItem[]) => {
            this.requestList = val.map((item) => item.requestConfig)
            this.responseList = val.map((item) => item.responseConfig)
        })
    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        /**查询在列表中的那个配置,用于新增修改删除 */
        let result = this.requestList.findIndex(({ retrieve }) =>
            retrieve.every((value) => {
                if (this.searchMatchingRequest(req, value)) {
                    return true
                }
                return false
            })
        )
        let newReq = req
        if (~result) {
            [this.requestList[result].create, this.requestList[result].update, this.requestList[result].delete,].forEach((list, j) => {
                list.forEach((value, i) => {
                    if (j <= 1) {
                        let result = this.searchMatchingRequest(newReq, value, j)
                        if (result && j == 1) {
                            newReq = this.changeProperty(newReq, value, ChangeType.update)
                            return
                        } else if (!result && j == 0) {
                            newReq = this.changeProperty(newReq, value, ChangeType.create)
                            return
                        }
                        return
                    }
                    newReq = this.changeProperty(newReq, value, ChangeType.delete)
                })

            })
        }
        /**
         * 
         */
        return next.handle(newReq).pipe(
            map((response: HttpResponse<any>) => {
                if (~result && this.responseList[result].replace.statusCode === response.status) {
                    return this.cloneResponse(response, this.responseList[result].replace)
                }
                return response
            }),
            catchError((error: HttpErrorResponse) => {
                if (~result && this.responseList[result].replace.statusCode === error.status) {
                    return of(this.cloneResponse(error, this.responseList[result].replace))
                }
                throw error
            }),

        )
    }

    cloneResponse(response: HttpResponseBase, { replaceStatusCode, responseData, isJson }: InterceptorItem['responseConfig']['replace']) {
        let data = isJson ? JSON.parse(responseData) : responseData
        if (replaceStatusCode >= 400) {
            throw new HttpErrorResponse({ error: data, headers: response.headers, status: replaceStatusCode, statusText: response.statusText, url: response.url })
        } else {
            return new HttpResponse({ body: data, headers: response.headers, status: replaceStatusCode, statusText: response.statusText, url: response.url })
        }
    }
    /**
     * 变更请求的各项属性
     * @author cyia
     * @date 2019-04-07
     * @param req
     * @param item
     * @param changeType
     * @returns
     * @memberof Db1Intercepter
     */
    changeProperty(req: HttpRequest<any>, item: InterceptorRetrieveItem<RequestProperty<CreateOrUpdateValue>>, changeType: ChangeType) {
        item.value.forEach((value: CreateOrUpdateValue & KeyExtend, i) => {
            switch (item.property) {
                case 'body'://可以新增
                    return req = this.changeHasKeyValue(req, value, changeType, 'body')
                case 'headers'://可以新增
                    return req = this.changeHasKeyValue(req, value, changeType, 'headers')
                case 'method'://应该控制变更一次,不进行添加
                    return req = this.updateValue(req, value, changeType, item.property)
                case 'params'://可以新增
                    return req = this.changeHasKeyValue(req, value, changeType, 'params')
                case 'responseType'://应该控制变更一次,不进行添加
                    return req = this.updateValue(req, value, changeType, item.property)
                case 'url'://应该控制变更一次,不进行添加
                    return req = this.updateValue(req, value, changeType, item.property)
                case 'withCredentials':
                    return req = this.updateValue(req, value, changeType, item.property)
                default:
                    break;
            }
        })
        return req
    }
    /**
     * 变更哪些只能更改的值
     * @author cyia
     * @date 2019-04-07
     * @param req
     * @param value
     * @param changeType
     * @param field
     * @memberof Db1Intercepter
     */
    updateValue(req: HttpRequest<any>, value: CreateOrUpdateValue & KeyExtend, changeType: ChangeType, field) {
        if (changeType == ChangeType.update) {
            req = req.clone({ [field]: value.change })
        }
        return req
    }
    changeHasKeyValue(req: HttpRequest<any>, value: CreateOrUpdateValue & KeyExtend, changeType: ChangeType, field: string) {
        let data = req[field]
        if (changeType === ChangeType.create && field === 'body') data = data || {}
        let fieldData = mixinObjectExtend(data)
        let result = this.findKeyInList(this.convertToObject(fieldData), value.key, value.keyType);
        switch (changeType) {
            case ChangeType.create:
                if (result) return req
                fieldData = fieldData.append(value.key as string, value.change as any)
                return req = req.clone({
                    [field]: fieldData
                })
            case ChangeType.update:
                if (!result) return req
                return req = req.clone({
                    [field]: fieldData.set(result, value.change as string)
                })
            case ChangeType.delete:
                if (!result) return req
                return req = req.clone({
                    [field]: fieldData.delete(result)
                })
            default:
                break;
        }
        return req
    }
    /**
     * 为了匹配查询项符合请求类型
     * @author cyia
     * @date 2019-04-09
     * @param req
     * @param item
     * @param [changeType]
     * @returns
     * @memberof Db1Intercepter
     */
    searchMatchingRequest(req: HttpRequest<any>, item: InterceptorRetrieveItem<RequestProperty<RetrieveValue>>, changeType?: ChangeType) {
        switch (item.property) {
            case 'body':
                return this._isObjectMatchingWithKeyValue(req.body, item)
            case 'headers':
                return this._isObjectMatchingWithKeyValue(this.convertToObject(req.headers), item)
            case 'method':
                if (changeType && changeType === ChangeType.update) return true
                return this._isListMatchingWithValue(req.method, item)
            case 'params':
                return this._isObjectMatchingWithKeyValue(this.convertToObject(req.params), item)
            case 'responseType':
                if (changeType && changeType === ChangeType.update) return true
                return this._isListMatchingWithValue(req.responseType, item)
            case 'url':
                if (changeType && changeType === ChangeType.update) return true
                return this._isListMatchingWithValue(req.url, item)
            case 'withCredentials':
                if (changeType && changeType === ChangeType.update) return true
                return this._isListMatchingWithValue(req.withCredentials, item)
            default:
                break;
        }
    }
    /**
     * 把类对象转化为纯对象
     * @author cyia
     * @date 2019-04-09
     * @private
     * @param value
     * @returns
     * @memberof Db1Intercepter
     */
    private convertToObject(value: { keys: Function, getAll: Function }): Object {
        let obj = {}
        value.keys().forEach((key) => {
            obj[key] = value.getAll(key).toString()
        })
        return obj
    }
    /**
     * 符合其中之一的条件就行
     * 匹配列表中是否能在对象中匹配到某一键值
     * @author cyia
     * @date 2019-04-06
     * @private
     * @param object
     * @param item
     * @returns
     * @memberof Db1Intercepter
     */
    private _isObjectMatchingWithKeyValue(object: Object, item: InterceptorRetrieveItem<RequestProperty<RetrieveValue>>) {
        if (!object) return false
        return item.value.some((val: RetrieveValue & KeyExtend) => {
            let key = this.findKeyInList(object, val.key, val.keyType)
            if (key && val.value && val.type) {
                return this.compareValue(object[key], val.value, val.type)
            }
            return false
        })
    }
    /**
     * 符合其中之一
     * 查询列表中是否查询到匹配的值
     * @author cyia
     * @date 2019-04-09
     * @private
     * @param value 基本类型
     * @param item
     * @returns
     * @memberof Db1Intercepter
     */
    private _isListMatchingWithValue(value: any, item: InterceptorRetrieveItem<RequestProperty<RetrieveValue>>) {
        if (!value) return false
        return item.value.some((val: RetrieveValue) => {
            if (this.compareValue(value, val.value, val.type)) {
                return true
            }
            return false
        })
    }
    compareValue(source: Exclude<QueryType[keyof QueryType], RegExp>, compare: QueryType[keyof QueryType], type: keyof QueryType) {
        switch (type) {
            case 'boolean':
                return source === coerceToBoolean(compare)
            case 'number':
                return source === coerceToNumber(compare)
            case 'regexp':
                return coerceToRegexp(compare).test(coerceToString(source))
            case 'string':
                return source === coerceToString(compare)
            default:
                return false
        }
    }


    /**
     * 查询对象中是否匹配某一键名
     *
     * @author cyia
     * @date 2019-04-09
     * @param object
     * @param key
     * @param keyType
     * @returns
     * @memberof Db1Intercepter
     */
    findKeyInList(object, key, keyType) {
        return Object.keys(object).find((item) => this.compareValue(item, key, keyType))
    }
}