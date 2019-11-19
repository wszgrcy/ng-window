import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InterceptorAddResConfig, InterceptorAddReqConfig, RequestProperty, InterceptorRetrieveItem, RetrieveValue, QueryType, InterceptorItem } from '../../ngrx/store/intereptor.store';
import { ArrayAction } from 'src/interface/common.interface';
import { ALLOW_PROPERTY_OBJECT, ALLOW_TYPE_OBJECT, PROPERTYTYPE_OPTIONS, DISABLE_TYPE_OBJECT, DISABLE_TYPE_PROPERTY_OBJECT } from 'src/const/interceptor.const';

@Component({
  selector: 'app-network-debugging',
  templateUrl: './network-debugging.component.html',
  styleUrls: ['./network-debugging.component.scss']
})
export class NetworkDebuggingComponent implements OnInit {
  /**
   * 多个请求列表
   * 点击[保存]时发送某一个
   * 还有[删除]这个按钮
   *
   *
   */
  requestList: InterceptorItem['requestConfig'][] = [];
  responseList: InterceptorItem['responseConfig'][] = [];
  readonly DEFAULT_REQUESTCONFIG: InterceptorItem['requestConfig'] = {
    retrieve: [],
    create: [],
    update: [],
    delete: []
  };
  readonly DEFAULT_RESPONSECONFIG: InterceptorItem['responseConfig'] = { replace: { isJson: true } };
  // retrieveList: InterceptorRetrieveItem<RequestProperty<RetrieveValue>>[] = []
  // readonly requestOptions: (keyof RequestProperty<any>)[]
  // = ['body', 'headers', 'method', 'params', 'responseType', 'url', 'withCredentials']
  readonly ALLOW_TYPE_OBJECT = ALLOW_TYPE_OBJECT;
  readonly ALLOW_PROPERTY_OBJECT = ALLOW_PROPERTY_OBJECT;
  readonly propertyTypeOptions: (keyof QueryType)[] = ['boolean', 'number', 'regexp', 'string'];
  constructor(private store: Store<any>) { }

  ngOnInit() {
    const requestConfig = localStorage.getItem('requestConfig');
    const responseConfig = localStorage.getItem('responseConfig');
    if (requestConfig) {
      this.requestList = JSON.parse(requestConfig);
      console.log(this.requestList);
      this.requestList.forEach((val, index) => {
        this.store.dispatch(new InterceptorAddReqConfig({ config: this.requestList[index], index }));
      });
    }
    if (responseConfig) {
      this.responseList = JSON.parse(responseConfig);
      console.log(this.responseList);
      this.responseList.forEach((val, index) => {
        this.store.dispatch(new InterceptorAddResConfig({ config: this.responseList[index], index }));
      });
      // this.responseList=[{replace:{statusCode:404,replaceStatusCode:200,responseData:'[]'}}]
    }
    // while (this.responseList.length < this.requestList.length) {
    // this.responseList.push(Object.assign({}, this.DEFAULT_RESPONSECONFIG))
    // }
    // this.store.dispatch(new InterceptorAddReqConfig({}))
  }
  // addNewRetrieveConfig() {
  //   this.retrieveList.push({
  //     // property:'',
  //     value: [{ value: '' }]
  //   })
  // }

  arrayAction(array: Array<any>, action: ArrayAction, index: number = null, value: any = null) {
    switch (action) {
      case 'add':
        array.push(JSON.parse(JSON.stringify(value)));
        break;
      case 'remove':
        array.splice(index, 1);
        break;
      default:
        break;
    }
  }
  save(index: number) {
    console.log('准备保存', index, this.requestList[index]);
    console.log(this.responseList);
    localStorage.setItem('requestConfig', JSON.stringify(this.requestList));
    localStorage.setItem('responseConfig', JSON.stringify(this.responseList));
    this.store.dispatch(new InterceptorAddReqConfig({ config: this.requestList[index], index }));
    this.store.dispatch(new InterceptorAddResConfig({ config: this.responseList[index], index }));
  }

  strongType(disableTypeName: 'key' | 'value' | 'change', disableTypePropertyName: keyof RequestProperty<any>) {
    const disableTypeOptions = DISABLE_TYPE_OBJECT[disableTypeName] || [], disableTypePropertyOptions = DISABLE_TYPE_PROPERTY_OBJECT[disableTypePropertyName] || [];

    const disableOptions = [...new Set([...disableTypeOptions, ...disableTypePropertyOptions])];
    return PROPERTYTYPE_OPTIONS.filter((value) => !disableOptions.some((option) => option == value));
  }
}
