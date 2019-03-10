import { MaterialBaseModule } from './../../../module/material.base.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './window.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialBaseModule,
    MatIconModule
  ],
  declarations: [WindowComponent],
  exports: [WindowComponent],
  entryComponents: [WindowComponent]
})
export class WindowModule { }
