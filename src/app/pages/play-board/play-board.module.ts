import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayBoardComponent } from './play-board.component';
import { PlayBoardRoutingModule } from 'src/app/pages/play-board/play-board-routing.module';
import { CubeModule } from 'src/app/components/cube/cube.module';

@NgModule({
  declarations: [PlayBoardComponent],
  imports: [
    CommonModule,
    RouterModule,
    PlayBoardRoutingModule,

    CubeModule
  ],
})
export class PlayBoardModule { }
