import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { RightComponent } from './right/right.component';
import { RightAddServerComponent } from './right-add-server/right-add-server.component';
import { RightSearchComponent } from './right-search/right-search.component';
import { LoadingComponent } from '../loading/loading.component';
import { LoadComponent } from '../load/load.component';




// import { RightComponent } from './right/right.component';
// import { RightSearchComponent } from './right-search/right-search.component';
// import { RightAddServerComponent } from './right-add-server/right-add-server.component' ;



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [

  ],
  exports: [
  ],
  entryComponents:[RightComponent,RightAddServerComponent,RightSearchComponent]
})
export class NewRightModule { }
