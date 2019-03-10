import { WindowStatus } from './../../../../interface/window.interface';
import { POSITION } from 'src/ngrx/store/taskbar.store';
import { Store, select } from '@ngrx/store';
import { WindowService } from './../../../../service/window.service';
import { Component, OnInit } from '@angular/core';
import { filter, map, pairwise } from 'rxjs/operators';
import { WindowPayload } from 'src/interface/window.interface';
import { Observable } from 'rxjs';
import { selectWindowHandle, selectTaskbarPosition } from 'src/ngrx/selector/feature.selector';
import { WindowHandle } from 'src/ngrx/store/window.store';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {
  windowList$: Observable<WindowPayload[]>
  position$: Observable<POSITION>;
  public readonly WINDOWSTATUS = WindowStatus
  constructor(private windowService: WindowService,
    private store: Store<any>
  ) {
    console.warn('taskbar初始化')
  }

  ngOnInit() {
    console.log(this.store)
    this.windowList$ = this.store.select(selectWindowHandle)
    this.position$ = this.store.pipe(
      select(selectTaskbarPosition),
      filter(val => !!val),
    )
  }

  open(item: WindowPayload) {
    this.store.dispatch(new WindowHandle('[WINDOW]restore', { id: item.id }))
  }
  taskbarPositionListener() {

  }
}
