import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponentComponent } from './hello-component.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [HelloComponentComponent],
  entryComponents: [HelloComponentComponent]
})
export class HelloComponentModule {
  component = HelloComponentComponent;
}
