import * as puppeteer from 'puppeteer';
import { mousePositionCenter } from '../common/common.mouse';
export class PageP {
  mouse: puppeteer.Mouse;
  frame: puppeteer.Frame;
  constructor(private browser: puppeteer.Browser, private page: puppeteer.Page) {
    this.mouse = this.page.mouse;
    this.frame = this.page.mainFrame();
  }
  openAppNumber = 0;
  navigateTo() {
    return this.page.goto('http://localhost:4200');
  }


  async openApp(appElement: puppeteer.ElementHandle) {
    return appElement.click({ clickCount: 2 });
  }
  /**
   * 等待页面初始化
   *
   * @author cyia
   * @date 2019-04-19
   * @returns
   */
  pageInit() {
    return Promise.all([this.page.waitFor('.icon--group', { visible: true, hidden: false, timeout: 5000 }), this.page.waitFor('.app--list', { visible: true, hidden: false, timeout: 5000 })]);
  }

  /**
   * 通过判断打开的应用数量判断该应用是否真正打开
   *
   * @author cyia
   * @date 2019-04-19
   * @returns
   */
  waitAppOpen() {
    const count = this.openAppNumber;
    // return this.page.waitFor(3000)
    return this.page.waitForFunction((openAppNumber) => {
      const count = document.querySelectorAll('.cdk-global-overlay-wrapper app-window').length;
      if (count > openAppNumber) {
        return true;
      }
      return false;
    }, {}, count).then(() => {
      this.openAppNumber++;
    });
  }
  findWindowList() {
    return this.page.$$('.cdk-global-overlay-wrapper');
  }

  async findActiveWindow() {
    const windowList = await this.findWindowList();
    const windowZList = [];
    for (let i = 0; i < windowList.length; i++) {
      const element = windowList[i];
      const zIndex = +await this.page.mainFrame().evaluate((el: HTMLElement) => {
        return Promise.resolve(el.style.zIndex);
      }, element);
      windowZList.push({ index: i, zIndex });
    }
    windowZList.sort((a, b) => b.zIndex - a.zIndex);
    return windowList[+windowZList[0].index];
  }
  /**
   * 移动应用图标
   *
   * @author cyia
   * @date 2019-04-19
   * @param appElement
   * @returns
   */
  async moveAppIcon(appElement: puppeteer.ElementHandle) {
    const boundingBox = await appElement.boundingBox();
    const pos = mousePositionCenter(boundingBox);
    await this.mouse.move(pos.x, pos.y);
    await this.mouse.down();
    await this.mouse.move(pos.x, pos.y + 100);
    return this.mouse.up();
  }

  async appMax(elementFinder: puppeteer.ElementHandle) {
    const maxFinder = (await elementFinder.$$('header mat-icon'))[1];
    const pos = mousePositionCenter(await maxFinder.boundingBox());
    return this.mouse.click(pos.x, pos.y);
  }
  async appMaxRestore(elementFinder: puppeteer.ElementHandle) {
    const maxFinder = (await elementFinder.$$('header mat-icon'))[1];
    const pos = mousePositionCenter(await maxFinder.boundingBox());
    return this.mouse.click(pos.x, pos.y);
  }
  async appMin(elementFinder: puppeteer.ElementHandle) {
    const maxFinder = (await elementFinder.$$('header mat-icon'))[0];
    const pos = mousePositionCenter(await maxFinder.boundingBox());
    return this.mouse.click(pos.x, pos.y);
  }

  getAppList() {
    return this.page.$$('.app--container');
  }

}
