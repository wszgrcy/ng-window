import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityRequestComponent } from './entity-request.component';
import { CyiaRepositoryModule } from 'cyia-ngx-common/repository';
import { MarkdownModule } from 'ngx-markdown';
@NgModule({
  imports: [CommonModule, CyiaRepositoryModule, MarkdownModule.forRoot()],
  declarations: [EntityRequestComponent],
  entryComponents: [EntityRequestComponent],
})
export class EntityRequestModule {
  component = EntityRequestComponent;
}
