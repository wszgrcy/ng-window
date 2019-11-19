import * as puppeteer from 'puppeteer';
export function mousePositionCenter(boundingBox: puppeteer.BoundingBox) {
    return {
        x: boundingBox.x + boundingBox.width / 2,
        y: boundingBox.y + boundingBox.height / 2
    };
}
export function mousePositionOffset(boundingBox: puppeteer.BoundingBox, { x = 0, y = 0 } = {}) {
    return {
        x: boundingBox.x + x,
        y: boundingBox.y + y
    };
}
export async function adjustWindow(el: puppeteer.ElementHandle, direction: string, size: number) {
    let x = 0, y = 0;
    switch (direction) {
        case 'left':
            x = -size;
            break;
        case 'right':
            x = size;
            break;
        case 'top':
            y = -size;
            break;
        case 'bottom':
            y = size;
            break;

        default:
            break;
    }
    return { pos: mousePositionOffset(await el.boundingBox()), offset: { x, y } };

}
