import { WindowService } from './../../../service/window.service';
import { WINDOW_COMPONENT, WINDOW_DATA, WINDOW_CONFIG, WINDOW_SERVICE, WINDOW_ID as WINDOW_ID } from 'src/const/window.token';
import { HelloComponentComponent } from './../../../component/hello-component/hello-component.component';
import { Component, OnInit, Renderer2, ViewChild, ElementRef, NgZone, ViewContainerRef, TemplateRef, Inject, Injector } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, fromEvent } from 'rxjs';
import { POSITION } from 'src/ngrx/store/taskbar.store';
import { selectTaskbarPosition, selectWindowHandleStatusById, selectWindowHandleCloseById } from 'src/ngrx/selector/feature.selector';
import { filter } from "rxjs/operators";
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { ICON_MARGIN, ICON_SIZE } from 'src/const/desktop.config';
import { IconItem, BootMethod } from 'src/interface/desktop.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { WindowComponent } from '../window/window.component';
import { WindowHandle } from 'src/ngrx/store/window.store';
import { WindowStatus } from 'src/interface/window.interface';
import { DesktopSizeChange } from 'src/ngrx/store/desktop.store';
import { coerceCssPixelValue } from '@angular/cdk/coercion';
@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {
  /**
   * 应用需要固化排序
   * 
   * 
   */
  @ViewChild('taskbarpatch') taskbarPatch: ElementRef
  taskbarPosition: Observable<POSITION>;
  /**原始图标列表,未排序 */
  rawList: IconItem[] = [{
    name: 'hello',
    method: BootMethod.dragdrop,
    component: HelloComponentComponent,
    data: {},
    config: {
      top: 123
      // height:
    },
    icon: 'accessibility_new',
    // token: 'hello'
  }]
  /**图标阵列,多行列显示用 */
  iconArray: any[][] = []
  columnLength: number
  constructor(
    private store: Store<any>,
    private renderer: Renderer2,
    private elementRef: ElementRef<Element>,
    private zone: NgZone,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private overlay: Overlay,
    private injector: Injector,
    private service: WindowService
  ) {
    this.taskbarPosition = store.select(selectTaskbarPosition)
  }
  drop(e: CdkDragDrop<any>) {
    console.log('测试', e.previousIndex, e.currentIndex)
    if (e.previousContainer === e.container) {
      moveItemInArray(e.container.data, e.previousIndex, e.currentIndex)
    } else {
      transferArrayItem(e.previousContainer.data, e.container.data, e.previousIndex, e.currentIndex)
    }
    this.iconArray.forEach((column, i) => {
      if (column.length > this.columnLength) {
        let item = column.pop()
        if (!this.iconArray[i + 1]) {
          this.iconArray[i + 1] = []
        }
        this.iconArray[i + 1].push(item)
      }
    })
  }
  ngOnInit() {
    this.taskbarPositionListener()
    this.deskTopSizeListener()
    this.windowCloseListener()
  }
  deskTopSizeListener() {
    this.zone.runOutsideAngular(() => {
      fromEvent(window, 'resize').subscribe((val) => {
        this.changeIconSort()
      })
    })
  }
  ngAfterViewInit(): void {
    console.dir(this.elementRef.nativeElement)
  }
  /**
   * 纵向根据高分长度
   * 拖动时超过一列长度换下一行(连续触发)
   * 
   * @description 视图大小变更后重置图标排列
   * @author cyia
   * @date 2019-03-04
   * @param { width, height }
   * @memberof DesktopComponent
   */
  changeIconSort() {
    this.iconArray = []
    let { clientWidth: width, clientHeight: height } = this.elementRef.nativeElement;
    this.store.dispatch(new DesktopSizeChange('[DesktopSize]change', { width, height }))
    /**每列的长度,每列最大可以摆放的图标个数 */
    this.columnLength = (height - ICON_MARGIN) / (ICON_MARGIN + ICON_SIZE.height) | 0

    let i = -1
    this.rawList.forEach((val, j) => {
      if (!(j % this.columnLength)) {
        this.iconArray[++i] = []
      }
      this.iconArray[i].push(val)
    })
  }
  /**
   * @description 监听任务栏位置变化
   * @author cyia
   * @date 2019-03-09
   * @memberof DesktopComponent
   */
  taskbarPositionListener() {
    this.taskbarPosition
      .pipe(filter(val => !!val))
      .subscribe((val) => {
        console.log('变更', val);
        ['top', 'right', 'bottom', 'left'].forEach((value) => {
          this.renderer.removeClass(this.elementRef.nativeElement, value)
        })
        this.renderer.addClass(this.elementRef.nativeElement, val)
        this.changeIconSort()
      })
  }
  openWindow(item: IconItem) {
    console.log(coerceCssPixelValue(item.config.top))
    let strategy = this.overlay.position().global().top(coerceCssPixelValue(item.config.top))
      .left(coerceCssPixelValue(item.config.left))
    let overlayRef = this.overlay.create({
      positionStrategy: strategy,
      panelClass: 'no-pointer-events'

    })
    let time = `${Date.now()}`;
    let injector = Injector.create([
      { provide: WINDOW_COMPONENT, useValue: item.component },
      { provide: WINDOW_DATA, useValue: item.data },
      { provide: WINDOW_CONFIG, useValue: item.config },
      { provide: WINDOW_ID, useValue: time }
    ])

    overlayRef.attach(new ComponentPortal(WindowComponent, null, injector))
    this.store.dispatch(new WindowHandle('[WINDOW]init', {
      id: time,
      icon: item.icon,
      status: WindowStatus.normal,
      overlay: overlayRef
    }))

  }
  /**
   * @description 监听窗口关闭销毁窗口
   * @author cyia
   * @date 2019-03-09
   * @memberof DesktopComponent
   */
  windowCloseListener() {
    this.store.pipe(select(selectWindowHandleCloseById), filter((val) => !!val))
      .subscribe((list) => {
        list.forEach((item) => {
          item.overlay.detach()
          this.store.dispatch(new WindowHandle('[WINDOW]closed', item))
        })
      })
  }
}
