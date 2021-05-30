import { WindowStatus } from './../../../../interface/window.interface';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { WindowPayload } from 'src/interface/window.interface';
import { Observable } from 'rxjs';
import { WindowsStoreService } from 'src/store/window.store';
import { TaskbarStoreService } from 'src/store/taskbar.store';
import { POSITION } from 'src/interface/store.interface';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {
  windowList$: Observable<WindowPayload[]>;
  position$: Observable<POSITION>;
  public readonly WINDOWSTATUS = WindowStatus;
  constructor(
    private windowStore: WindowsStoreService,
    private taskbarStore: TaskbarStoreService
  ) { }

  ngOnInit() {
    this.windowList$ = this.windowStore.state$;
    this.position$ = this.taskbarStore.pipe(
      filter(val => !!val),
    );
  }

  open(item: WindowPayload) {
    this.windowStore.restore({ id: item.id });
  }
}
