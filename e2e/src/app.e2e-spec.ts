import { Page } from './app.po';
import { browser, logging, $, ElementFinder, $$ } from 'protractor';
import { ComponentWIndow } from './window.po';
import * as fs from "fs";
xdescribe('图标点击操作', () => {
  let page: Page;

  beforeEach(async () => {
    page = new Page();
    await page.navigateTo()
    await page.pageInit()
  });

  it('点击应用-最小化', async () => {
    let appList = page.getAppList()
    let appCount = await appList.count()
    for (let i = 0; i < appCount; i++) {
      /**图标 */
      const app = appList.get(i);
      console.log(i)
      page.openApp(await app.getWebElement())
      await page.waitAppOpen()
      await browser.sleep(500)
      let element = await page.findActiveWindow()
      await page.appMin(element)
      await browser.sleep(500)
    }
  });
  it('点击应用-最大化', async () => {
    let appList = page.getAppList()
    let appCount = await appList.count()
    for (let i = 0; i < appCount; i++) {
      /**图标 */
      const app = appList.get(i);
      console.log(i)
      page.openApp(await app.getWebElement())
      await page.waitAppOpen()
      await browser.sleep(500)
      let componentWindow = new ComponentWIndow(await page.findActiveWindow())
      await browser.sleep(500)
      await componentWindow.max()
      await browser.sleep(500)
      await componentWindow.min()
      await browser.sleep(500)
    }
  });
  it('应用移动', async () => {
    let appList = page.getAppList()
    let app = appList.get(0)
    page.openApp(await app.getWebElement())
    await page.waitAppOpen()
    await browser.sleep(1500)
    let componentWindow = new ComponentWIndow(await page.findActiveWindow())
    await componentWindow.move({ x: 100, y: 100 })
  });
  xit('应用调整大小', async () => {
    let appList = page.getAppList()
    let app = appList.get(0)
    page.openApp(await app.getWebElement())
    await page.waitAppOpen()
    await browser.sleep(1500)
    let componentWindow = new ComponentWIndow(await page.findActiveWindow())
    await componentWindow.move({ x: 100, y: 100 })

    await browser.sleep(1000)
    await componentWindow.adjustWindow('right', 100)
    await browser.sleep(10000)
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    function writeScreenShot(data, filename) {
      var stream = fs.createWriteStream(filename);
      stream.write(new Buffer(data, 'base64'));
      stream.end();
    }
    writeScreenShot(await browser.takeScreenshot(), `${Date.now()}.png`)

    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
