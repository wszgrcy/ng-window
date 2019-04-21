import { HelloComponentComponent } from '@component/hello-component/hello-component.component';
import { LoadType, IconItem, BootMethod } from '../interface/desktop.interface';
import { FormComponent } from '@component/form/form.component';
import { FormUploadComponent } from '@component/form-upload/form-upload.component';
import { RequestTestComponent } from '@component/request-test/request-test.component';
import { NetworkDebuggingComponent } from '../system-component/network-debugging/network-debugging.component';
import { Routes } from '@angular/router';
/**懒加载模块列表,依赖路由实现
 * doc 其实可以不依赖路由实现,但是angular在编译过程中只识别路由部分的懒加载地址,所以说如果要实现不依赖路由的需要自己做编译配置
 * 如果整个项目无路由的话,可以不用写path ,但是一旦用了路由,就必须写path
 */
export const lazyModuleList: Routes = [
    { path: 'lazy-form-upload', loadChildren: '@component/form-upload/form-upload.module#FormUploadModule' }
]
export const COMPONENT_LIST: IconItem[] = [
    {
        name: 'ng-hello',
        method: BootMethod.dragdrop,
        data: {},
        config: {
            top: 123,
            component: HelloComponentComponent,
            loadType: LoadType.native,
            title: 'ng-hello1111111111'
        },
        iconBackground: '#3f51b5',
        icon: 'accessibility_new',
    },
    {
        name: '表单',
        method: BootMethod.dragdrop,
        data: {},
        config: {
            title: '自定义表单控件',
            top: 123,
            component: FormComponent,
            loadType: LoadType.native
        },
        icon: 'input',
    },
    {
        name: '上传',
        method: BootMethod.dragdrop,
        data: {},
        config: {
            title: '自定义表单控件',
            top: 123,
            component: FormUploadComponent,
            lazyModule: lazyModuleList.find((name) => 'lazy-form-upload' == name.path).loadChildren as string,
            loadType: LoadType.lazyModule
        },
        icon: 'attachment',
    },
    // {
    //     name: '动画转换',
    //     method: BootMethod.dragdrop,
    //     data: {},
    //     config: {
    //         title: 'css关键帧提取转ng动画',
    //         loadType: LoadType.webComponent,
    //         top: 123,
    //         module: {
    //             import: () => import(`../web-component/ng/ng-animation.js`),
    //             elementName: 'custom-root'
    //         }
    //     },
    //     icon: 'star_border',
    // },
    {
        name: 'vue-hello',
        method: BootMethod.dragdrop,
        data: {},
        config: {
            title: '',
            loadType: LoadType.webComponent,
            top: 123,
            module: {
                import: () => import(`../web-component/vue/custom-vue.js`),
                elementName: 'custom-vue'
            }
        },
        icon: 'star_border',
    },
    {
        name: 'react-hello',
        method: BootMethod.dragdrop,
        data: {},
        config: {
            title: '',
            loadType: LoadType.webComponent,
            top: 123,
            module: {
                import: () => import(`../web-component/react/custom-react.js`),
                elementName: 'custom-react'
            }
        },
        icon: 'star_border',
    },
    {
        name: '请求测试',
        method: BootMethod.dragdrop,
        data: {},
        config: {
            title: '用于进行请求测试拦截器的组件',
            component: RequestTestComponent,
            loadType: LoadType.native
        },
        icon: 'attachment',
    },
    {
        name: '网络调试',
        method: BootMethod.dragdrop,
        data: {},
        config: {
            title: '用于查看请求,替换请求,返回值等的系统组件',
            component: NetworkDebuggingComponent,
            loadType: LoadType.native
        },
        icon: 'attachment',
    },
]
export function lazyModuleFactory() {
    return COMPONENT_LIST
        .filter((item) => item.config.loadType === LoadType.lazyModule)
        .map((item) =>
            ({ path: `lazy-111`, loadChildren: item.config.lazyModule })
        )
}
