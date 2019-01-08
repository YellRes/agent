import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RightSearchComponent } from './right-search.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [RightSearchComponent],
  exports: [RightSearchComponent]
})
export class RightSearchModule { }
