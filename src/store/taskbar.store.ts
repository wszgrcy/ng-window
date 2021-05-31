import { Injectable } from '@angular/core';
import { NgrxAction, NgrxStore } from 'cyia-ngx-common/store';
import { StoreBase } from 'cyia-ngx-common/store';
import { POSITION } from 'src/interface/store.interface';
@Injectable()
@NgrxStore()
export class TaskbarStoreService extends StoreBase<POSITION> {
  @NgrxAction()
  change(state: POSITION): POSITION {
    return state;
  }
}
