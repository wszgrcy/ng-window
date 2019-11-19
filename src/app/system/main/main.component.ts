import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/service/toast.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private toast: ToastService) { }

  ngOnInit() {
    this.toast.success('成功');
    this.toast.warn('警告');
    this.toast.error('报错');
  }

}
