import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { RightSearchComponent } from './right-search/right-search.component';
import { AlertModule } from 'ngx-bootstrap' ;
import { Routes,RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { NewRightComponent } from './new-right/new-right.component';
import { LoadComponent } from './load/load.component';
import {NgxPaginationModule} from 'ngx-pagination';


// 路由部分
// const appRoutes: Routes = [
//   {
//     path: 'right' ,
//     component: RightComponent 
//   },
//   {
//     path: 'rightSearch' ,
//     component: RightSearchComponent
//   }
// ]

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    LeftComponent,
    RightComponent,
    RightSearchComponent,
    NewRightComponent,
    LoadComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    
    
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } 
    // ),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
