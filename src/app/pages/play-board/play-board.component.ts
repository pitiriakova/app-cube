import {Component, OnDestroy, OnInit} from '@angular/core';
import { PlayersStorageService } from 'src/app/@core/services/players-storage.service';
import { Player } from 'src/app/components/player/model/player.model';
import { GameResultService } from 'src/app/@core/services/game-result.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-board',
  templateUrl: './play-board.component.html',
  styleUrls: ['./play-board.component.css']
})
export class PlayBoardComponent implements OnInit, OnDestroy {
  players: Array<Player>;

  constructor(private router: Router,
              private playersStorageService: PlayersStorageService,
              private gameResultService: GameResultService) {
    this.gameResultService.winnersDetected.subscribe(() => {
      this.showFinalPage();
    });
  }

  ngOnInit() {
    this.players = this.playersStorageService.getPlayers();
  }

  ngOnDestroy(): void {
    clearTimeout();
  }

  checkGameStatus() {
    if (this.players.every((player) => player.result > 0)) {
      this.findWinner();
    }
  }

  findWinner() {
    this.gameResultService.calculateWinners(this.players);
  }

  showFinalPage() {
    setTimeout(() => {
      this.router.navigate(['final']);
    }, 2000);
  }
}
