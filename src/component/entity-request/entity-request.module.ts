import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityRequestComponent } from './entity-request.component';
import { CyiaHttpModule } from 'cyia-ngx-common';

@NgModule({
  imports: [
    CommonModule,
    CyiaHttpModule.forRoot()
  ],
  declarations: [EntityRequestComponent],
  entryComponents: [EntityRequestComponent]
})
export class EntityRequestModule {
  component = EntityRequestComponent
}
