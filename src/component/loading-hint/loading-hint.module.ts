import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingHintComponent } from './loading-hint.component';
import { LOAD_HINT_TOKEN } from './type';
import { LoadComponent } from './load/load.component';
import { CyiaLoadingHintModule } from 'cyia-ngx-common/loading-hint';
import { LoadModule } from './load/load.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    LoadModule,
    CyiaLoadingHintModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [LoadingHintComponent],
  entryComponents: [LoadingHintComponent],
  providers: [
    { provide: LOAD_HINT_TOKEN, useValue: { component: LoadComponent } },
  ],
})
export class LoadingHintModule {
  component = LoadingHintComponent;
}
