import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Custompicker } from 'cyia-ngx-component/custompicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css']
})
export class CustomDialogComponent extends Custompicker {
  outputValue = {
    value: undefined, display: undefined
  };
  constructor(
    @Optional() public matdialogref: MatDialogRef<any, any>,
    @Optional() @Inject(MAT_DIALOG_DATA) data,
  ) {
    super();
  }

  ngOnInit() {
  }
  change(e) {
    this.outputValue = { display: `显示:${e}`, value: e };
  }

}
