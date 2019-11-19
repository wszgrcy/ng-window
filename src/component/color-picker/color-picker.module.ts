import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker.component';
import { CyiaDirectiveModule, CyiaColorpickerModule } from 'cyia-ngx-component';
import { MatIconModule, MatButtonModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    CyiaColorpickerModule,
    CyiaDirectiveModule,
    MatIconModule,
    MatButtonModule,

  ],
  declarations: [ColorPickerComponent],
  entryComponents: [ColorPickerComponent]
})
export class ColorPickerModule {
  component = ColorPickerComponent;
}
