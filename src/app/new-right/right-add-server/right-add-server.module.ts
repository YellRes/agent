import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RightAddServerComponent } from './right-add-server.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [RightAddServerComponent],
  exports: [RightAddServerComponent]
})
export class RightAddServerModule { }
