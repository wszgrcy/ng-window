import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkDebuggingComponent } from './network-debugging.component';
import { HttpInterceptor } from './interceptors';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MaterialFormModule } from 'src/module/material.form.module';
import { StrongInputComponent } from './strong-input/strong-input.component';
import { PropertyConfigComponent } from './property-config/property-config.component';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatDividerModule,
    MatCardModule,
    MaterialFormModule
  ],
  declarations: [
    NetworkDebuggingComponent, StrongInputComponent, PropertyConfigComponent
  ],
  providers: [
    HttpInterceptor
  ],
  entryComponents: [NetworkDebuggingComponent],
})
export class NetworkDebuggingModule {
  component = NetworkDebuggingComponent;
}
