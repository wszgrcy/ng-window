import { Component, OnInit, Optional } from '@angular/core';
import { WindowComponent } from '../../app/system/window/window.component';

@Component({
  selector: 'app-hello-component',
  templateUrl: './hello-component.component.html',
  styleUrls: ['./hello-component.component.css']
})
export class HelloComponentComponent implements OnInit {

  constructor(
    @Optional() private windowComponent: WindowComponent) {
    console.log('hello构造')
    console.log(windowComponent)
  }

  ngOnInit() {

  }
  ngAfterViewInit(): void {
  }
  ngOnDestroy(): void {
    console.log('hello', '销毁')
  }

}
