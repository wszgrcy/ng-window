import { Route } from '@angular/router';
import { Type } from '@angular/core';
import { CompilerConfig } from '@angular/compiler';
export interface IconItem {
    name: string;
    method: BootMethod
    component: Type<{}>
    config?: WindowConfig
    data?: any
    // token?: string
    icon?: string
    // route: Route
    [name: string]: any

}
export interface WindowConfig {
    width?: number | string,
    height?: number | string
    title?: string
    top?: number | string
    left?: number | string
}
export enum BootMethod {
    dragdrop,
}