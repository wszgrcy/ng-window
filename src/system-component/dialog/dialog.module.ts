import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintComponent } from './hint/hint.component';
import { MatSnackBarModule, MatIconModule } from '@angular/material';

@NgModule({
    declarations: [HintComponent],
    imports: [CommonModule,
        MatSnackBarModule,
        MatIconModule
    ],
    exports: [],
    entryComponents: [HintComponent],
    providers: [],
})
export class DialogModule { }