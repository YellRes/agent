import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRightComponent } from './new-right.component';
import { RightModule } from './right/right.module';
import { RightAddServerModule } from './right-add-server/right-add-server.module';
import { RightSearchModule } from './right-search/right-search.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RightModule,
    RightAddServerModule,
    RightSearchModule,
    FormsModule
  ],
  declarations: [NewRightComponent],
  exports: [NewRightComponent]
})
export class NewRightModule { }
