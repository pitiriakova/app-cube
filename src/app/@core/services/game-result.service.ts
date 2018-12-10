import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { Router } from '@angular/router';
import {Player} from 'src/app/components/player/model/player.model';

@Injectable({
  providedIn: 'root'
})
export class GameResultService {
  public winnersDetected: Subject<any> = new Subject<any>();
  private winners: Array<Player> = [];

  constructor(private router: Router) {
    if (this.winners.length === 0) {
      this.router.navigate(['board']);
    }
  }

  public calculateWinners (players): void {
    this.winners = [];

    const maxResult = Math.max(... players.map(player => player.result));

    players.forEach((player) => {
      if (player.result === maxResult) {
        this.winners.push(player);
      }
    });

    this.winnersDetected.next();
  }

  public getWinners(): Array<Player> {
    return this.winners;
  }
}
