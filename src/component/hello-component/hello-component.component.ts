import { Component, OnInit, Optional } from '@angular/core';
import { WindowComponent } from '../../app/system/window/window.component';

@Component({
  selector: 'app-hello-component',
  templateUrl: './hello-component.component.html',
  styleUrls: ['./hello-component.component.css']
})
export class HelloComponentComponent implements OnInit {

  constructor(@Optional() private windowComponent: WindowComponent) {
    console.log('hello构造')
    console.log(windowComponent)
  }

  ngOnInit() {

  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // import('../../web-component/ng/ng-animation').then((val) => {
    //   console.log(val)
    // })
    // import('web-component')

    // require()
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('hello', '销毁')
  }

}
