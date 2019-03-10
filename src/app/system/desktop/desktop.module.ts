import { WindowService } from './../../../service/window.service';
import { HelloComponentModule } from './../../../component/hello-component/hello-component.module';
import { MaterialBaseModule } from './../../../module/material.base.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [
    CommonModule,
    MaterialBaseModule,
    HelloComponentModule,
    MatDialogModule,
    OverlayModule
  ],
  declarations: [DesktopComponent],
  exports: [DesktopComponent],
  // providers: [WindowService]
})
export class DesktopModule { }
