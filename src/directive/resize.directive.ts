import { Directive, Input, ElementRef, NgZone, Renderer2, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { fromEvent, race, Subject } from 'rxjs';
import { skipUntil, tap, takeUntil } from 'rxjs/operators';
import { Point } from 'src/class/point.class';

@Directive({
  selector: '[appResize]',

})
export class ResizeDirective {
  /**
   * TODO 通过更改相对定位的偏移移动窗口,效率可能不是太高,用translate又因为拖动的原因没相关暴露api可以兼容操作
   */
  direction: 'horizontal' | 'vertical' | 'both'
  @Input() resizeableElement: HTMLElement;
  private _appResize: 'left' | 'right' | 'top' | 'bottom'
  @Input() get appResize() {
    return this._appResize
  }
  set appResize(str) {
    this._appResize = str;
    switch (str) {
      case 'left':
        this.isStart = true
        this.direction = 'horizontal';
        break;
      case 'right':
        this.direction = 'horizontal';
        break;
      case 'top':
        this.isStart = true
        this.direction = 'vertical';
        break;
      case 'bottom':
        this.direction = 'vertical';
        break;
    }
  }
  isStart = false
  hostElement: HTMLElement
  constructor(
    elementRef: ElementRef<HTMLElement>,
    private ngZone: NgZone,
    private renderer: Renderer2,
  ) {
    this.hostElement = elementRef.nativeElement
    this.ngZone.runOutsideAngular(() => this.resize())
  }
  pointOrigin: Point
  elementOffsetOrigin: Point
  /**每次移动的开始,会在移动中不断重置 */
  pointStart: Point
  ponitEnd: Point
  pointOffset: Point
  lastMove = {
    horizontal: 0,
    vertical: 0
  }
  onDestroy = new Subject()
  resize() {
    fromEvent(this.hostElement, 'mousemove')
      .pipe(
        skipUntil(fromEvent(this.hostElement, 'mousedown').pipe(tap((e: MouseEvent) => {
          this.onResizeStart(e)
        }))),
        takeUntil(race([fromEvent(this.hostElement, 'mouseup'),
        this.onDestroy.pipe(tap(() => { throw 'finish' }))
          // fromEvent(this.hostElement, 'mouseleave')
        ]).pipe(tap((e) => {
          this.onResizeEnd(e)
        }))
        )
      )
      .subscribe((e: MouseEvent) => {
        this.onResize(e)
      }, () => { }, this.resize.bind(this))
  }
  style = {}
  onResize(e: MouseEvent) {
    this.ponitEnd = new Point(e.clientX, e.clientY)
    this.pointOffset = this.ponitEnd.computeOffset(this.pointStart, this.isStart)
    let originOffset = this.ponitEnd.computeOffset(this.pointOrigin)
    switch (this.direction) {
      case 'horizontal':
        this.renderer.setStyle(this.resizeableElement, 'width', `${this.resizeableElement.offsetWidth + this.pointOffset.x}px`)
        if (this.isStart) {
          this.renderer.setStyle(this.resizeableElement, this.appResize, `${originOffset.x + this.lastMove.horizontal}px`)
        }
        break;
      case 'vertical':
        this.renderer.setStyle(this.resizeableElement, 'height', `${this.resizeableElement.offsetHeight + this.pointOffset.y}px`)
        if (this.isStart) {
          this.renderer.setStyle(this.resizeableElement, this.appResize, `${originOffset.y + this.lastMove.vertical}px`)
        }
        break
      case 'both':
        //todo 左上,左下,右上,右下
        this.renderer.setStyle(this.resizeableElement, 'height', `${this.resizeableElement.offsetHeight + this.pointOffset.y}px`)
        this.renderer.setStyle(this.resizeableElement, 'width', `${this.resizeableElement.offsetWidth + this.pointOffset.x}px`)
        break
      default:
        break;
    }

    this.pointStart = this.ponitEnd
  }
  /**
   * 开始更改尺寸触发
   *
   * @author cyia
   * @date 2019-04-13
   * @param e
   * @memberof ResizeDirective
   */
  onResizeStart(e: MouseEvent) {
    ['left', 'top', 'right', 'bottom', 'user-select', 'width', 'height'].forEach((str) => {
      this.style[str] = this.getElementStyle(str, this.hostElement)
    })
    this.renderer.setStyle(this.hostElement, 'top', '-100vh')
    this.renderer.setStyle(this.hostElement, 'left', '-100vw')
    this.renderer.setStyle(this.hostElement, 'right', '-100vw')
    this.renderer.setStyle(this.hostElement, 'bottom', '-100vh')
    this.renderer.setStyle(this.resizeableElement, 'user-select', 'none')
    this.renderer.setStyle(this.hostElement, 'width', 'auto')
    this.renderer.setStyle(this.hostElement, 'height', 'auto')
    this.pointStart = new Point(e.clientX, e.clientY)
    this.pointOrigin = this.pointStart
  }
  /**
   * 更改尺寸结束触发
   *
   * @author cyia
   * @date 2019-04-13
   * @param e
   * @memberof ResizeDirective
   */
  onResizeEnd(e: MouseEvent) {
    this.ponitEnd = new Point(e.clientX, e.clientY)
    this.pointOffset = this.ponitEnd.computeOffset(this.pointOrigin)
    this.lastMove.horizontal += this.pointOffset.x
    this.lastMove.vertical += this.pointOffset.y
    Object.keys(this.style).forEach((key, i, array) => {
      this.renderer.setStyle(this.hostElement, key, this.style[key])
    })
  }
  private getElementStyle(styleName: string, element: HTMLElement) {
    return element.style[styleName]
  }
  ngOnDestroy(): void {
    this.onDestroy.next()
  }
}
