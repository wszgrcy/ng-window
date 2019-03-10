import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { WindowHandle } from 'src/interface/window.interface';

@Injectable()
export class WindowService {
  // windowMin$ = new Subject()
  // windowMax$ = new Subject()
  // windowClose$ = new Subject()
  // window$ = new Subject<{ type: WindowHandle, payload: any }>()
  constructor() {
    console.warn('应该只构造一次')
  }

}
