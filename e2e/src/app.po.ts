import { browser, by, element, WebElement, $, $$, ElementFinder, ElementArrayFinder } from 'protractor';

export class Page {
  openAppNumber = 0;
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
  async openApp(appElement: WebElement) {
    // console.log(await appElement.getText())
    return await browser.actions()
      .mouseMove(appElement)
      .doubleClick(appElement)
      .perform();
  }
  /**
   * 等待页面初始化
   *
   * @author cyia
   * @date 2019-04-19
   * @returns
   */
  pageInit() {
    return browser.wait(() => {
      return $('.icon--group').isPresent() && $('.app--list').isPresent();
    }, 10 * 1000, '页面初始化失败');
  }

  /**
   * 通过判断打开的应用数量判断该应用是否真正打开
   *
   * @author cyia
   * @date 2019-04-19
   * @returns
   */
  waitAppOpen() {
    // return
    return browser.wait(async () => {
      const count = await $$('.cdk-global-overlay-wrapper app-window').count();
      if (count > this.openAppNumber) {
        this.openAppNumber = count;
        return true;
      }
      // console.log(count, this.openAppNumber)
    }, 5000, '应用打开失败');
  }
  findWindowList() {
    return $$('.cdk-global-overlay-wrapper');
  }
  // elementArrayFinder2Array(elementArrayFinder: ElementArrayFinder) {
  //   Object.defineProperty(elementArrayFinder, 'length', {
  //     value: elementArrayFinder.count()
  //   })
  // }
  async findActiveWindow(): Promise<ElementFinder> {
    const windowList = this.findWindowList();
    const windowZList = [];
    const windowListCount = await windowList.count();
    for (let i = 0; i < windowListCount; i++) {
      const element: ElementFinder = await windowList.get(i);
      windowZList.push({ index: i, zIndex: +await element.getCssValue('z-index') });
    }
    console.log('查找结束', windowZList.sort((a, b) => b.zIndex - a.zIndex));
    return windowList.get(+windowZList[0].index);
  }
  /**
   * 移动应用图标
   *
   * @author cyia
   * @date 2019-04-19
   * @param appElement
   * @returns
   */
  moveAppIcon(appElement: WebElement) {
    return browser.actions()
      .mouseDown(appElement)
      .mouseMove({ x: 0, y: 100 })
      .mouseUp()
      .perform();
  }

  async appMax(elementFinder: ElementFinder) {
    const maxFinder = elementFinder.$$('header mat-icon').get(1);
    console.log('最大化', await maxFinder.getText());
    return browser.actions()
      .mouseMove(await maxFinder.getWebElement())
      .click(await maxFinder.getWebElement())
      .perform();
  }
  async appMaxRestore(elementFinder: ElementFinder) {
    const maxFinder = elementFinder.$$('header mat-icon').get(1);
    return browser.actions()
      .click(maxFinder.getWebElement())
      .perform();
  }
  async appMin(elementFinder: ElementFinder) {
    const minFinder = elementFinder.$$('header mat-icon').get(0);
    // console.log(, '最小化图标')
    await expect(await minFinder.getText()).toEqual('minimize');
    return browser.actions()
      .mouseMove(await minFinder.getWebElement())
      .click(await minFinder.getWebElement())
      .perform();
  }

  getAppList() {
    return $$('.app--container');
  }
}
