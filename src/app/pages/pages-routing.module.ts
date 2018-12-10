import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { AuthGuard } from 'src/app/@core/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './start/start.module#StartModule',
  },

  {
    path: 'board',
    loadChildren: './play-board/play-board.module#PlayBoardModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'final',
    loadChildren: './final/final.module#FinalModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'statistics',
    loadChildren: './statistics/statistics.module#StatisticsModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
