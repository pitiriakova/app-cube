import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubeComponent } from './cube.component';
import { RotateDirective } from 'src/app/components/cube/directives/rotate.directive';

@NgModule({
  declarations: [CubeComponent, RotateDirective],
  imports: [
    CommonModule
  ],
  exports: [CubeComponent],
})
export class CubeModule { }
