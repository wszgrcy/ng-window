import { Component, OnInit, Input, Provider, forwardRef, ViewEncapsulation } from '@angular/core';
import * as md from 'marked';
import * as prism from 'prismjs';
// import { DOCUMENT, DomSanitizer } from '@angular/platform-browser';
import { CssLoaderService } from '../css-loader/css-loader.service';
import { ThemeObj, PRISM_THEME } from '../css-loader/theme';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

const MARKDOWN_CONTROL: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MarkdownComponent),
  multi: true
}
@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss'],
  providers: [MARKDOWN_CONTROL],
  encapsulation:ViewEncapsulation.None
})
export class MarkdownComponent implements OnInit, ControlValueAccessor {
  @Input() length = 200;
  private _plainText = '';
  /**渲染文本 */
  markedDownText: any = ''
  /**纯文本 */
  get plainText() {
    return this._plainText
  }
  set plainText(val) {
    this._plainText = val;
    this.changeFn(val)
    this.touchedFn(val)
  }
  option: md.MarkedOptions;
  renderer: md.Renderer = new md.Renderer();
  prismTheme = PRISM_THEME;

  constructor(private service: CssLoaderService,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.setRenderer();
    this.setOptions();
  }

  /**
   *doc [读]高亮代码用
   *
   * @memberof MarkdownComponent
   */
  setRenderer() {
    this.renderer.code = (code, lang, isEscaped) => {
      // console.log(prism.languages)
      const b = prism.highlight(code, prism.languages.javascript);
      return `<pre class="language-${lang}"><code class="language-${lang}">${b}</code></pre>`;
    };

  }

  /**
   * doc [读]初始化设置
   *
   * @memberof MarkdownComponent
   */
  setOptions() {
    this.option = {
      headerPrefix: 'markdown-',
      langPrefix: 'language-',
      sanitize: true,
      renderer: this.renderer
    };

  }


  /**
   * doc [html][ts]绑定输入事件
   *
   * @memberof MarkdownComponent
   */
  change() {
    // console.log(this.plainText, this.option);
    md(this.plainText || '', this.option, (err, res) => {
      // console.log(res);
      this.markedDownText = this.domSanitizer.bypassSecurityTrustHtml(res);
    });

  }

  /**
   * doc 目前自动调用主题,读时调用
   *
   * @param {ThemeObj} themeObj
   * @memberof MarkdownComponent
   */
  changeTheme(themeObj: ThemeObj) {
    // console.log('css更改', themeObj);
    // console.dir(themeObj);
    this.service.load(themeObj);

  }
  changeFn: Function;
  touchedFn: Function;

  /**
   * @description 写入值是纯文本
   * @author cyia
   * @date 2018-12-09
   * @param val
   * @returns
   * @memberof MarkdownComponent
   */
  writeValue(val) {
    if (val === undefined) return;
    // console.log('输入值', val)
    this._plainText = val || ''
    this.change()
  }
  registerOnChange(fn) {
    this.changeFn = fn
  }
  registerOnTouched(fn) {
    this.touchedFn = fn
  }
}
