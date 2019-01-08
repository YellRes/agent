import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightComponent } from './right.component';
import { LoadComponent } from '../../load/load.component';
import { LoadingComponent } from '../../loading/loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RightComponent,LoadComponent,LoadingComponent],
  exports:[RightComponent]
})
export class RightModule { }
