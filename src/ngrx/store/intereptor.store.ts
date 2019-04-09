import { Action, State } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
const NAME = '[Interceptor]';
/**
 * 匹配方法,修改
 * 查找某一[条件],进行相应[操作],新增,修改,查询,删除
 * 修改是一个列表,
 * [类型,方法(新增,修改,删除),值]
 */
export interface RequestProperty<T> {
    method?: T[]//数组
    url?: T[]//数组
    body?: (T & KeyExtend)[]//数组,正则
    headers?: (T & KeyExtend)[]
    params?: (T & KeyExtend)[]
    responseType?: T[]
    withCredentials?: T[]
}
export interface RetrieveValue {
    type?: keyof QueryType
    value?: QueryType[keyof QueryType]
}
export interface KeyExtend {
    keyType?: Extract<keyof QueryType, 'string' | 'regexp'>
    key?: Extract<QueryType[keyof QueryType], string | RegExp>
}

/**
 * 选中某类型->直接修改
 * 某类型中的某个key修改
 */
export interface CreateOrUpdateValue {
    type?: keyof QueryType
    value?: QueryType[keyof QueryType]
    change?: QueryType[keyof QueryType]
    changeType?: Exclude<keyof QueryType, 'regexp'>
}
// export interface CreateValue {
//     type?: keyof QueryType
//     value?: QueryType[keyof QueryType]
//     change?: QueryType[keyof QueryType]
//     changeType?:Exclude<keyof QueryType,'regexp'>  
// }
export interface QueryType {
    string?: string
    regexp?: RegExp
    number?: number
    boolean?: boolean
}
export interface InterceptorRetrieveItem<T> {
    property?: keyof T,
    value?: T[keyof T]

}


export interface InterceptorItem {
    requestConfig?: {
        retrieve?: InterceptorRetrieveItem<RequestProperty<RetrieveValue>>[]
        update?: InterceptorRetrieveItem<RequestProperty<CreateOrUpdateValue>>[]
        create?: InterceptorRetrieveItem<RequestProperty<CreateOrUpdateValue>>[]
        /** */
        delete?: InterceptorRetrieveItem<RequestProperty<RetrieveValue>>[]
    }
    responseConfig?: {
        replace?: {
            statusCode?: number,
            replaceStatusCode?: number,
            responseData?: any,
            isJson?:boolean
        }
    }
    result?: any[]
}
// let a: InterceptorItem = {
//     requestConfig: {
//         retrieve: [
//             { property: 'url', value: [{ type: 'regexp', value: /234/ }] }
//         ]
//     }
// }
export enum InterceptorType {
    addResConfig = '[Interceptor]addResponseConfig',
    addReqConfig = '[Interceptor]addRequestConfig',
    changeRes = '[Interceptor]changeRes',
    changeReq = '[Interceptor]changeReq',
    getAll = '[Interceptor]getAll',
    getAllConfig = '[Interceptor]getAllConfig',

}
// type TYPE = '[Interceptor]changeRes' | '[Interceptor]getAll' | '[Interceptor]changeReq'

export class InterceptorAddReqConfig {
    readonly type: InterceptorType = InterceptorType.addReqConfig
    constructor(public payload: { config: InterceptorItem['requestConfig'], index: number }) { }
}
export class InterceptorAddResConfig {
    readonly type: InterceptorType = InterceptorType.addResConfig
    constructor(public payload: { config: InterceptorItem['responseConfig'], index: number }) { }
}
export class InterceptorResult {
    readonly type: InterceptorType = InterceptorType.getAll
    constructor(public payload: InterceptorItem['result']) { }
}

export type InterceptorAction = InterceptorAddResConfig | InterceptorResult | InterceptorAddReqConfig

export function InterceptorChange_Reducer(state: InterceptorItem[] = [], action: InterceptorAction) {
    if (action instanceof InterceptorAddReqConfig) {
        if (state.length <= action.payload.index) {
            state.push({ requestConfig: action.payload.config })
        } else {
            state[action.payload.index].requestConfig = action.payload.config
        }
        return state
    }
    else if (action instanceof InterceptorAddResConfig) {
        if (state.length <= action.payload.index) {
            state.push({ responseConfig: action.payload.config })
        } else {
            state[action.payload.index].responseConfig = action.payload.config
        }
        return state
    }
    return state
}