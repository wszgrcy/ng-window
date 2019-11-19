import { Component, OnInit, Inject } from '@angular/core';
import { HINT_DATA } from 'src/const/toast.token';
import { Subject } from 'rxjs';
import { HintStatus, HintOptionsWithPosition } from 'src/interface/toast.interface';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceInLeft, bounceInRight, bounceInUp, bounceInDown, bounceIn, bounceOutLeft, bounceOutRight, bounceOutUp, bounceOutDown, bounceOut } from 'src/animation/animate.css';

@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss'],
  host: {},
  /**
   * TODO 需要适配多方的动画,移入,移出
   */
  animations: [
    trigger('transition', [
      transition('*=>inLeft', [
        useAnimation(bounceInLeft)
      ]),
      transition('*=>inRight', [
        useAnimation(bounceInRight)
      ]),
      transition('*=>inUp', [
        useAnimation(bounceInUp)
      ]),
      transition('*=>inDown', [
        useAnimation(bounceInDown)
      ]),
      transition('*=>in', [
        useAnimation(bounceIn)
      ]),
      transition('*=>outLeft', [
        useAnimation(bounceOutLeft)
      ]),
      transition('*=>outRight', [
        useAnimation(bounceOutRight)
      ]),
      transition('*=>outUp', [
        useAnimation(bounceOutUp)
      ]),
      transition('*=>outDown', [
        useAnimation(bounceOutDown)
      ]),
      transition('*=>out', [
        useAnimation(bounceOut)
      ]),
    ])
  ]
})
export class HintComponent implements OnInit {
  constructor(@Inject(HINT_DATA) data) {
    this.message = data.message;
    this.status = data.status;
    this.options = data.options;
    this.animationStatus = this.getAnimationStatus().in;
  }
  message: string;
  status: HintStatus;
  options: HintOptionsWithPosition;
  animationStatus: string;
  statusMap = new Map([
    [/^left/, { in: 'inLeft', out: 'outLeft' }],
    [/^right/, { in: 'inRight', out: 'outRight' }],
    [/center_top/, { in: 'inDown', out: 'outUp' }],
    [/center_center/, { in: 'in', out: 'out' }],
    [/center_bottom/, { in: 'inUp', out: 'outDown' }],
  ]);

  onDestroy = new Subject();

  getAnimationStatus() {
    for (const regExp of this.statusMap.keys()) {
      if (regExp.test(`${this.options.position.horizontalPosition}_${this.options.position.verticalPosition}`)) {
        return this.statusMap.get(regExp);
      }
    }
  }
  ngOnInit() {
  }
  countDown(time: number) {
    this.options.duration;
  }
  destoryComponent() {
    if (!/^out/.test(this.animationStatus)) { return; }
    this.onDestroy.next();
  }
  beforeDestory() {
    this.animationStatus = this.getAnimationStatus().out;
  }
}
