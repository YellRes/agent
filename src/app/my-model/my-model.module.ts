import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router' ;
import { RightComponent } from '../right/right.component' ;
import { RightSearchComponent } from '../right-Search/right-Search.component' ;

const ChildRoutes : Routes= [
  {
    path: 'right' ,
    component: RightComponent 
  },
  {
    path: 'rightSearch' ,
    component: RightSearchComponent
  }
]

@NgModule({
  imports: [
    CommonModule ,
    RouterModule.forRoot(ChildRoutes) ,
  ],
  declarations: []
})
export class MyModelModule { 
  
}
