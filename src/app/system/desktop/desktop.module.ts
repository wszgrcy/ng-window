import { HelloComponentModule } from './../../../component/hello-component/hello-component.module';
import { MaterialBaseModule } from './../../../module/material.base.module';
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop.component';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormComponentModule } from '../../../component/form/form.module';
import { NetworkDebuggingModule } from 'src/system-component/network-debugging/network-debugging.module';
import { RequestTestModule } from 'src/component/request-test/request-test.module';
import { ROUTES } from '@angular/router';
import { COMPONENT_LIST, lazyModuleFactory, lazyModuleList as LAZY_MODULE_LIST } from 'src/const/component-list';

@NgModule({
  imports: [
    CommonModule,
    MaterialBaseModule,
    HelloComponentModule,
    FormComponentModule,
    MatDialogModule,
    OverlayModule,
    MatIconModule,
    NetworkDebuggingModule,
    RequestTestModule
  ],
  declarations: [DesktopComponent],
  exports: [DesktopComponent],
  providers: [
    { provide: ROUTES, useValue: LAZY_MODULE_LIST, multi: true }
  ]
})
export class DesktopModule { }
