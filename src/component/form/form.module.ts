import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { CyiaDatePickerModule, CyiaUploadModule, CyiaUpload4ImageModule } from 'cyia-ngx-component';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CyiaCustompickerModule } from 'cyia-ngx-component/custompicker';
import { CustomDialogModule } from './custom-dialog/custom-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    CyiaDatePickerModule.forRoot('zh-cn'),
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    CyiaUploadModule,
    CyiaUpload4ImageModule,
    CyiaCustompickerModule,
    CustomDialogModule
  ],
  declarations: [FormComponent],
  entryComponents: [FormComponent],
})
export class FormComponentModule {
  component = FormComponent;
}
