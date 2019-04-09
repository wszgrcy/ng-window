import { HelloComponentComponent } from '@component/hello-component/hello-component.component';
import { LoadType, IconItem, BootMethod } from '../interface/desktop.interface';
import { FormComponent } from '@component/form/form.component';
import { FormUploadComponent } from '@component/form-upload/form-upload.component';
import { RequestTestComponent } from '@component/request-test/request-test.component';
import { NetworkDebuggingComponent } from '../system-component/network-debugging/network-debugging.component';

export const COMPONENT_LIST: IconItem[] = [
    {
        name: 'ng-hello',
        method: BootMethod.dragdrop,
        data: {},
        config: {
            top: 123,
            component: HelloComponentComponent,
            loadType: LoadType.native,

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
            loadType: LoadType.native
        },
        icon: 'attachment',
    },
    {
        name: '动画转换',
        method: BootMethod.dragdrop,
        data: {},
        config: {
            title: 'css关键帧提取转ng动画',
            loadType: LoadType.webComponent,
            top: 123,
            module: {
                import: () => import(`../web-component/ng/ng-animation.js`),
                elementName: 'custom-root'
            }
        },
        icon: 'star_border',
    },
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
        name: 'vue-hello',
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