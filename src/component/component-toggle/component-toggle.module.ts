import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentToggleComponent } from './component-toggle.component';
import { CyiaComponentToggleModule } from 'cyia-ngx-component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CyiaComponentToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule
  ],
  declarations: [ComponentToggleComponent],
  entryComponents: [ComponentToggleComponent]
})
export class ComponentToggleModule {
  component = ComponentToggleComponent
}
