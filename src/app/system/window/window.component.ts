import { Store, select } from '@ngrx/store';
import { WindowConfig } from './../../../interface/desktop.interface';
import { Component, OnInit, Inject, Optional, Type, ComponentFactoryResolver, ViewChild, ViewContainerRef, Renderer2, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ComponentFactory } from '@angular/core';
import { WINDOW_COMPONENT, WINDOW_DATA, WINDOW_CONFIG, WINDOW_ID } from 'src/const/window.token';
import { WindowHandle } from 'src/ngrx/store/window.store';
import { selectWindowHandleStatusById, selectDesktopSize, selectTaskbarPosition } from 'src/ngrx/selector/feature.selector';
import { tap, skip, filter } from 'rxjs/operators';
import { WindowStatus } from 'src/interface/window.interface';
import { DesktopSize } from 'src/ngrx/store/desktop.store';
import { Subscription } from 'rxjs';
import { DragDrop, DragRef } from '@angular/cdk/drag-drop';
import { coerceCssPixelValue } from "@angular/cdk/coercion";
@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
  host: {

  }
})
export class WindowComponent implements OnInit {
  @ViewChild('anchor', { read: ViewContainerRef }) anchor: ViewContainerRef
  componentFactory: ComponentFactory<{}>
  style = {
    height: '',
    width: '',
    display: '',
    transform: ''
  }
  /**最大化时最大尺寸 */
  maxSize: DesktopSize = {}
  subscriptionList: Subscription[] = []
  dragRef: DragRef<WindowComponent>
  flag = {
    max: false
  }
  /**
   * 此组件应该是一个壳,用来动态加载其他组件
   */
  constructor(
    @Inject(WINDOW_COMPONENT) component: Type<{}>,
    @Optional() @Inject(WINDOW_DATA) data: any,
    @Inject(WINDOW_CONFIG) public config: WindowConfig,
    @Inject(WINDOW_ID) private readonly id: string,
    // private service: WindowService,
    componentFactoryResolver: ComponentFactoryResolver,
    private store: Store<any>,
    private renderer: Renderer2,
    private dragdrop: DragDrop,
    private elementRef: ElementRef<HTMLElement>,
    private cd: ChangeDetectorRef
  ) {
    this.config = Object.assign({}, this.config)
    this.componentFactory = componentFactoryResolver.resolveComponentFactory(component)
    this.setWindowSize(this.config.width, this.config.height)
  }

  ngOnInit() {
    this.anchor.createComponent(this.componentFactory)
    this.dragRef = this.dragdrop.createDrag(this.elementRef)
    this.restoreWindowListener()

    this.subscriptionList.push(this.desktopSizeChangeListener(), this.taskbarPositionListener())
  }
  ngAfterViewInit(): void { }

  /**
   * TODO 最小化动画
   * @description 
   * @author cyia
   * @date 2019-03-09
   * @memberof WindowComponent
   */
  min() {
    this.style.display = 'none'
    this.store.dispatch(new WindowHandle('[WINDOW]min', {
      id: this.id
    }))
  }

  transform
  /**
   * 
   * @description 
   * @author cyia
   * @date 2019-03-08
   * @memberof WindowComponent
   */
  toggleMax() {
    this.flag.max = !this.flag.max;
    // this.store.dispatch(new WindowHandle(this.flag.max ? '[WINDOW]max' : '[WINDOW]restore', {
    //   id: this.id
    // }))
    if (this.flag.max) {
      this.setWindowSize(this.maxSize.width, this.maxSize.height)
      this.dragRef.disabled = true
      this.transform = this.elementRef.nativeElement.style.transform;
      this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `translate3d(calc(-${coerceCssPixelValue(this.config.left || 0)} + ${coerceCssPixelValue(this.maxSize.left || 0)}),calc(-${coerceCssPixelValue(this.config.top || 0)} + ${coerceCssPixelValue(this.maxSize.top || 0)}), 0px)`)
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'transform', this.transform)
      this.elementRef.nativeElement.style.transform = this.transform;
      this.dragRef.disabled = false
      this.setWindowSize(this.config.width, this.config.height)
    }
  }

  close() {
    this.store.dispatch(new WindowHandle('[WINDOW]onclose', {
      id: this.id
    }));
    this.style.display = 'none';
    this.anchor.clear();
  }
  /**
   * @description 设置窗口尺寸
   * @author cyia
   * @date 2019-03-10
   * @param width
   * @param height
   * @memberof WindowComponent
   */
  setWindowSize(width, height) {
    this.style.width = coerceCssPixelValue(width)
    this.style.height = coerceCssPixelValue(height)
  }
  /**
   * @description 还原窗口
   * @author cyia
   * @date 2019-03-10
   * @memberof WindowComponent
   */
  restoreWindowListener() {
    this.subscriptionList.push(
      this.store.pipe(
        skip(1),//doc 跳过第一个初始化
        select(selectWindowHandleStatusById, this.id),
        filter((val) => val == WindowStatus.normal),
      ).subscribe((val) => {
        this.style.display = '';
      })
    )
  }
  desktopSizeChangeListener() {
    return this.store.pipe(
      select(selectDesktopSize),
      filter((val) => !!val)
    ).subscribe((value) => {
      Object.assign(this.maxSize, value)
      if (this.flag.max) {
        this.setWindowSize(value.width, value.height)
        this.cd.detectChanges()
      }
    })

  }

  /**
   * @description 监听任务栏位置变化
   * @author cyia
   * @date 2019-03-09
   * @memberof DesktopComponent
   */
  taskbarPositionListener() {
    return this.store.pipe(
      select(selectTaskbarPosition),
      filter(val => !!val),
    ).subscribe((val) => {
      this.maxSize.top = ``
      this.maxSize.left = ``
      if (val == 'top') {
        this.maxSize.top = `56px`
      } else if (val == 'left') {
        this.maxSize.left = `56px`
      }
    })
  }
  ngOnDestroy(): void {
    console.log('window销毁')
    this.subscriptionList.forEach((val) => {
      val.unsubscribe()
    })
  }
}
