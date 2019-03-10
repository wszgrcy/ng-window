import { WindowService } from './../../../service/window.service';
import { WindowModule } from './../window/window.module';
import { MainRoutes } from './main.routing';
import { TaskbarFieldModule } from './../taskbar-field/taskbar-field.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
// import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { taskbarPosition_Reducer } from 'src/store/taskbar.store';
import { DesktopModule } from '../desktop/desktop.module';
import { taskbarPosition_Reducer } from 'src/ngrx/store/taskbar.store';
import { WindowHandle_Reducer } from 'src/ngrx/store/window.store';
import { DesktopSizeChange_Reducer as DesktopSize_Reducer } from 'src/ngrx/store/desktop.store';



@NgModule({
  imports: [
    CommonModule,
    TaskbarFieldModule,
    MainRoutes,
    StoreModule.forFeature('main', {
      taskbarPosition: taskbarPosition_Reducer,
      windowHandle: WindowHandle_Reducer,
      desktopSize: DesktopSize_Reducer
    }),
    DesktopModule,
    WindowModule
  ],
  declarations: [MainComponent],
  providers: [WindowService]
})
export class MainModule { }
