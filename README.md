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

## 组件
- 需要安装`cyia-ngx-component`
- 所有组件均有实例


| 组件名     | 描述                                                | 引入模块                  | 选择器                | 备注                                                                                                                                    |
| ---------- | --------------------------------------------------- | ------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 颜色选择器 | 为了支持(补全)ie11上无法应用选择器而开发的组件,     | CyiaColorPickerModule     | cyia-colorpicker      |
| 上传       | 为了补全material-design上没有相关上传组件而开发     | CyiaUploadModule          | cyia-upload           | 引入后其父元素的点击事件会触发上传,建议如下使用 ```<button mat-button color="primary">Primary<cyia-upload></cyia-upload></button>   ``` |
| 时间选择器 | 为了给material-design的日期选择增加小时和分钟的设置 | CyiaDatePickerModule      | cyia-datepicker       | 与日期选择器中的`<input matInput [matDatepicker]="picker" >`使用一致,替换其标签                                                         |
| 切换组件   | 类似名片的正反面,通过切换显示另一面                 | CyiaComponentToggleModule | cyia-component-toggle | 需要两个模板作为正面显示和反面显示                                                                                                      |
## 指令
- 引入包`cyia-ngx-component`
- 引入模块 `CyiaDirectiveModule`

| 指令名   | 描述                                                           |选择器
| -------- | -------------------------------------------------------------- |-|
| 附加组件 | 指令所在的元素上,通过点击显示出被附加组件,可以设置附加组件策略 |[cyiaFabList]
|区域上传|指令所在的元素上,可以通过拖动上传文件|[cyiaFileDropzone]
|分页器补丁|指令所在的分页器组件上(mat-paginator),用来注入页面的序号(原组件没有相关页面序号显示,只能点击上一页下一页,第一页和最后一页)|[cyiaPaginatorPatch]
|文本复制指令|监听点击事件发生copy事件(告知已经复制)|[cyiaTextCopy]