import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TopModule } from './top/top.module';
import { MyRoutesRoutingModule } from './my-routes/my-routes-routing.module';
import { LeftModule } from './left/left.module';
import { NewRightModule } from './new-right/new-right.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    TopModule,
    MyRoutesRoutingModule,
    LeftModule,
    HttpClientModule,
    NewRightModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
