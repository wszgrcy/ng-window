import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectComponent } from './inject.component';
import { CyiaDirectiveModule } from 'cyia-ngx-component';
import { MatPaginatorModule, MatButton, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    CyiaDirectiveModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  declarations: [InjectComponent],
  entryComponents: [InjectComponent]
})
export class InjectModule {
  component = InjectComponent;
}
