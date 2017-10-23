import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';
import { Memorygame } from '../game';

@Component({
  selector: 'itu-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit {

  public deck: Array<Card> = [
    {"name": "Angry", "image": "../../../../assets/viking_angry.svg", "flipped": false},
    {"name": "Crying", "image": "../../../../assets/viking_crying.svg", "flipped": false},
    {"name": "Happy", "image": "../../../../assets/viking_happy.svg", "flipped": false},
    {"name": "Love", "image": "../../../../assets/viking_love.svg", "flipped": false},
    {"name": "Sceptical", "image": "../../../../assets/viking_sceptical.svg", "flipped": false},
    {"name": "Smiling", "image": "../../../../assets/viking_smiling.svg", "flipped": false},
    {"name": "Surprised", "image": "../../../../assets/viking_surprised.svg", "flipped": false},
    {"name": "Tongue", "image": "../../../../assets/viking_tongue.svg", "flipped": false}
  ];

  public memorygame: Memorygame;

  constructor() { }

  ngOnInit() {
    this.startGame();
  }

  startGame(): void {
    this.memorygame = new Memorygame(this.deck);
  }

  selectCard(payload: Card) {
    this.memorygame.selectCard(payload);
  }
}
