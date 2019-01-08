import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap' ;
import { MyModelModule } from './my-model/my-model.module'
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';



import { NewRightComponent } from './new-right/new-right.component';
import {ChooseComponent} from './choose/choose.component'
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { LeftComponent } from './left/left.component';
// import { RightComponent } from './new-right/right/right.component';
// import { RightAddServerComponent } from './new-right/right-add-server/right-add-server.component';
// import { RightSearchComponent } from './new-right/right-search/right-search.component';
// import { LoadingComponent } from './loading/loading.component';
// import { LoadComponent } from './load/load.component';
import { NewRightModule } from './new-right/new-right.module';



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
    NewRightComponent,
    ChooseComponent,


    // RightComponent,
    // RightAddServerComponent,
    // RightSearchComponent,
    // LoadingComponent,
    // LoadComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule,
    MyModelModule,
    NewRightModule,

    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
