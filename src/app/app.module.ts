import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { CardComponent } from './gameboard/card/card.component';
import { GameService } from './game.service';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    GameboardComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
