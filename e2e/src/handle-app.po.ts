import { browser, WebElement } from 'protractor';

export function openApp(appElement: WebElement) {
    return browser.actions()
        .mouseMove(appElement)
        .doubleClick()
        .perform();
}
export function pageInit() {

}
