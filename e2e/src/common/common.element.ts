import * as puppeteer from 'puppeteer';

export function getElementStyle(frame: puppeteer.Frame, element: puppeteer.ElementHandle, name: keyof CSSStyleDeclaration, ) {
    return frame.evaluate((el: HTMLElement, name) => Promise.resolve(el.style[name]), element, name);
}
export function getElementProperty(frame: puppeteer.Frame, element: puppeteer.ElementHandle, name: keyof HTMLElement, ) {
    return frame.evaluate((el: HTMLElement, name) => Promise.resolve(el[name]), element, name);
}
