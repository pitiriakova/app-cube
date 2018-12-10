import { Component, OnDestroy, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { PlayersStorageService } from 'src/app/@core/services/players-storage.service';
import { PlayerModel } from 'src/app/components/player/model/player.model';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnDestroy  {
  public playersForm: FormGroup;
  @Output() playersCreated = new EventEmitter<any>();

  constructor(private router: Router,
              private fb: FormBuilder,
              private playersStorageService: PlayersStorageService) {
    this.createPlayersForm();
  }

  ngOnDestroy(): void {
    clearTimeout();
  }

  private createPlayersForm () {
    this.playersForm = this.fb.group({
      firstPlayer: ['', Validators.required],
      secondPlayer: ['', Validators.required],
      thirdPlayer: ['', Validators.required],
    });
  }

  startPlaying() {
    const allPlayers = [];

    for (const controlsKey in this.playersForm.controls) {
      if (controlsKey in this.playersForm.controls) {
        allPlayers.push(new PlayerModel(this.playersForm.controls[controlsKey].value));
      }
    }

    this.playersStorageService.setPlayers(allPlayers);
    this.playersCreated.emit();
  }
}
