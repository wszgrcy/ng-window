import { Injectable } from '@angular/core';
import { NgrxAction, NgrxStore } from 'cyia-ngx-common/store';
import { StoreBase } from 'cyia-ngx-common/store';
import { DesktopSize } from 'src/interface/store.interface';
@Injectable()
@NgrxStore()
export class DesktopStoreService extends StoreBase<DesktopSize> {
  @NgrxAction()
  sizeChange(state: DesktopSize): DesktopSize {
    return state;
  }
}
