
import * as puppeteer from "puppeteer";
import { mousePositionCenter, mousePositionOffset, adjustWindow } from '../common/common.mouse';
import { getElementStyle, getElementProperty } from '../common/common.element';
import { ElementBase } from './element-base';
export class ComponentWIndowP extends ElementBase {
    isMax = false
    mouse: puppeteer.Mouse
    buttonListFinder: puppeteer.ElementHandle[]
    constructor(public elementHandle: puppeteer.ElementHandle, public browser: puppeteer.Browser, public page: puppeteer.Page) {
        super(elementHandle, browser, page)
        this.mouse = this.page.mouse
    }
    async getBtnList(
    ) {
        this.buttonListFinder = await this.elementHandle.$$('header mat-icon')
    }
    async  max(restore?: boolean) {
        expect(this.isMax).toEqual(!!restore)
        let maxButton = this.buttonListFinder[1]
        let pos = mousePositionCenter(await maxButton.boundingBox())
        return this.mouse.click(pos.x, pos.y)
    }
    async min() {
        let minButton = this.buttonListFinder[0]
        let pos = mousePositionCenter(await minButton.boundingBox())
        return this.mouse.click(pos.x, pos.y)
    }
    async close() {
        let minButton = this.buttonListFinder[2]
        let pos = mousePositionCenter(await minButton.boundingBox())
        return this.mouse.click(pos.x, pos.y)
    }
    /**
     * 实际是基于header中心点移动的,并没有真正输入多少移动多少,
     *
     * @author cyia
     * @date 2019-04-20
     * @param {x,y}
     * @returns
     */
    async move({ x, y }, options?: Object) {
        return super.move({ x, y }, await this.elementHandle.$('header title'), options)
    }
    async    adjustWindow(direction: string, size: number) {
        return super.adjustWindow(direction, size, await this.elementHandle.$(`.resize.${direction}`))
    }
    async getElementStyle(name: keyof CSSStyleDeclaration) {

        return getElementStyle(this.page.mainFrame(), await this.elementHandle.$('app-window'), name)
    }
    async getElementProperty(name: keyof HTMLElement) {
        return getElementProperty(this.page.mainFrame(), await this.elementHandle.$('app-window'), name)
    }
}