import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestTestComponent } from './request-test.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RequestTestComponent],
  entryComponents: [RequestTestComponent],
})
export class RequestTestModule {
  component = RequestTestComponent;
}
