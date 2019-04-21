import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUploadComponent } from './form-upload.component';
import { CyiaUploadModule, CyiaUpload4ImageModule, CyiaDirectiveModule } from "cyia-ngx-component";
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
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
  component = FormUploadComponent
}
