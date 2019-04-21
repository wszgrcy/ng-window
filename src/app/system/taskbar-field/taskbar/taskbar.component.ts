import { WindowStatus } from './../../../../interface/window.interface';
import { POSITION } from 'src/ngrx/store/taskbar.store';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { WindowPayload } from 'src/interface/window.interface';
import { Observable } from 'rxjs';
import { selectWindowHandle, selectTaskbarPosition } from '@ngrx/selector/feature.selector';
import { WindowHandle } from '@ngrx/store/window.store';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {
  windowList$: Observable<WindowPayload[]>
  position$: Observable<POSITION>;
  public readonly WINDOWSTATUS = WindowStatus
  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.windowList$ = this.store.select(selectWindowHandle)
    this.position$ = this.store.pipe(
      select(selectTaskbarPosition),
      filter(val => !!val),
    )
  }

  open(item: WindowPayload) {
    this.store.dispatch(new WindowHandle('[WINDOW]restore', { id: item.id }))
  }
}
