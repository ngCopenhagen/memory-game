import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatButtonModule } from '@angular/material';

import { MemorygameComponent } from './memorygame.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { CardComponent } from './gameboard/card/card.component';

import { GameService } from './game.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule,
    MatButtonModule
  ],
  declarations: [
    MemorygameComponent,
    GameboardComponent,
    CardComponent,
    DashboardComponent
  ],
  exports: [MemorygameComponent],
  providers: [GameService]
})
export class MemorygameModule {}
