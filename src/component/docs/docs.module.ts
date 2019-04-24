import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import { MarkdownModule } from './markdown/markdown.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule,
    FormsModule
  ],
  declarations: [DocsComponent],
  entryComponents: [DocsComponent]
})
export class DocsModule {
  component = DocsComponent
}
