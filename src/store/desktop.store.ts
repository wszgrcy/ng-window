import { Injectable } from '@angular/core';
import { DesktopSize } from '@ngrx/store/desktop.store';
import { NgrxAction, NgrxStore } from 'cyia-ngx-common/store';
import { StoreBase } from 'cyia-ngx-common/store';
@Injectable({
  providedIn: 'root',
})
@NgrxStore()
export class DesktopStoreService extends StoreBase<DesktopSize> {
  sizeChange(state:DesktopSize): DesktopSize {
    return state;
  }
}
