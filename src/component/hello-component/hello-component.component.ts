import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-component',
  templateUrl: './hello-component.component.html',
  styleUrls: ['./hello-component.component.css']
})
export class HelloComponentComponent implements OnInit {

  constructor() {
    console.log('hello构造')
  }

  ngOnInit() {

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('hello', '销毁')
  }
}
