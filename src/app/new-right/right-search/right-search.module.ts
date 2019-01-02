import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightSearchComponent } from './right-search.component';
import { FormsModule } from '@angular/forms';
// import { FileService } from '../../file.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [RightSearchComponent],
  exports: [RightSearchComponent]
})
export class RightSearchModule { }
