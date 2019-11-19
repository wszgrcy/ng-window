import { Component, OnInit } from '@angular/core';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  dialog = CustomDialogComponent;
  constructor() {
    console.log(this.dialog);
   }

  ngOnInit() {
  }

}
