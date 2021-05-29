import { WindowModule } from './../window/window.module';
import { MainRoutes } from './main.routing';
import { TaskbarFieldModule } from './../taskbar-field/taskbar-field.module';
import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { StoreModule } from '@ngrx/store';
import { DesktopModule } from '../desktop/desktop.module';
// import { taskbarPosition_Reducer } from '@ngrx/store/taskbar.store';
// import { WindowHandle_Reducer } from '@ngrx/store/window.store';
// import { DesktopSizeChange_Reducer } from '@ngrx/store/desktop.store';
import { CyiaStoreModule } from 'cyia-ngx-common/store';
import { DesktopStoreService } from 'src/store/desktop.store';
import { TaskbarStoreService } from 'src/store/taskbar.store';
import { WindowsStoreService } from 'src/store/window.store';

let mainToken = new InjectionToken('');

@NgModule({
  imports: [
    CommonModule,
    TaskbarFieldModule,
    MainRoutes,
    // todo 需要修改
    StoreModule.forFeature('main', mainToken),
    CyiaStoreModule.forRoot({ token: mainToken, stores: [DesktopStoreService, TaskbarStoreService, WindowsStoreService] }),
    DesktopModule,
    WindowModule,
  ],
  declarations: [MainComponent],
  providers: [],
})
export class MainModule {}
