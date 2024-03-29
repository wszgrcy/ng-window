import { MaterialBaseModule } from './../module/material.base.module';
import { ThemeService } from './../service/theme.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HttpInterceptor } from '@system-component/network-debugging/interceptors';
import { InterceptorChange_Reducer } from '@ngrx/store/intereptor.store';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogModule } from '@system-component/dialog/dialog.module';
import { ToastContainerComponent } from '@system-component/dialog/toast-container/toast-container.component';
import { TOAST_POSITION } from 'src/const/toast.token';

@NgModule({
  declarations: [AppComponent, ToastContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialBaseModule,
    StoreModule.forRoot(
      { intercept: InterceptorChange_Reducer },
      {
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
        },
      }
    ),
    // CyiaHttpModule.forRoot(REQUEST_LIST),
    MatSnackBarModule,
    DialogModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (service: ThemeService) => () => Promise.resolve(service.init()),
      deps: [ThemeService],
      multi: true,
    },
    HttpInterceptor,
    // { provide: ROUTES, useValue: LAZY_MODULE_LIST, multi: true },
    {
      provide: TOAST_POSITION,
      useValue: { horizontalPosition: 'right', verticalPosition: 'bottom' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
