import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationDebugComponent } from './application-debug.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatInputModule, FormsModule],
  declarations: [ApplicationDebugComponent],
})
export class ApplicationDebugModule {
  component = ApplicationDebugComponent;
}
