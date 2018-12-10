import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesComponent } from 'src/app/pages/pages.component';
import { PagesRoutingModule } from 'src/app/pages/pages-routing.module';
import { StartModule } from 'src/app/pages/start/start.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    StartModule
  ],
  exports: [PagesComponent]
})
export class PagesModule { }
