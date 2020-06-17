import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectComponent } from './inject.component';
import { CyiaDirectiveModule } from 'cyia-ngx-component';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    CyiaDirectiveModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
  declarations: [InjectComponent],
  entryComponents: [InjectComponent],
})
export class InjectModule {
  component = InjectComponent;
}
