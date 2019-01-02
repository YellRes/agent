import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightComponent } from './right.component';
// import { FileService } from '../../file.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RightComponent],
  exports: [RightComponent]
})
export class RightModule { }
