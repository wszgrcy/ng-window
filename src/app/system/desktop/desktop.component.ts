import { WINDOW_DATA, WINDOW_CONFIG, WINDOW_ID } from 'src/const/window.token';
import { Component, OnInit, Renderer2, ViewChild, ElementRef, NgZone, Injector } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { ICON_MARGIN, ICON_SIZE, LABEL_HEIGHT } from 'src/const/desktop.config';
import { IconItem } from 'src/interface/desktop.interface';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { WindowComponent } from '../window/window.component';
import { WindowStatus } from 'src/interface/window.interface';
import { coerceCssPixelValue } from '@angular/cdk/coercion';
import { DesktopStoreService } from 'src/store/desktop.store';
import { TaskbarStoreService } from 'src/store/taskbar.store';
import { WindowsStoreService } from 'src/store/window.store';
import { POSITION } from 'src/interface/store.interface';
import { ApplicationStoreService } from '@center-main/store/application.store';
import { skip } from 'rxjs/operators';
@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
})
export class DesktopComponent implements OnInit {
  // @ViewChild('taskbarpatch', { static: true }) taskbarPatch: ElementRef
  taskbarPosition: Observable<POSITION>;

  /**
   * 改为订阅式,返回就添加
   * store化
   *
   */
  rawList: Observable<IconItem[]> = this.appliactionStore.state$;
  // rawList: IconItem[] = []
  /**图标阵列,多行列显示用 */
  iconArray: IconItem[][] = [];
  columnLength: number;
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef<Element>,
    private zone: NgZone,
    private overlay: Overlay,
    private desktopStore: DesktopStoreService,
    private taskbarStore: TaskbarStoreService,
    private windowStore: WindowsStoreService,
    private appliactionStore: ApplicationStoreService
  ) {
    this.taskbarPosition = this.taskbarStore.state$;
  }
  drop(e: CdkDragDrop<any>) {
    if (e.previousContainer === e.container) {
      moveItemInArray(e.container.data, e.previousIndex, e.currentIndex);
    } else {
      transferArrayItem(e.previousContainer.data, e.container.data, e.previousIndex, e.currentIndex);
    }
    this.iconArray.forEach((column, i) => {
      if (column.length > this.columnLength) {
        const item = column.pop();
        if (!this.iconArray[i + 1]) {
          this.iconArray[i + 1] = [];
        }
        this.iconArray[i + 1].push(item);
      }
    });
  }
  ngOnInit() {
    this.applicationListener();
    this.taskbarPositionListener();
    this.deskTopSizeListener();
    this.windowCloseListener();
  }
  deskTopSizeListener() {
    this.zone.runOutsideAngular(() => {
      fromEvent(window, 'resize').subscribe((val) => {
        this.changeIconSort();
      });
    });
  }
  ngAfterViewInit(): void {
    // console.dir(this.elementRef.nativeElement)
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
    this.iconArray = [];
    const { clientWidth: width, clientHeight: height } = this.elementRef.nativeElement;
    this.desktopStore.sizeChange({ width, height });
    /**每列的长度,每列最大可以摆放的图标个数 */
    this.columnLength = ((height - ICON_MARGIN) / (ICON_MARGIN + ICON_SIZE.height + LABEL_HEIGHT)) | 0;

    let i = -1;
    this.appliactionStore.snapshot.forEach((val, j) => {
      if (!(j % this.columnLength)) {
        this.iconArray[++i] = [];
      }
      this.iconArray[i].push(val);
    });
  }
  /**
   * @description 监听任务栏位置变化
   * @author cyia
   * @date 2019-03-09
   * @memberof DesktopComponent
   */
  taskbarPositionListener() {
    this.taskbarPosition.pipe(filter((val) => !!val)).subscribe((val) => {
      ['top', 'right', 'bottom', 'left'].forEach((value) => {
        this.renderer.removeClass(this.elementRef.nativeElement, value);
      });
      this.renderer.addClass(this.elementRef.nativeElement, val);
      this.changeIconSort();
    });
  }
  applicationListener() {
    this.appliactionStore.pipe(skip(1)).subscribe(() => {
      this.changeIconSort();
    });
  }
  openWindow(item: IconItem) {
    const strategy = this.overlay.position().global().top(coerceCssPixelValue(item.config.top)).left(coerceCssPixelValue(item.config.left));
    const overlayRef = this.overlay.create({
      positionStrategy: strategy,
      panelClass: 'no-pointer-events',
    });
    const time = `${Date.now()}`;
    const injector = Injector.create([
      // { provide: WINDOW_COMPONENT, useValue: item.component },
      { provide: WINDOW_DATA, useValue: item.data },
      { provide: WINDOW_CONFIG, useValue: item.config },
      { provide: WINDOW_ID, useValue: time },
    ]);

    overlayRef.attach(new ComponentPortal(WindowComponent, null, injector));
    this.windowStore.init({
      id: time,
      icon: item.icon,
      status: WindowStatus.normal,
      overlay: overlayRef,
    });
  }
  /**
   * @description 监听窗口关闭销毁窗口
   * @author cyia
   * @date 2019-03-09
   * @memberof DesktopComponent
   */
  windowCloseListener() {
    this.windowStore
      .pipe(
        filter((item) => !!item),
        map((list) => list.filter(({ status }) => status == WindowStatus.close)),
        filter((val) => !!val)
      )
      .subscribe((list) => {
        list.forEach((item) => {
          item.overlay.detach();
          this.windowStore.closed(item);
        });
      });
  }
}
