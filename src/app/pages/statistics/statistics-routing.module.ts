import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import { StatisticsComponent } from 'src/app/pages/statistics/statistics.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticsComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticsRoutingModule {}
