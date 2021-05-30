
import { LoadType, IconItem, BootMethod } from '../interface/desktop.interface';
import { Routes } from '@angular/router';
/**懒加载模块列表,依赖路由实现
 * doc 其实可以不依赖路由实现,但是angular在编译过程中只识别路由部分的懒加载地址,所以说如果要实现不依赖路由的需要自己做编译配置
 * 如果整个项目无路由的话,可以不用写path ,但是一旦用了路由,就必须写path
 */
export const LAZY_MODULE_LIST: Routes = [
//     {
//         // doc ng8版本载入模块
//         path: 'lazy-form-upload', loadChildren: () => import('@component/form-upload/form-upload.module').then((e) => e.FormUploadModule)
//     },
//     {
//         path: 'lazy-hello', loadChildren: () => import('@component/hello-component/hello-component.module').then((e) => e.HelloComponentModule)
//     },
//     {
//         path: 'lazy-form', loadChildren: () => import('@component/form/form.module').then((e) => e.FormComponentModule),
//     },
//     {
//         path: 'lazy-request-test', loadChildren: () => import('@component/request-test/request-test.module').then((e) => e.RequestTestModule),
//     },
    {
        path: 'lazy-network-debugging', loadChildren: () => import('@system-component/network-debugging/network-debugging.module').then((e) => e.NetworkDebuggingModule),
    },
    {
        path: 'lazy-setting', loadChildren: () => import('@system-component/setting/setting.module').then((e) => e.SettingModule),
    },
//     {
//         path: 'lazy-color-picker', loadChildren: () => import('@component/color-picker/color-picker.module').then((e) => e.ColorPickerModule),
//     },
//     {
//         path: 'lazy-component-toggle', loadChildren: () => import('@component/component-toggle/component-toggle.module').then((e) => e.ComponentToggleModule),
//     },
//     {
//         path: 'lazy-inject', loadChildren: () => import('@component/inject/inject.module').then((e) => e.InjectModule),
//     },
//     {
//         path: 'lazy-directive', loadChildren: () => import('@component/directive/directive.module').then((e) => e.DirectiveModule),
//     },
//     {
//         path: 'lazy-entity-request', loadChildren: () => import('@component/entity-request/entity-request.module').then((e) => e.EntityRequestModule),
//     },
//     {
//         path: 'lazy-loading-hint', loadChildren: () => import('@component/loading-hint/loading-hint.module').then((e) => e.LoadingHintModule),
//     },
//     {
//         path: 'lazy-docs', loadChildren: () => import('@component/docs/docs.module').then(m => m.DocsModule),
//     },
];
export const COMPONENT_LIST: IconItem[] = [
    // {
//         name: 'ng-hello',
//         method: BootMethod.dragdrop,
//         data: {},
//         config: {
//             top: 123,
//             loadType: LoadType.lazyModule,
//             title: 'ng-hello',
//             lazyModule: LAZY_MODULE_LIST.find((name) => 'lazy-hello' == name.path).loadChildren as string,
//         },
//         iconBackground: '#3f51b5',
//         icon: 'accessibility_new',
//     },
//     {
//         name: '表单',
//         method: BootMethod.dragdrop,
//         data: {},
//         config: {
//             title: '自定义表单控件',
//             top: 123,
//             lazyModule: LAZY_MODULE_LIST.find((name) => 'lazy-form' == name.path).loadChildren as string,
//             loadType: LoadType.lazyModule
//         },
//         icon: 'input',
//     },
//     {
//         name: '上传',
//         method: BootMethod.dragdrop,
//         data: {},
//         config: {
//             title: '自定义表单控件',
//             top: 123,
//             lazyModule: LAZY_MODULE_LIST.find((name) => 'lazy-form-upload' == name.path).loadChildren as string,
//             loadType: LoadType.lazyModule
//         },
//         icon: 'attachment',
//     },
//     {
//         name: '动画转换',
//         method: BootMethod.dragdrop,
//         data: {},
//         config: {
//             title: 'css关键帧提取转ng动画',
//             loadType: LoadType.webComponent,
//             top: 123,
//             module: {
//                 import: () => import(`../web-component/ng/ng-animation.js`),
//                 elementName: 'custom-root'
//             }
//         },
//         icon: 'star_border',
//     },
//     {
//         name: 'js-hello',
//         method: BootMethod.dragdrop,
//         data: {},
//         config: {
//             title: '',
//             loadType: LoadType.webComponent,
//             top: 123,
//             module: {
//                 import: () => import(`../web-component/plain-js/demo.js`),
//                 elementName: 'custom-anchor'
//             }
//         },
//         icon: 'star_border',
//     },
//     {
//         name: 'vue-hello',
//         method: BootMethod.dragdrop,
//         data: {},
//         config: {
//             title: '',
//             loadType: LoadType.webComponent,
//             top: 123,
//             module: {
//                 import: () => import(`../web-component/vue/custom-vue.js`),
//                 elementName: 'custom-vue'
//             }
//         },
//         icon: 'star_border',
//     },
//     {
//         name: 'react-hello',
//         method: BootMethod.dragdrop,
//         data: {},
//         config: {
//             title: '',
//             loadType: LoadType.webComponent,
//             top: 123,
//             module: {
//                 import: () => import(`../web-component/react/custom-react.js`),
//                 elementName: 'custom-react'
//             }
//         },
//         icon: 'star_border',
//     },
//     {
//         name: '请求测试',
//         method: BootMethod.dragdrop,
//         data: {},
//         config: {
//             title: '用于进行请求测试拦截器的组件',
//             // doc 普通的将组件导入到MainModule
//             // component: RequestTestComponent,
//             // loadType: LoadType.native,
//             lazyModule: LAZY_MODULE_LIST.find((name) => 'lazy-request-test' == name.path).loadChildren as string,
//             loadType: LoadType.lazyModule
//         },
//         icon: 'attachment',
//     },
    {
        name: '网络调试',
        method: BootMethod.dragdrop,
        data: {},
        config: {
            title: '用于查看请求,替换请求,返回值等的系统组件',
            // component: NetworkDebuggingComponent,
            // loadType: LoadType.native,
            lazyModule: () => import('@system-component/network-debugging/network-debugging.module').then((e) => e.NetworkDebuggingModule),
            loadType: LoadType.lazyModule
        },
        icon: 'http',
    },
//     {
//         name: '颜色选择',
//         method: BootMethod.dragdrop,
//         data: {},
//         config: {
//             title: '颜色选择器,用于补全material-design缺失的颜色选择器',
//             lazyModule: LAZY_MODULE_LIST.find((name) => 'lazy-color-picker' == name.path).loadChildren as string,
//             loadType: LoadType.lazyModule
//         },
//         icon: 'color_lens',
//     },
//     {
//         name: '切换组件',
//         method: BootMethod.dragdrop,
//         data: {},
//         config: {
//             title: '卡片正反面切换',
//             lazyModule: LAZY_MODULE_LIST.find((name) => 'lazy-component-toggle' == name.path).loadChildren as string,
//             loadType: LoadType.lazyModule
//         },
//         icon: 'repeat',
//     },
//     {
//         name: '组件注入',
//         method: BootMethod.dragdrop,
//         data: {},
//         config: {
//             title: 'matd相关组件注入补丁',
//             lazyModule: LAZY_MODULE_LIST.find((name) => 'lazy-inject' == name.path).loadChildren as string,
//             loadType: LoadType.lazyModule
//         },
//         icon: 'merge_type',
//     },
//     {
//         name: '实体化请求',
//         method: BootMethod.dragdrop,
//         data: {},
//         config: {
//             title: '将请求返回强类型化',
//             lazyModule: LAZY_MODULE_LIST.find((name) => 'lazy-entity-request' == name.path).loadChildren as string,
//             loadType: LoadType.lazyModule
//         },
//         icon: 'merge_type',
//     },
//     {
//         name: '载入提示',
//         method: BootMethod.dragdrop,
//         data: {},
//         config: {
//             title: '使用装饰器加载请求',
//             lazyModule: LAZY_MODULE_LIST.find((name) => 'lazy-loading-hint' == name.path).loadChildren as string,
//             loadType: LoadType.lazyModule
//         },
//         icon: 'sync',
//     },
    {
        name: '系统设置',
        method: BootMethod.dragdrop,
        data: {},
        config: {
            title: '系统设置',
            lazyModule: () => import('@system-component/setting/setting.module').then((e) => e.SettingModule),
            loadType: LoadType.lazyModule
        },
        icon: 'settings',
        iconBackground: 'rgb(0, 120, 215)'
    },
//     {
//         name: '指令',
//         method: BootMethod.dragdrop,
//         data: {},
//         config: {
//             title: '指令',
//             lazyModule: LAZY_MODULE_LIST.find((name) => 'lazy-directive' == name.path).loadChildren as string,
//             loadType: LoadType.lazyModule
//         },
//         icon: 'settings_input_component',
//         iconBackground: 'rgb(0, 120, 215)'
//     },
//     {
//         name: 'readme',
//         method: BootMethod.dragdrop,
//         data: {},
//         config: {
//             title: 'readme',
//             lazyModule: LAZY_MODULE_LIST.find((name) => 'lazy-docs' == name.path).loadChildren as string,
//             loadType: LoadType.lazyModule
//         },
//         icon: 'book',
//         iconBackground: 'rgb(0, 120, 215)'
//     },
];
// export function lazyModuleFactory() {
//     return COMPONENT_LIST
//         .filter((item) => item.config.loadType === LoadType.lazyModule)
//         .map((item) =>
//             ({ path: `lazy-111`, loadChildren: item.config.lazyModule })
//         )
// }
