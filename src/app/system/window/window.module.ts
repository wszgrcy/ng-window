import { MaterialBaseModule } from './../../../module/material.base.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './window.component';
import { MatIconModule } from '@angular/material';
import { DirectiveModule } from 'src/directive/directive.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialBaseModule,
    MatIconModule,
    DirectiveModule
  ],
  declarations: [WindowComponent],
  exports: [WindowComponent],
  entryComponents: [WindowComponent]
})
export class WindowModule { }
