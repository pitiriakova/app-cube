import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameResultService } from 'src/app/@core/services/game-result.service';
import {Player} from 'src/app/components/player/model/player.model';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  winners: Array<Player>;

  constructor(private router: Router, private gameResultService: GameResultService) { }

  ngOnInit() {
    this.winners = this.gameResultService.getWinners();
    console.log('this.winners: ', this.winners);
  }

  startNewGame() {
    this.router.navigate(['/']);
  }
}
