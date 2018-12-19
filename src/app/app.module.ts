import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ChooseComponent} from './choose/choose.component'
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { RightSearchComponent } from './right-search/right-search.component';
import { AlertModule } from 'ngx-bootstrap' ;
import { Routes,RouterModule, ROUTES } from '@angular/router'
import { MyModelModule } from './my-model/my-model.module'
import { HttpClientModule } from '@angular/common/http';
import { NewRightComponent } from './new-right/new-right.component';
import { LoadComponent } from './load/load.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {LoadingComponent} from './loading/loading.component';
import { RightAddServerComponent } from './right-add-server/right-add-server.component' ;

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
    LoadComponent,
    ChooseComponent,
    LoadingComponent,
    RightAddServerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule,
    MyModelModule,
    
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
