import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router' ;
import { LeftComponent } from '../left/left.component' ;

import { NewRightComponent } from '../new-right/new-right.component' ;
import { RightAddServerComponent } from '../new-right/right-add-server/right-add-server.component' ;



const ChildRoutes : Routes= [
 { path: '', redirectTo: 'index', pathMatch: 'full'  },
  {
    path: 'index' ,
    component: LeftComponent  ,
    children:[
      {
        path:'right',
        component: NewRightComponent ,
      },

    ]

    // path: 'right',
    // component: NewRightComponent
  },


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
