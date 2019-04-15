import { Route } from '@angular/router';
import { Type } from '@angular/core';
import { CompilerConfig } from '@angular/compiler';
export interface IconItem {
    name: string;
    method: BootMethod

    config?: WindowConfig
    data?: any
    // token?: string
    icon?: string;
    iconBackground?: string
    iconCOlor?: string
    // route: Route
    [name: string]: any

}
export interface WindowConfig {
    width?: number | string,
    height?: number | string
    title?: string
    top?: number | string
    left?: number | string
    component?: Type<{}>
    module?: NgCustomElement
    loadType?: LoadType
    lazyModule?:string
}
export enum BootMethod {
    dragdrop,
}
export enum LoadType {
    native, webComponent, lazyModule
}
export interface NgCustomElement {
    import: () => Promise<any>,
    elementName: string
}