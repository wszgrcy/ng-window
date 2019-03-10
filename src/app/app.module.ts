import { MaterialBaseModule } from './../module/material.base.module';
import { ThemeService } from './../service/theme.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialAllModule } from 'src/module/material.all.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialBaseModule,
    StoreModule.forRoot({})
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
