// import * as fs from "fs";
import * as puppeteer from "puppeteer";
import { PageP } from './class-p/app.p';
import { ComponentWIndowP } from './class-p/window.p';
import { TaskBar } from './class-p/taskbar.p';
describe('图标点击操作', () => {
  let browser: puppeteer.Browser;
  let webPage: puppeteer.Page;
  let page: PageP
  beforeEach(async () => {
    console.log('初始化')
    browser = browser || await puppeteer.launch({ headless: false });
    webPage = await browser.newPage();
    await webPage.goto('http://localhost:4200');
    page = new PageP(browser, webPage)
    console.log('页面初始化完成')
  });

  it('点击应用-最小化', async () => {
    let appList = await page.getAppList()
    let appCount = appList.length
    for (let i = 0; i < appCount; i++) {
      /**图标 */
      const app = appList[i];
      console.log(i)
      await page.openApp(app)
      await page.waitAppOpen()
      console.log('等待完成')
      await webPage.waitFor(500)
      let element = await page.findActiveWindow()
      await page.appMin(element)
      await webPage.waitFor(500)
    }
  });
  it('点击应用-最大化', async () => {
    let appList = await page.getAppList()
    let appCount = await appList.length
    for (let i = 0; i < appCount; i++) {
      /**图标 */
      const app = appList[i]
      console.log(i)
      page.openApp(app)
      await page.waitAppOpen()
      await webPage.waitFor(500)
      // console.log('准备最大化')
      let componentWindow = new ComponentWIndowP(await page.findActiveWindow(), browser, webPage)
      await componentWindow.getBtnList()
      await webPage.waitFor(1000)
      await componentWindow.max()
      await webPage.waitFor(500)
      await componentWindow.min()
      await webPage.waitFor(500)
    }
  });
  it('应用移动', async () => {
    let appList = await page.getAppList()
    let app = appList[0]
    page.openApp(app)
    await page.waitAppOpen()
    await webPage.waitFor(1500)
    let componentWindow = new ComponentWIndowP(await page.findActiveWindow(), browser, webPage)
    await componentWindow.move({ x: 100, y: 100 })
    // await webPage.waitFor(999999999)
  });
  it('应用调整大小', async () => {
    let appList = await page.getAppList()
    let app = appList[0]
    page.openApp(app)
    await page.waitAppOpen()
    await webPage.waitFor(1500)
    let componentWindow = new ComponentWIndowP(await page.findActiveWindow(), browser, webPage)
    await componentWindow.move({ x: 100, y: 100 })
    await webPage.waitFor(1000)
    let width = await componentWindow.getElementProperty('clientWidth')
    let height = await componentWindow.getElementProperty('clientHeight')
    await componentWindow.adjustWindow('right', 100)
    let newWidth = await componentWindow.getElementProperty('clientWidth')
    expect(newWidth - width).toBeGreaterThanOrEqual(90)
    width = newWidth
    await componentWindow.adjustWindow('bottom', 100)
    let newHeight = await componentWindow.getElementProperty('clientHeight')
    expect(newHeight - height).toBeGreaterThanOrEqual(90)
    height = newHeight
    await componentWindow.adjustWindow('top', 100)
    newHeight = await componentWindow.getElementProperty('clientHeight')
    expect(newHeight - height).toBeGreaterThanOrEqual(90)
    await componentWindow.adjustWindow('left', 100)
    newWidth = await componentWindow.getElementProperty('clientWidth')
    expect(newWidth - width).toBeGreaterThanOrEqual(90)
    // await webPage.waitFor(10000)
  });


  afterEach(async () => {
    await webPage.screenshot({ path: 'screenshot.png' });
    await webPage.close()
    // Assert that there are no errors emitted from the browser
    // function writeScreenShot(data, filename) {
    //   var stream = fs.createWriteStream(filename);
    //   stream.write(new Buffer(data, 'base64'));
    //   stream.end();
    // }
    // writeScreenShot(await browser.takeScreenshot(), `${Date.now()}.png`)

    // const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    // expect(logs).not.toContain(jasmine.objectContaining({
    //   level: logging.Level.SEVERE,
    // } as logging.Entry));
  });
  afterAll(async () => {
    browser.close()
  })
});
describe('任务栏操作', () => {
  let browser: puppeteer.Browser;
  let webPage: puppeteer.Page;
  let page: PageP
  let taskBar: TaskBar
  beforeEach(async () => {
    console.log('初始化')
    browser = browser || await puppeteer.launch({ headless: false });
    webPage = await browser.newPage();
    await webPage.goto('http://localhost:4200');
    page = new PageP(browser, webPage)
    console.log('页面初始化完成')

    taskBar = new TaskBar(await webPage.$('app-taskbar-field .slotted>div'), browser, webPage)
  })
  it('移动任务栏', async () => {
    let { width, height } = await webPage.viewport()
    await taskBar.move({ x: width - 5, y: height / 2 }, undefined, { isAbsolute: true })
    taskBar = new TaskBar(await webPage.$('.taskbar--field--slot__right.slotted>div'), browser, webPage)
    await expect(taskBar).toBeTruthy()
    await taskBar.move({ x: 5, y: height / 2 }, undefined, { isAbsolute: true })
    taskBar = new TaskBar(await webPage.$('.taskbar--field--slot__left.slotted>div'), browser, webPage)
    await expect(taskBar).toBeTruthy()
    await taskBar.move({ x: width / 2, y: 5 }, undefined, { isAbsolute: true })
    taskBar = new TaskBar(await webPage.$('.taskbar--field--slot__top.slotted>div'), browser, webPage)
    await expect(taskBar).toBeTruthy()
    await taskBar.move({ x: width / 2, y: height - 5 }, undefined, { isAbsolute: true })
    taskBar = new TaskBar(await webPage.$('.taskbar--field--slot__bottom.slotted>div'), browser, webPage)
    await expect(taskBar).toBeTruthy()

  })
  afterEach(async () => {
    await webPage.close()
  })
  afterAll(async () => {
    browser.close()
  })
})