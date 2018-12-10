import { Injectable } from '@angular/core';
import { Player, PlayerModel } from 'src/app/components/player/model/player.model';

@Injectable({
  providedIn: 'root'
})

export class PlayersStorageService {
  private players: Array<Player> = [];

  constructor() { }

  public getSavedPlayers(): Array<Player> {
    if (sessionStorage.getItem('players')) {
      return this.fillPlayersFromStorage();
    }
  }

  public setPlayers (allPlayers): void {
      sessionStorage.removeItem('players');
      sessionStorage.setItem('players', JSON.stringify(allPlayers));
      this.players = [...allPlayers];
  }

  private fillPlayersFromStorage() {
    const players = JSON.parse(sessionStorage.getItem('players'));
    players.forEach((key) => {
      this.players = [...this.players, new PlayerModel(key.name)];
    });

    return this.players;
  }

  public getPlayers (): Array<Player> {
    return this.players;
  }
}
