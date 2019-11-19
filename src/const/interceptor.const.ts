import { QueryType, InterceptorItem, RequestProperty } from '@ngrx/store/intereptor.store';

export const PROPERTYTYPE_OPTIONS: (keyof QueryType)[] = ['boolean', 'number', 'regexp', 'string'];
export const ALLOW_TYPE_OBJECT = {
    key: ['regexp', 'string'],
    value: ['boolean', 'number', 'regexp', 'string'],
    change: ['boolean', 'number', 'string']
};
export const DISABLE_TYPE_OBJECT: { [name: string]: (keyof QueryType)[] } = {
    key: ['boolean', 'number'],
    value: [],
    change: ['regexp']
};
export const DISABLE_TYPE_PROPERTY_OBJECT: { [x in keyof RequestProperty<any>]: (keyof QueryType)[] } = {
    method: ['number', 'regexp', 'string'],
    url: ['boolean', 'number'],
    withCredentials: ['number', 'regexp', 'string'],
    responseType: ['boolean', 'number'],

};
export const ALLOW_PROPERTY_OBJECT: { [x in keyof InterceptorItem['requestConfig']]: (keyof RequestProperty<any>)[] } = {
    retrieve: ['body', 'headers', 'method', 'params', 'responseType', 'url', 'withCredentials'],
    create: ['body', 'headers', 'params'],
    update: ['body', 'headers', 'params', 'url', 'method', 'responseType', 'withCredentials'],
    delete: ['body', 'headers', 'params']

};
let a: { [name: string]: string };
