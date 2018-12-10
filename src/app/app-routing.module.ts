import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'game',
    loadChildren: './pages/pages.module#PagesModule',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
