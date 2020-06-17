import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUploadComponent } from './form-upload.component';
import { CyiaUploadModule, CyiaUpload4ImageModule, CyiaDirectiveModule } from 'cyia-ngx-component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  imports: [
    CommonModule,
    CyiaUploadModule, CyiaUpload4ImageModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    CyiaDirectiveModule
  ],
  declarations: [FormUploadComponent],
  entryComponents: [FormUploadComponent],
})
export class FormUploadModule {
  component = FormUploadComponent;
}
