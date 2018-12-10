import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/@core/services/auth-guard.service';
import { PlayersStorageService } from 'src/app/@core/services/players-storage.service';
import { GameResultService } from 'src/app/@core/services/game-result.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  providers: [AuthGuard, PlayersStorageService, GameResultService],
})
export class CoreModule { }
