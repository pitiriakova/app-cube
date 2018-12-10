import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { RouterModule } from '@angular/router';
import { StartRoutingModule } from 'src/app/pages/start/start-routing.module';
import { PlayerModule } from 'src/app/components/player/player.module';

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    StartRoutingModule,
    RouterModule,


    PlayerModule
  ],
  exports: [StartComponent]
})
export class StartModule { }
