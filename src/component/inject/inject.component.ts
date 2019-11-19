import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inject',
  templateUrl: './inject.component.html',
  styleUrls: ['./inject.component.css']
})
export class InjectComponent implements OnInit {
  length = 20;
  constructor() { }

  ngOnInit() {
  }
  test(e) {
    console.log(e);
  }
}
