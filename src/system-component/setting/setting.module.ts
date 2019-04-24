import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { MatSelectModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  declarations: [SettingComponent],
  entryComponents: [SettingComponent]
})
export class SettingModule {
  component = SettingComponent
}
