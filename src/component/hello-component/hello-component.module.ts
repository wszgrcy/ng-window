import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponentComponent } from './hello-component.component';
import { MaterialBaseModule } from 'src/module/material.base.module';
import { MatButton, MatButtonModule, MatFormFieldModule, MatDatepickerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialBaseModule,
    MatFormFieldModule,
    MatDatepickerModule,
    // RouterModule.forChild(routes)
    MatButtonModule
  ],
  declarations: [HelloComponentComponent],
  exports: [
    HelloComponentComponent
  ],
  entryComponents: [HelloComponentComponent]
})
export class HelloComponentModule { }
