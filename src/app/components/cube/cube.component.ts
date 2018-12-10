import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import {Player} from 'src/app/components/player/model/player.model';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CubeComponent {
  @Input() player: Player;
  @Output() newResultAdded = new EventEmitter();

  public currentCubePosition;

  public positionTypes = [
    {value: 1, type: 'front'},
    {value: 2, type: 'back'},
    {value: 3, type: 'right'},
    {value: 4, type: 'left'},
    {value: 5, type: 'top'},
    {value: 6, type: 'bottom'}
    ];

  constructor() {
  }

  public getRotationType() {
    this.currentCubePosition = this.positionTypes[Math.floor(Math.random() * this.positionTypes.length)];
    return this.currentCubePosition.type;
  }

  public getResult () {
    this.player.saveResult(this.currentCubePosition.value);
    this.newResultAdded.emit();
  }
}
