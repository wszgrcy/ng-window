import { Component, OnInit, Inject, inject, ViewContainerRef } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { HINT_DATA } from 'src/const/toast.token';
import { ComponentRef } from '@angular/core';
import { Subject } from 'rxjs';
import { HintStatus, HintOptions } from 'src/interface/toast.interface';

@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss'],

})
export class HintComponent implements OnInit {
  message: string
  status: HintStatus
  options: HintOptions
  constructor(@Inject(HINT_DATA) data) {
    this.message = data.message
    this.status = data.status
    this.options = data.options
  }

  ngOnInit() {
  }

  onDestroy = new Subject()
  countDown(time: number) {
    this.options.duration
  }
  destoryComponent(){
    this.onDestroy.next()
  }
}
