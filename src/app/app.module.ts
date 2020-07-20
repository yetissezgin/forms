import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { MainpageComponent } from './mainpage/mainpage.component'
import {ReactiveFormsModule} from "@angular/forms";
import { ReactiveformComponent } from './reactiveform/reactiveform.component'


@NgModule({
  declarations: [
    AppComponent,
    SimpleformComponent,
    MainpageComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
