import { TASKBAR_POSITION } from './../../../const/config.localStorage';
import { Component, OnInit, ViewChildren, ViewContainerRef, QueryList, ComponentFactoryResolver, ViewChild, TemplateRef, ViewRef, Renderer2 } from '@angular/core';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { TaskBarFieldOldData } from 'src/interface/taskbar.interface';
import { Store } from '@ngrx/store';
import { TaskbarPosition } from '@ngrx/store/taskbar.store';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-taskbar-field',
  templateUrl: './taskbar-field.component.html',
  styleUrls: ['./taskbar-field.component.scss']
})
export class TaskbarFieldComponent implements OnInit {
  /**
   * 获取初始的位置->默认值
   * 当拖动时自动排列,更换排列位置
   * 只初始化一次
   */

  @ViewChildren('slot', { read: ViewContainerRef }) slotViewContainerRefList: QueryList<ViewContainerRef>
  @ViewChild('taskbar') taskbarTemplate: TemplateRef<any>
  readonly slotList = [
    { prefix: 'top', list: [], slotted: false },
    { prefix: 'right', list: [], active: false },
    { prefix: 'bottom', list: [], active: false },
    { prefix: 'left', list: [], active: false },
  ]
  old: TaskBarFieldOldData = {
    viewContainerRef: null,
  }
  /**实例化的任务栏 */
  taskbar: ViewRef
  constructor(
    private resolver: ComponentFactoryResolver,
    private renderer: Renderer2,
    private store: Store<any>
  ) { }

  ngOnInit() {
  }
  drop(e, i, list) {
    this.changePosition(i, false)
  }
  ngAfterViewInit(): void {
    let index = this.getInitPosition()
    setTimeout(() => {
      this.changePosition(index, true)
    });
  }

  /**
   * @description 获得初始化位置
   * @author cyia
   * @date 2019-03-03
   * @returns
   * @memberof TaskbarFieldComponent
   */
  getInitPosition(): number {
    let position = localStorage.getItem(TASKBAR_POSITION) || 'bottom';
    let index = this.slotList.findIndex(({ prefix }) => prefix == position)
    return ~index ? index : 0
  }
  /**
   * @description 找到原位置,移除,放到新位置
   * @author cyia
   * @date 2019-03-03
   * @memberof TaskbarFieldComponent
   */
  changePosition(i = 0, init: boolean = false) {
    let viewContainerRef = this.slotViewContainerRefList.toArray()[i];
    if (init) {
      /**采用动态创建组件的方式 */
      let component = this.resolver.resolveComponentFactory(TaskbarComponent)

      viewContainerRef.createComponent(component);
      /**-------------- */
      this.taskbar = viewContainerRef.get(0)
      this.old.viewContainerRef = viewContainerRef
    } else {
      this.old.viewContainerRef.detach(0)
      viewContainerRef.insert(this.taskbar)
      this.old.viewContainerRef = viewContainerRef
      localStorage.setItem(TASKBAR_POSITION, this.slotList[i].prefix)
    }

    this.slotList.forEach((item, index) => {
      item.slotted = index == i ? true : false
    })
    this.store.dispatch(new TaskbarPosition(this.slotList[i].prefix as any))
  }
  enterPredicate = (drag: CdkDrag, drop: CdkDropList) => {
    // console.log('判断', drag, drop)
    return true
  }
}
