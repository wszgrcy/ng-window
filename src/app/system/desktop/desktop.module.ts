import { HelloComponentModule } from './../../../component/hello-component/hello-component.module';
import { MaterialBaseModule } from './../../../module/material.base.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop.component';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormComponentModule } from '../../../component/form/form.module';
import { FormUploadModule } from '../../../component/form-upload/form-upload.module';
import { NetworkDebuggingModule } from 'src/system-component/network-debugging/network-debugging.module';
import { RequestTestModule } from 'src/component/request-test/request-test.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialBaseModule,
    HelloComponentModule,
    FormComponentModule,
    FormUploadModule,
    MatDialogModule,
    OverlayModule,
    MatIconModule,
    NetworkDebuggingModule,
    RequestTestModule
  ],
  declarations: [DesktopComponent],
  exports: [DesktopComponent],
  // providers: [WindowService]
})
export class DesktopModule { }
