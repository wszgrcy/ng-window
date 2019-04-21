import { WindowModule } from './../window/window.module';
import { MainRoutes } from './main.routing';
import { TaskbarFieldModule } from './../taskbar-field/taskbar-field.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { StoreModule } from '@ngrx/store';
import { DesktopModule } from '../desktop/desktop.module';
import { taskbarPosition_Reducer } from '@ngrx/store/taskbar.store';
import { WindowHandle_Reducer } from '@ngrx/store/window.store';
import { DesktopSizeChange_Reducer } from '@ngrx/store/desktop.store';



@NgModule({
  imports: [
    CommonModule,
    TaskbarFieldModule,
    MainRoutes,
    StoreModule.forFeature('main', {
      taskbarPosition: taskbarPosition_Reducer,
      windowHandle: WindowHandle_Reducer,
      desktopSize: DesktopSizeChange_Reducer
    }),
    DesktopModule,
    WindowModule
  ],
  declarations: [MainComponent],
  providers: []
})
export class MainModule { }
