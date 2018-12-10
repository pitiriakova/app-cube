import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalComponent } from './final.component';
import {FinalRoutingModule } from 'src/app/pages/final/final-routing.module';

@NgModule({
  declarations: [FinalComponent],
  imports: [
    CommonModule,
    FinalRoutingModule
  ]
})
export class FinalModule { }
