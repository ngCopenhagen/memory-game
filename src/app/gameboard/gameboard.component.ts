import { Component, OnInit, OnDestroy } from '@angular/core';
import { Card } from '../models/card';
import { Memorygame } from '../game';
import { Subscription } from 'rxjs/Subscription';
import { GameService } from '../game.service';

@Component({
  selector: 'itu-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit, OnDestroy {

  private gameSubscription: Subscription;

  public memorygame: Memorygame;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.startGame();
  }

  startGame(): void {
    this.gameSubscription = this.gameService
      .getCards()
      .subscribe((cards: Array<Card>) => {
        this.memorygame = new Memorygame(cards);
      });
  }

  selectCard(payload: Card) {
    this.memorygame.selectCard(payload);
  }

  ngOnDestroy(): void {
    this.gameSubscription.unsubscribe();
  }
}
