export class Point {
    x: number;
    y: number;
    constructor(x?: number, y?: number) {
        if (!Number.isNaN(x) && !Number.isNaN(y)) {
            this.x = x;
            this.y = y;
        }
    }
    computeOffset(point: Point, exchange = false) {
        if (exchange) {
            return new Point(point.x - this.x, point.y - this.y);
        }
        return new Point(this.x - point.x, this.y - point.y);
    }
    isSame(point: Point) {
        return point.x === this.x && point.y === this.y;
    }
}
