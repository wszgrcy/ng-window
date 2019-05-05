import { Store, select } from '@ngrx/store';
import { WindowConfig, LoadType } from './../../../interface/desktop.interface';
import { Component, OnInit, Inject, Optional, ComponentFactoryResolver, ViewChild, ViewContainerRef, Renderer2, ElementRef, ChangeDetectorRef, NgModuleFactoryLoader, Injector } from '@angular/core';
import { ComponentFactory } from '@angular/core';
import { WINDOW_DATA, WINDOW_CONFIG, WINDOW_ID } from 'src/const/window.token';
import { WindowHandle } from '@ngrx/store/window.store';
import { selectWindowHandleStatusById, selectDesktopSize, selectTaskbarPosition, selectWindowZIndex } from '@ngrx/selector/feature.selector';
import { skip, filter } from 'rxjs/operators';
import { WindowStatus } from 'src/interface/window.interface';
import { DesktopSize } from '@ngrx/store/desktop.store';
import { Subscription } from 'rxjs';
import { DragDrop, DragRef } from '@angular/cdk/drag-drop';
import { coerceCssPixelValue } from "@angular/cdk/coercion";
@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
  host: {
    "(click)": "dispatchClick()",
    "[style.display]": "style.display"
  }
})
export class WindowComponent implements OnInit {
  /***插入组件位置 */
  @ViewChild('anchor', { read: ViewContainerRef }) anchor: ViewContainerRef
  /**标题栏 */
  @ViewChild('header') header: ElementRef<HTMLElement>
  /**用来插入web-component */
  @ViewChild('main') main: ElementRef<HTMLElement>
  /**仅在原生模式使用 */
  componentFactory: ComponentFactory<{}>
  style = {
    height: null,
    width: null,
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
  // onDestroy = new Subject()
  hostElement: HTMLElement
  /**
   * 此组件应该是一个壳,用来动态加载其他组件
   */
  constructor(
    @Optional() @Inject(WINDOW_DATA) data: any,
    @Inject(WINDOW_CONFIG) public config: WindowConfig,
    @Inject(WINDOW_ID) private readonly id: string,
    private componentFactoryResolver: ComponentFactoryResolver,
    private store: Store<any>,
    private renderer: Renderer2,
    private dragdrop: DragDrop,
    private elementRef: ElementRef<HTMLElement>,
    private cd: ChangeDetectorRef,
    private loader: NgModuleFactoryLoader,
    private injector: Injector
  ) {
    this.hostElement = elementRef.nativeElement
    //TODO 深拷贝
    this.config = Object.assign({}, this.config)
    this.style.width = this.config.width
    this.style.height = this.config.height
    this.setWindowSize(this.config.width, this.config.height)
  }

  ngOnInit() {
    //doc 正常模式载入
    if (this.config.loadType == LoadType.native) {
      this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.config.component)
      this.anchor.createComponent(this.componentFactory)
    }
    //doc web-component模式载入
    else if (this.config.loadType == LoadType.webComponent) {
      this.config.module.import().then((val) => {
        let element = document.createElement(this.config.module.elementName)
        this.renderer.appendChild(this.main.nativeElement, element)
      })
    } else if (this.config.loadType === LoadType.lazyModule) {
      this.loader.load(this.config.lazyModule).then((ngModuleFactory) => {
        let ngModuleRef = ngModuleFactory.create(this.injector)
        let { component } = ngModuleRef.instance
        let componentFactory = ngModuleRef.componentFactoryResolver.resolveComponentFactory(component)
        this.anchor.createComponent(componentFactory)
      })
    }
    //doc 创建拖动实例
    this.dragRef = this.dragdrop.createDrag(this.elementRef)
    this.dragRef.withHandles([this.header])
    this.subscriptionList.push(this.restoreWindowListener(), this.desktopSizeChangeListener(), this.taskbarPositionListener(), this.windowZIndexListener(), this.windowDragStartListener())

  }

  ngAfterViewInit(): void { }

  /**
   * TODO 最小化动画
   * @author cyia
   * @date 2019-03-09
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
   * @author cyia
   * @date 2019-03-08
   */
  toggleMax() {
    this.flag.max = !this.flag.max;
    if (this.flag.max) {
      ['width', 'height', 'left', 'top'].forEach((str) => {
        this.style[str] = this.hostElement.style[str]
        this.renderer.setStyle(this.hostElement, str, '')
      })
      this.setWindowSize(this.maxSize.width, this.maxSize.height)
      this.dragRef.disabled = true;
      this.transform = this.hostElement.style.transform;

      this.renderer.setStyle(this.hostElement, 'transform', `translate3d(calc(-${coerceCssPixelValue(this.config.left || 0)} + ${coerceCssPixelValue(this.maxSize.left || 0)}),calc(-${coerceCssPixelValue(this.config.top || 0)} + ${coerceCssPixelValue(this.maxSize.top || 0)}), 0px)`)
    } else {
      this.renderer.setStyle(this.hostElement, 'transform', this.transform)
      this.dragRef.disabled = false;
      // this.setWindowSize(this.style.width, this.style.height);
      ['width', 'height', 'left', 'top'].forEach((str) => {
        // this.style[str] = this.hostElement.style[str]
        this.renderer.setStyle(this.hostElement, str, this.style[str])
      })
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

   */
  private setWindowSize(width, height) {
    this.renderer.setStyle(this.hostElement, 'width', coerceCssPixelValue(width))
    this.renderer.setStyle(this.hostElement, 'height', coerceCssPixelValue(height))
  }

  /**
   * @description 监听窗口移动发送信息
   * @author cyia
   * @date 2019-03-13
   */
  private windowDragStartListener() {
    return this.dragRef.started.subscribe(() => {
      this.dispatchMove()
    })
  }
  public dispatchMove() {
    this.store.dispatch(new WindowHandle('[WINDOW]move', { id: this.id }))
  }
  windowMove = false
  /**
   * 当页面被点击时触发
   *
   * @author cyia
   * @date 2019-04-11
   */
  public dispatchClick() {
    this.store.dispatch(new WindowHandle('[WINDOW]click', { id: this.id }))
  }
  /**
   * z轴变化
   *
   * @author cyia
   * @date 2019-04-11
   * @private
   * @returns
   */
  private windowZIndexListener() {
    return this.store.pipe(
      select(selectWindowZIndex, this.id),
      filter((val) => val && !!Object.keys(val).length && val.zIndex !== undefined),
    ).subscribe(({ overlay, zIndex, isActive }) => {
      this.renderer.setStyle(overlay.hostElement, 'z-index', zIndex)
      if (isActive) {
        this.renderer.addClass(this.hostElement, 'mat-elevation-z8')
      } else {
        this.renderer.removeClass(this.hostElement, 'mat-elevation-z8')
      }
    })
  }
  /**
   * @description 还原窗口
   * @author cyia
   * @date 2019-03-10

   */
  private restoreWindowListener() {
    return this.store.pipe(
      skip(1),//doc 跳过第一个初始化
      select(selectWindowHandleStatusById, this.id),
      filter((val) => val == WindowStatus.normal),
    ).subscribe((val) => {
      this.style.display = '';
    })
  }
  private desktopSizeChangeListener() {
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
  private taskbarPositionListener() {
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
    this.subscriptionList.forEach((val) => val.unsubscribe())
  }
}
