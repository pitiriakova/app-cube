import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PagesModule} from 'src/app/pages/pages.module';
import { CoreModule } from 'src/app/@core/core.module';
import {PlayersStorageService} from 'src/app/@core/services/players-storage.service';

export function app_init(playersStorageService: PlayersStorageService) {
  return () => playersStorageService.getSavedPlayers();
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [CoreModule, {
    provide: APP_INITIALIZER, useFactory: app_init, deps: [PlayersStorageService], multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
