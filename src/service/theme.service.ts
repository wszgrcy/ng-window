import { ThemeItem, THEME_CONFIG, ThemeConfig } from './../const/theme.config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }
  init() {
    const themeClass = localStorage.getItem(THEME_CONFIG.storageName);
    this.changeTheme(THEME_CONFIG.list.find(({ class: itemClass }) => itemClass === themeClass) || THEME_CONFIG.list[0]);
  }

  getThemeItem(className: string) {
    return THEME_CONFIG.list.find(({ class: itemClass }) => className == itemClass);
  }
  changeTheme(themeItem: ThemeItem) {
    let selector = `link`;
    selector = THEME_CONFIG.prefix ? `${selector}[class^=${THEME_CONFIG.prefix}]` : selector;
    selector = THEME_CONFIG.suffix ? `${selector}[class$=${THEME_CONFIG.suffix}]` : selector;

    const link: HTMLLinkElement = document.head.querySelector(selector);
    console.assert(!!link, '样式表未找到');
    if (link) {
      this._changeTheme(themeItem, link);
    }
  }
  private _changeTheme(themeItem: ThemeItem, link: HTMLLinkElement) {
    link.href = themeItem.href;
    let themeClass = THEME_CONFIG.prefix ? `${THEME_CONFIG.prefix}` : '';
    themeClass = `${themeClass}-${themeItem.class}`;
    themeClass = THEME_CONFIG.suffix ? `${themeClass}-${THEME_CONFIG.suffix}` : themeClass;
    link.setAttribute('class', themeClass);
    localStorage.setItem(THEME_CONFIG.storageName, themeItem.class);
  }

}
