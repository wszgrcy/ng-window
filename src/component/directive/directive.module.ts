import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive.component';
import { CyiaDirectiveModule } from 'cyia-ngx-component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    CyiaDirectiveModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [DirectiveComponent],
  entryComponents: [DirectiveComponent]
})
export class DirectiveModule {
  component = DirectiveComponent;
}
