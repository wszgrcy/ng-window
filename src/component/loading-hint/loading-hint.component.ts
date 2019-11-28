import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { timer } from 'rxjs';
import { LoadingHint } from 'cyia-ngx-common/loading-hint';
import { LOAD_HINT_TOKEN } from './type';
@Component({
  selector: 'app-loading-hint',
  templateUrl: './loading-hint.component.html',
  styleUrls: ['./loading-hint.component.css']
})
export class LoadingHintComponent implements OnInit {
  @ViewChild('loadp', { read: ViewContainerRef, static: true }) loadPromiseRef: ViewContainerRef;
  @ViewChild('loado', { read: ViewContainerRef, static: true }) loadObservableRef: ViewContainerRef;
  @ViewChild('container', { static: true, read: ViewContainerRef }) containerRef: ViewContainerRef;
  constructor(public viewContainerRef: ViewContainerRef) {

  }


  ngOnInit() {
  }
  @LoadingHint('root', LOAD_HINT_TOKEN)
  loadPromise() {
    console.log('点击');
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 3000);
    });
  }

  @LoadingHint((type: LoadingHintComponent) => type.containerRef, LOAD_HINT_TOKEN)
  loadObservable() {
    console.log('准备调用');
    return timer(3000);
  }
  loadObservableE() {
    return this.loadObservable().subscribe((val) => {
      console.log('执行完成');
    });
  }
}
