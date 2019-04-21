import { MaterialBaseModule } from './../module/material.base.module';
import { ThemeService } from './../service/theme.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from '@ngrx/store';
import { CyiaHttpModule } from 'cyia-ngx-common';
import { REQUEST_LIST } from 'src/const/http-list';
import { HttpInterceptor } from '@system-component/network-debugging/interceptors';
import { InterceptorChange_Reducer } from '@ngrx/store/intereptor.store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialBaseModule,
    StoreModule.forRoot({ intercept: InterceptorChange_Reducer }),
    CyiaHttpModule.forRoot(REQUEST_LIST)
    // MaterialAllModule,
    // FormsModule,
    // ReactiveFormsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (service: ThemeService) =>
        () => Promise.resolve(service.init())
      ,
      deps: [ThemeService],
      multi: true
    },
    HttpInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
