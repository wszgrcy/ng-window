import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker.component';
import { CyiaDirectiveModule, CyiaColorpickerModule } from 'cyia-ngx-component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
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
