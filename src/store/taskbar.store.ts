import { Injectable } from '@angular/core';
import { DesktopSize } from '@ngrx/store/desktop.store';
import { POSITION } from '@ngrx/store/taskbar.store';
import { NgrxAction, NgrxStore } from 'cyia-ngx-common/store';
import { StoreBase } from 'cyia-ngx-common/store';
@Injectable({
  providedIn: 'root',
})
@NgrxStore()
export class TaskbarStoreService extends StoreBase<POSITION> {
  change(state:POSITION): POSITION {
    return state;
  }
}
