# NgWindow
## 安装
- `npm i`
- e2e部分(如果要跑),可能需要通过某种方式进行下载(仅在启动e2e测试时需要)
- puppeteer 如果不跑e2e可以去掉此依赖包增加安装速度和未知报错(需要某种方式进行下载)
## 启动
- `npm start`

## 端对端测试
- `npm run e2e`

## 构建
- `npm run build`
## 特点
- 支持各种框架的web-componet组件及原生写法的引入
- 支持angular的模块懒加载
- 窗口模式,支持多任务切换和显示
- 通过网络调试模块,拦截请求返回模拟数据,加快调试
- 组件引入简单,耦合度低


## 组件
- 需要安装`cyia-ngx-component`
- 所有组件均有实例


| 组件名     | 描述                                                | 引入模块                  | 选择器                | 备注                                                                                                                                    |
| ---------- | --------------------------------------------------- | ------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 颜色选择器 | 为了支持(补全)ie11上无法应用选择器而开发的组件,     | CyiaColorPickerModule     | cyia-colorpicker      |
| 上传       | 为了补全material-design上没有相关上传组件而开发     | CyiaUploadModule          | cyia-upload           | 引入后其父元素的点击事件会触发上传,建议如下使用 ```<button mat-button color="primary">Primary<cyia-upload></cyia-upload></button>   ``` |
| 时间选择器 | 为了给material-design的日期选择增加小时和分钟的设置 | CyiaDatePickerModule      | cyia-datepicker       | 与日期选择器中的`<input matInput [matDatepicker]="picker" >`使用一致,替换其标签                                                         |
| 切换组件   | 类似名片的正反面,通过切换显示另一面                 | CyiaComponentToggleModule | cyia-component-toggle | 需要两个模板作为正面显示和反面显示                                                                                                      |
### 颜色选择器
| 属性 | 类型 | 描述 |
| ---- | ---- |
- 一个angular的自定义表单控件
- 支持模板驱动表单和动态表单
- 返回16进制的颜色
### 上传
- 两种上传均需要父元素包裹.均基于`mat-button`设计,但是可通过`depth`调整所属父元素
#### 通用上传
- 一个angular的自定义表单控件
- 支持模板驱动表单和动态表单


| 属性               | 类型                                                                                                                      | 描述                                                                      | 默认值 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------- |-|-|
| acceptType         | [与file类型的input相同](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers) |
| multiple           | boolean                                                                                                                   | 是否是多文件                                                              |
| depth              | number                                                                                                                    | 和父元素相隔的层级,默认为依据mat-button设计                               | 2      |
| nameInput          | HTMLInputElement                                                                                                          | 如果设置了该属性,上传文件的文件名将显示在nameInput元素中,仅限为单文件状态 |
| disabled           | boolean                                                                                                                   | 是否禁用                                                                  |
| fileOnBeforeUpload | (_value, value: File[]) => Promise<any>                                                                                   | 一般选择文件是为了上传,此属性是处理文件在上传前的操作                     |
| fileOnUpload       | `(_value, value: File[]) => Promise<any>`,value为上一个返回值                                                             | 一般选择文件是为了上传,此属性是处理文件如何上传                           |
| fileOnAfterUpload  | `(_value, value: File[]) => Promise<any>`,value为上一个返回值                                                             | 一般选择文件是为了上传,此属性是处理文件上传后,返回值为表单控件的值        |
#### 图片上传
- 选择器`cyia-upload4image`
- 一个angular的自定义表单控件
- 支持模板驱动表单和动态表单

| 属性       | 类型          | 描述                                                  | 默认值                                               |
| ---------- | ------------- | ----------------------------------------------------- | ---------------------------------------------------- |
| hasBtnView | boolean       | 是否有查询按钮                                        | false                                                |
| accept     | string        | 接受的图片类型                                        | 'image/gif,image/jpeg,image/jpg,image/png,image/svg' |
| unit       | {value,label} | 显示大小,value:b,kb,mb,gb;label为要显示的单位,例如:兆 |
| depth      | number        | 和父元素相隔的层级,默认为依据mat-button设计           | 2                                                    |
| multiple   | boolean       | 是否是多文件                                          | false                                                |
### 时间选择器
- 一个angular的自定义表单控件
- 支持模板驱动表单和动态表单

| 属性          | 类型          | 描述                      | 默认值 |
| ------------- | ------------- | ------------------------- | ------ |
| accurate      | boolean       | 用来决定是否显示小时,分钟 | false  |
| matDatepicker | MatDatepicker |

### 切换组件
| 属性      | 类型   | 描述                             | 默认值 |
| --------- | ------ | -------------------------------- | ------ |
| direction | string | 动画选择方向,x,y,z               |
| duration  | number | 动画持续时间,毫秒数              |
| origin    | string | 与`transform-origin`设置属性一致 |
--------
## 指令
- 引入包`cyia-ngx-component`
- 引入模块 `CyiaDirectiveModule`


| 指令名       | 描述                                                                                                                       | 选择器               |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| 附加组件     | 指令所在的元素上,通过点击显示出被附加组件,可以设置附加组件策略                                                             | [cyiaFabList]        |
| 拖动上传     | 指令所在的元素上,可以通过拖动上传文件                                                                                      | [cyiaFileDropzone]   |
| 分页器补丁   | 指令所在的分页器组件上(mat-paginator),用来注入页面的序号(原组件没有相关页面序号显示,只能点击上一页下一页,第一页和最后一页) | [cyiaPaginatorPatch] |
| 文本复制指令 | 监听点击事件发生copy事件(告知已经复制)                                                                                     | [cyiaTextCopy]       |

### 附加组件
- 通过查询子元素的`TemplateRef`,作为显示的附加组件

| 属性        | 类型    | 描述         | 默认值 |
| ----------- | ------- | ------------ | ------ |
| cyiaFabList | FabItem | 设置附加策略 |
```ts
export interface FabItem {
    origin?: number//如果有多个模板,则可以指定附加在哪个模板上,进行多级附加
    positionStrategyList?: PositionStrategy[]
}
export interface PositionStrategy {
    offsetX?: number;
    offsetY?: number;
    //doc @angular/cdk/overlay
    originPos: OriginConnectionPosition,
    overlayPos: OverlayConnectionPosition
}
```
### 拖动上传

| 属性        | 类型    | 描述         | 默认值 |
| ----------- | ------- | ------------ | ------ |
|files|File[]|双向绑定,拖动后从这里获取拖动文件
### 分页器补丁
- 附加在`mat-paginator`即可

### 文本复制
| 属性        | 类型    | 描述         | 默认值 |
| ----------- | ------- | ------------ | ------ |
|copy|事件|复制成功发送事件
|value|string|要复制的文本
## 已知问题
- 当angular编写的组件封装为web-component引入时,先点击angular的封装组件,再点击其他的web-component组件时,会引入失效
> 可能要从angular自身的编译配置查看为何会失效

