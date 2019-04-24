import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from './markdown.component';
import { FormsModule } from '@angular/forms';
// import { ServicesModule } from '../../services/services.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CssLoaderService } from '../css-loader/css-loader.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // ServicesModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [MarkdownComponent],
  exports: [
    MarkdownComponent
  ],
  providers: [
    CssLoaderService
  ]
})
export class MarkdownModule { }
