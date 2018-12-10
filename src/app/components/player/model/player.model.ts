export interface Player {
  name: string;
  saveResult: (number) => void;
  result?: number;
}

export class PlayerModel implements Player {
  name: string;
  result: number;

  constructor(name) {
    this.name = name;
    this.result = 0;
  }

  saveResult(result) {
    this.result = result;
  }
}
