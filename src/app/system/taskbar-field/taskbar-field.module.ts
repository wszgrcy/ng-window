import { MaterialBaseModule } from './../../../module/material.base.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskbarFieldComponent } from './taskbar-field.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialBaseModule,
    MatIconModule
  ],
  declarations: [
    TaskbarFieldComponent,
    TaskbarComponent
  ],
  entryComponents: [TaskbarComponent],
  exports: [TaskbarFieldComponent]
})
export class TaskbarFieldModule { }
