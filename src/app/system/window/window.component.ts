import { Store, select } from '@ngrx/store';
import { WindowConfig, NgCustomElement, LoadType } from './../../../interface/desktop.interface';
import { Component, OnInit, Inject, Optional, Type, ComponentFactoryResolver, ViewChild, ViewContainerRef, Renderer2, ElementRef, ChangeDetectorRef, NgZone } from '@angular/core';
import { ComponentFactory } from '@angular/core';
import { WINDOW_COMPONENT, WINDOW_DATA, WINDOW_CONFIG, WINDOW_ID } from 'src/const/window.token';
import { WindowHandle } from 'src/ngrx/store/window.store';
import { selectWindowHandleStatusById, selectDesktopSize, selectTaskbarPosition, selectWindowZIndex } from 'src/ngrx/selector/feature.selector';
import { tap, skip, filter } from 'rxjs/operators';
import { WindowStatus } from 'src/interface/window.interface';
import { DesktopSize } from 'src/ngrx/store/desktop.store';
import { Subscription, config } from 'rxjs';
import { DragDrop, DragRef } from '@angular/cdk/drag-drop';
import { coerceCssPixelValue } from "@angular/cdk/coercion";
import { OverlayRef } from '@angular/cdk/overlay';
@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
  host: {
    "(click)": "dispatchMove()"
  }
})
export class WindowComponent implements OnInit {
  /**
   * TODO 尺寸变更
   * TODO 被拖动时升高层叠级别
   * 
   */
  @ViewChild('anchor', { read: ViewContainerRef }) anchor: ViewContainerRef
  @ViewChild('header') header: ElementRef<HTMLElement>
  @ViewChild('main') main: ElementRef<HTMLElement>
  /**仅在原生模式使用 */
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
    // @Inject(WINDOW_COMPONENT) component: Type<{}>,
    @Optional() @Inject(WINDOW_DATA) data: any,
    @Inject(WINDOW_CONFIG) public config: WindowConfig,
    @Inject(WINDOW_ID) private readonly id: string,
    // private service: WindowService,
    componentFactoryResolver: ComponentFactoryResolver,
    // @Optional() module: NgCustomElement,
    private store: Store<any>,
    private renderer: Renderer2,
    private dragdrop: DragDrop,
    private elementRef: ElementRef<HTMLElement>,
    private cd: ChangeDetectorRef,
    private zone: NgZone
    // private overlay:OverlayRef
  ) {
    this.config = Object.assign({}, this.config)
    if (config.loadType == LoadType.native) {
      this.componentFactory = componentFactoryResolver.resolveComponentFactory(config.component)

    }
    this.setWindowSize(this.config.width, this.config.height)
  }

  ngOnInit() {
    if (this.config.loadType == LoadType.native) {
      this.anchor.createComponent(this.componentFactory)
    } else if (this.config.loadType == LoadType.webComponent) {
      // console.log(this.config.module.import=='../../../web-component/ng/ng-animation.js')
      console.warn('准备加载')
      console.log(this.config.module.import)
      this.config.module.import().then((val) => {
        console.warn('加载成功', val)
        let element = document.createElement(this.config.module.elementName)
        this.renderer.appendChild(this.main.nativeElement, element)

      })
      setTimeout(() => {

      }, 6000);
    }
    this.dragRef = this.dragdrop.createDrag(this.elementRef)
    this.dragRef.withHandles([this.header])
    this.restoreWindowListener()

    this.subscriptionList.push(this.desktopSizeChangeListener(), this.taskbarPositionListener(), this.windowZIndexListener(), this.windowDragStartListener())

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
   * @description 监听窗口移动发送信息
   * @author cyia
   * @date 2019-03-13
   * @memberof WindowComponent
   */
  private windowDragStartListener() {
    return this.dragRef.started.subscribe(() => {
      this.dispatchMove()
    })
  }
  public dispatchMove() {
    this.store.dispatch(new WindowHandle('[WINDOW]move', { id: this.id }))

  }
  private windowZIndexListener() {
    return this.store.pipe(
      select(selectWindowZIndex, this.id),
      tap((val) => { console.log('监听层叠', val) }),
      filter((val) => val && !!Object.keys(val).length && val.zIndex !== undefined),

    ).subscribe(({ overlay, zIndex }) => {
      console.log('层叠变化', zIndex)
      this.renderer.setStyle(overlay.hostElement, 'z-index', zIndex)
    })
  }
  /**
   * @description 还原窗口
   * @author cyia
   * @date 2019-03-10
   * @memberof WindowComponent
   */
  private restoreWindowListener() {
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
  private desktopSizeChangeListener() {
    return this.store.pipe(
      select(selectDesktopSize),
      filter((val) => !!val)
    ).subscribe((value) => {
      Object.assign(this.maxSize, value)
      console.log('最大值',this.maxSize,value)
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
    console.log('window销毁')
    this.subscriptionList.forEach((val) => {
      val.unsubscribe()
    })
  }
}
