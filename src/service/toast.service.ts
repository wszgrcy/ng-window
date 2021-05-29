import {
  Injectable,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
  ComponentRef,
  EmbeddedViewRef,
} from '@angular/core';
import { HintComponent } from '@system-component/dialog/hint/hint.component';
import { HintStatus, ToastPosition, HintOptions, HintOptionsWithPosition } from 'src/interface/toast.interface';
import { Subject } from 'rxjs';
import { Overlay } from '@angular/cdk/overlay';
import { HINT_DATA, TOAST_POSITION } from 'src/const/toast.token';

@Injectable({ providedIn: 'root' })
export class ToastService {
  hintList: Subject<any[]> = new Subject();
  applicationRef: ApplicationRef;
  container: HTMLDivElement;
  position: ToastPosition;
  constructor(
    private overlay: Overlay,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector // private viewContainerRef: ViewContainerRef
  ) {
    this.applicationRef = this.injector.get<ApplicationRef>(ApplicationRef);
    // 最好不要用 DOM 操作，建议改用 ToastService + ToastComponent 实现
    this.container = document.createElement('div');
    this.container.classList.add('toast-container');
    document.querySelector('body').appendChild(this.container);
    this.position = this.injector.get(TOAST_POSITION);

    this.container.classList.add(`h-${this.position.horizontalPosition}`, `v-${this.position.verticalPosition}`);
  }

  setPosition(toastPosition: ToastPosition) {
    this.container.classList.remove('h-left', 'h-right', 'h-center', 'v-top', 'v-bottom', 'v-center');
    this.container.classList.add(`h-${toastPosition.horizontalPosition}`, `v-${toastPosition.verticalPosition}`);
    this.position = Object.assign({}, toastPosition);
  }
  success(message: string, options?: HintOptions) {
    return this._hint(HintStatus.success, message, options);
  }
  warn(message: string, options?: HintOptions) {
    return this._hint(HintStatus.warn, message, options);
  }
  error(message: string, options?: HintOptions) {
    return this._hint(HintStatus.error, message, options);
  }
  _hint(status: HintStatus, message: string, options: HintOptions) {
    return new Promise<void>((res) => {
      setTimeout(() => {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(HintComponent);
        // const anchor = document.createElement('div');
        // this.container.appendChild(anchor);
        const injector = Injector.create(
          [
            {
              provide: HINT_DATA,
              useValue: {
                message,
                options: Object.assign({}, options, {
                  position: this.position,
                }),
                status,
              },
              // { provide: ComponentRef, useValue: componentRef }
            },
          ],
          this.injector
        );

        const componentRef = componentFactory.create(injector, undefined, undefined);
        this.container.appendChild(this._getComponentRootNode(componentRef));
        this.applicationRef.attachView(componentRef.hostView);
        componentRef.instance.onDestroy.subscribe(() => {
          componentRef.destroy();
          res();
        });
      }, 0);
    });
  }
  private _getComponentRootNode(componentRef: ComponentRef<any>): HTMLElement {
    return (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  }
}
