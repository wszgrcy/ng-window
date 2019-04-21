import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { CyiaDatePickerModule, CyiaUploadModule, CyiaUpload4ImageModule } from "cyia-ngx-component";
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatDatepickerModule, MatButtonModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    CyiaDatePickerModule.forRoot('zh-cn'),
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    CyiaUploadModule,
    CyiaUpload4ImageModule
  ],
  declarations: [FormComponent],
  entryComponents: [FormComponent],
})
export class FormComponentModule {
  component = FormComponent
}
