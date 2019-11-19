import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Db1Intercepter } from './interceptor-list/db1.interceptor';

export const HttpInterceptor: Provider[] = [
    { provide: HTTP_INTERCEPTORS, useClass: Db1Intercepter, multi: true }
];
