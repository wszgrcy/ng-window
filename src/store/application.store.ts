import { Injectable } from '@angular/core';
import { BootMethod, IconItem, LoadType } from '@center-main/interface/desktop.interface';
import { NgrxAction, NgrxStore, StoreBase } from 'cyia-ngx-common/store';

@Injectable()
@NgrxStore()
export class ApplicationStoreService extends StoreBase<IconItem[]> {
  initState: IconItem[] = [
    {
      name: '网络调试',
      method: BootMethod.dragdrop,
      data: {},
      config: {
        title: '用于查看请求,替换请求,返回值等的系统组件',
        // component: NetworkDebuggingComponent,
        // loadType: LoadType.native,
        lazyModule: () => import('@system-component/network-debugging/network-debugging.module').then((e) => e.NetworkDebuggingModule),
        loadType: LoadType.lazyModule,
      },
      icon: 'http',
    },
    {
      name: '系统设置',
      method: BootMethod.dragdrop,
      data: {},
      config: {
        title: '系统设置',
        lazyModule: () => import('@system-component/setting/setting.module').then((e) => e.SettingModule),
        loadType: LoadType.lazyModule,
      },
      icon: 'settings',
      iconBackground: 'rgb(0, 120, 215)',
    },
    {
      name: '应用调试',
      method: BootMethod.dragdrop,
      data: {},
      config: {
        title: '应用调试',
        lazyModule: () => import('@system-component/application-debug/application-debug.module').then((e) => e.ApplicationDebugModule),
        loadType: LoadType.lazyModule,
      },
      icon: 'settings',
      iconBackground: 'rgb(0, 120, 215)',
    },
  ];
  state: IconItem[] = this.initState;
  @NgrxAction()
  add(item: IconItem): IconItem[] {
    return [...this.state, item];
  }
  @NgrxAction()
  addList(list: IconItem[]): IconItem[] {
    return [...this.state, ...list];
  }
  @NgrxAction()
  remove({ id, index }: { id?: string; index?: number }) {
    if (id) {
      index = this.state.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.state.splice(index, 1);
        return [...this.state];
      }
    }
    if (index > -1 && index < this.state.length - 1) {
      this.state.splice(index, 1);
      return [...this.state];
    }
  }
}
