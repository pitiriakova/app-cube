import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import {StatisticsRoutingModule } from 'src/app/pages/statistics/statistics-routing.module';

@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }
