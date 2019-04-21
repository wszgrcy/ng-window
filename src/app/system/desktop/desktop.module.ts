import { MaterialBaseModule } from './../../../module/material.base.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop.component';
import { MatIconModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
// import { NetworkDebuggingModule } from '@system-component/network-debugging/network-debugging.module';
// import { RequestTestModule } from '@component/request-test/request-test.module';
// import { ROUTES } from '@angular/router';
// import { LAZY_MODULE_LIST } from 'src/const/component-list';

@NgModule({
  imports: [
    CommonModule,
    MaterialBaseModule,
    OverlayModule,
    MatIconModule,
    // NetworkDebuggingModule,
    // RequestTestModule
  ],
  declarations: [DesktopComponent],
  exports: [DesktopComponent],
  providers: [
    // { provide: ROUTES, useValue: LAZY_MODULE_LIST, multi: true }
  ]
})
export class DesktopModule { }
