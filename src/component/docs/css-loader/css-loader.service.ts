import { Injectable } from '@angular/core';
import { ThemeObj, PRISM_OBJ } from './theme';
// import { ThemeObj, PRISM_OBJ } from '../../const/theme';

@Injectable()
export class CssLoaderService {
  private cssStatus: { old?: ThemeObj, new?: ThemeObj } = {}
  constructor() { }

  load(themeObj: ThemeObj) {
    this.cssStatus.old = this.cssStatus.new;
    this.cssStatus.new = themeObj;
    for (const x in this.cssStatus) {
      const el1 = this.cssStatus[x];
      if (x == 'new' && (el1 && el1 != null)) {
        console.log('准备载入css', el1)
        this.loadCss(el1)
      } else if (x == 'old' && (el1 && el1 != null)) {
        console.log('准备删除css', el1)
        this.deleteCss(el1)
      }

    }
  }

  private loadCss(themeObj: ThemeObj): void {
    let link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', themeObj.url);
    link.setAttribute('class', `${PRISM_OBJ.classname}${themeObj.classPrefix}`);
    document.querySelector('head').appendChild(link);
  }
  private deleteCss(themeObj: ThemeObj): void {

    // let a = `head.${PRISM_OBJ.classname}${themeObj.classPrefix}`;
    // console.log(a);
    let delElement = document.querySelector(`head link.${PRISM_OBJ.classname}${themeObj.classPrefix}`);

    console.log(delElement);
    delElement && delElement.parentNode.removeChild(delElement)
  }
}
