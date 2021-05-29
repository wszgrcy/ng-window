import { Injectable } from '@angular/core';
import { DesktopSize } from '@ngrx/store/desktop.store';
import { NgrxAction, NgrxStore } from 'cyia-ngx-common/store';
import { StoreBase } from 'cyia-ngx-common/store';
import { WindowPayload, WindowStatus } from 'src/interface/window.interface';
@Injectable({
  providedIn: 'root',
})
@NgrxStore()
export class WindowsStoreService extends StoreBase<WindowPayload[]> {
  initState = [];
  init(state: WindowPayload): WindowPayload[] {
    state.zIndex = this.state.length;
    // console.log(action.payload)
    return [...this.state, state]
      .sort((a, b) => (b.id === a.id ? 1 : a.zIndex - b.zIndex))
      .map((value, i) => ({ ...value, zIndex: state.id === value.id ? this.state.length : i }));
  }
  min(state: WindowPayload): WindowPayload[] {
    // todo 查找某一个图标,更改为最小化(或者还原)
    this.state
      .filter(({ id }) => id == state.id)
      .forEach((value) => {
        value.status = WindowStatus.min;
      });
    return [...this.state];
  }
  restore(state: WindowPayload): WindowPayload[] {
    this.state
      .filter(({ id }) => id == state.id)
      .forEach((value) => {
        value.status = WindowStatus.normal;
      });
    return [...this.state];
  }
  max(state: WindowPayload): WindowPayload[] {
    // todo 查找某一个图标,更改为最最大化(或者还原)
    this.state
      .filter(({ id }) => id == state.id)
      .forEach((value) => {
        value.status = WindowStatus.max;
      });
    return [...this.state];
  }
  onclose(state: WindowPayload): WindowPayload[] {
    this.state
      .filter(({ id }) => id == state.id)
      .forEach((value) => {
        value.status = WindowStatus.close;
      });
    return [...this.state];
  }
  closed(state: WindowPayload): WindowPayload[] {
    return this.state.filter(({ id }) => id != state.id);
  }
  move(state: WindowPayload): WindowPayload[] {
    return this.state
      .sort((a, b) => (b.id === a.id ? 1 : a.zIndex - b.zIndex))
      .map((value, i) => ({ ...value, zIndex: state.id === value.id ? this.state.length : i }));
  }
  click(state: WindowPayload): WindowPayload[] {
    return this.state
      .sort((a, b) => (b.id === a.id ? 1 : a.zIndex - b.zIndex))
      .map((value, i) => ({ ...value, zIndex: state.id === value.id ? this.state.length : i }));
  }
}
