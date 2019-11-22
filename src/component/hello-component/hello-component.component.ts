import { Component, OnInit, Optional } from '@angular/core';
import { WindowComponent } from '../../app/system/window/window.component';

// 来自项目模板，自己不用的组件应该删除
@Component({
  selector: 'app-hello-component',
  templateUrl: './hello-component.component.html',
  styleUrls: ['./hello-component.component.css']
})
export class HelloComponentComponent implements OnInit {

  constructor(
    @Optional() private windowComponent: WindowComponent) {
    console.log('hello构造');
    console.log(windowComponent);
  }

  ngOnInit() {

  }
  ngAfterViewInit(): void {
  }
  ngOnDestroy(): void {
    console.log('hello', '销毁');
  }

}
