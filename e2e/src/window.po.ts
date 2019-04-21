import { WebElement, browser, ElementFinder, ElementArrayFinder } from 'protractor';
import { max } from 'moment';

export class ComponentWIndow {
    isMax = false

    buttonListFinder: ElementArrayFinder
    constructor(private elementFinder: ElementFinder) {
        this.buttonListFinder = elementFinder.$$('header mat-icon')
    }
    async  max(restore?: boolean) {
        expect(this.isMax).toEqual(!!restore)
        let maxButton = this.buttonListFinder.get(1)
        return browser.actions()
            .mouseMove(await maxButton.getWebElement())
            .click(await maxButton.getWebElement())
            .perform().then(() => {
                this.isMax = !restore
            })
    }
    async min() {
        let minButton = this.buttonListFinder.get(0)
        return browser.actions()
            .mouseMove(await minButton.getWebElement())
            .click(await minButton.getWebElement())
            .perform()
    }
    async close() {
        let minButton = this.buttonListFinder.get(2)
        return browser.actions()
            .mouseMove(await minButton.getWebElement())
            .click(await minButton.getWebElement())
            .perform()
    }
    /**
     * 实际是基于header中心点移动的,并没有真正输入多少移动多少,
     *
     * @author cyia
     * @date 2019-04-20
     * @param {x,y}
     * @returns
     */
    async move({ x, y }) {
        let header = this.elementFinder.$('header title')
        console.log(await header.getText())
        return browser.actions()
            .mouseDown(await header.getWebElement())
            .mouseMove(await header.getWebElement(), { x: 0, y: 0 })
            .mouseMove(await header.getWebElement(), { x, y })
            // .mouseMove()
            .mouseUp()
            .perform()
        // return browser.touchActions()
        //     .flickElement(await header.getWebElement(), { x: 50, y: 50 }, 1000)
        //     .perform()

    }
    async    adjustWindow(direction: string, size: number) {
        let el = this.elementFinder.$(`.resize.${direction}`)
        let x = 0, y = 0
        switch (direction) {
            case 'left':
                x = -size
                break;
            case 'right':
                x = size
                break;
            case 'top':
                y = -size
                break;
            case 'bottom':
                y = size
                break;

            default:
                break;
        }
        return browser.actions()
            .mouseDown(await el.getWebElement())
            .mouseMove(await el.getWebElement(), { x: 0, y: 0 })
            .mouseMove(await el.getWebElement(), { x, y })
            .mouseUp()
            .perform()
    }

}