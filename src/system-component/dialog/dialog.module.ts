import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintComponent } from './hint/hint.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [HintComponent],
    imports: [CommonModule,
        MatSnackBarModule,
        MatIconModule
    ],
    exports: [HintComponent],
    entryComponents: [HintComponent],
    providers: [],
})
export class DialogModule { }
