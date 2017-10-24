import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Card } from './models/card';
import { GameService } from './game.service';
import { Memorygame } from './game';
import { SoundService } from './sound.service';

@Component({
  selector: 'itu-memorygame',
  templateUrl: './memorygame.component.html',
  styleUrls: ['./memorygame.component.scss']
})
export class MemorygameComponent implements OnInit, OnDestroy {
  private gameSubscription: Subscription;

  public memorygame: Memorygame;

  constructor(private gameService: GameService, private soundService: SoundService) {}

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
    this.soundService.playSound();
    this.memorygame.selectCard(payload);
  }

  ngOnDestroy(): void {
    this.gameSubscription.unsubscribe();
  }
}
