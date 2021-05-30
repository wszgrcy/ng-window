import { WindowModule } from './../window/window.module';
import { MainRoutes } from './main.routing';
import { TaskbarFieldModule } from './../taskbar-field/taskbar-field.module';
import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { StoreModule } from '@ngrx/store';
import { DesktopModule } from '../desktop/desktop.module';
import { CyiaStoreModule } from 'cyia-ngx-common/store';
import { DesktopStoreService } from 'src/store/desktop.store';
import { TaskbarStoreService } from 'src/store/taskbar.store';
import { WindowsStoreService } from 'src/store/window.store';

const MAIN_TOKEN = new InjectionToken('');

@NgModule({
  imports: [
    CommonModule,
    TaskbarFieldModule,
    MainRoutes,
    StoreModule.forFeature('main', MAIN_TOKEN),
    CyiaStoreModule.forFeature({name: 'main', token: MAIN_TOKEN, stores: [WindowsStoreService, DesktopStoreService, TaskbarStoreService] }),
    DesktopModule,
    WindowModule,
  ],
  declarations: [MainComponent],
  providers: [],
})
export class MainModule {}
