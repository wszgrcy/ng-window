import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [],
    imports: [],
    exports: [MatInputModule, MatSelectModule, MatFormFieldModule, MatCheckboxModule],
    providers: [],
})
export class MaterialFormModule { }
