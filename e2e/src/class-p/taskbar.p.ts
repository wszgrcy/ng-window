import { ElementBase } from './element-base';
import * as puppeteer from "puppeteer";

export class TaskBar extends ElementBase {
    constructor(public elementHandle: puppeteer.ElementHandle, public browser: puppeteer.Browser, public page: puppeteer.Page) {
        super(elementHandle, browser, page)
    }
    async getPosition() {
        let classList: string[] = (await this.getElementProperty('className', await this.elementHandle.$('div.windowList'))).split(' ')
        console.log(classList)
 
        return classList.find((val) => /top|right|left|bottom/.test(val))
    }
}