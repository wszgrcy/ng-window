import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponentComponent } from './hello-component.component';
import { MaterialBaseModule } from 'src/module/material.base.module';
@NgModule({
  imports: [
    CommonModule,
    MaterialBaseModule
    // RouterModule.forChild(routes)
  ],
  declarations: [HelloComponentComponent],
  exports: [
    HelloComponentComponent
  ],
  entryComponents: [HelloComponentComponent]
})
export class HelloComponentModule { }
