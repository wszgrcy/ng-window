
import * as puppeteer from 'puppeteer';
import { mousePositionCenter, mousePositionOffset, adjustWindow } from '../common/common.mouse';
import { getElementStyle, getElementProperty } from '../common/common.element';
export class ElementBase {
    mouse: puppeteer.Mouse;
    moveBasePosition = { x: 5, y: 5 };
    constructor(public elementHandle: puppeteer.ElementHandle, public browser: puppeteer.Browser, public page: puppeteer.Page) {
        this.mouse = this.page.mouse;
    }

    /**
     * 实际是基于header中心点移动的,并没有真正输入多少移动多少,
     *
     * @author cyia
     * @date 2019-04-20
     * @param {x,y}
     * @returns
     */
    async move({ x, y }, el?: puppeteer.ElementHandle, { isAbsolute = false } = {}) {
        // let header = await this.elementHandle.$('header title')
        const pos = mousePositionOffset(await (el || this.elementHandle).boundingBox(), this.moveBasePosition);
        await this.mouse.move(pos.x, pos.y);
        await this.mouse.down();
        if (isAbsolute) {
            await this.mouse.move(x, y, { steps: 10 });
        } else {
            await this.mouse.move(pos.x + x, pos.y + y, { steps: 10 });
        }
        return this.mouse.up();
    }
    async adjustWindow(direction: string, size: number, el?: puppeteer.ElementHandle) {
        const { pos, offset } = await adjustWindow(el || this.elementHandle, direction, size);
        await this.mouse.move(pos.x, pos.y);
        await this.mouse.down();
        await this.mouse.move(pos.x + offset.x, pos.y + offset.y, { steps: 10 });
        return this.mouse.up();
    }
    async getElementStyle(name: keyof CSSStyleDeclaration) {

        return getElementStyle(this.page.mainFrame(), await this.elementHandle.$('app-window'), name);
    }
    async getElementProperty(name: keyof HTMLElement, el?: puppeteer.ElementHandle) {
        return getElementProperty(this.page.mainFrame(), el || this.elementHandle, name);
    }
}
