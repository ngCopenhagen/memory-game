import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'itu-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent {

  @Input() deck: Array<Card>;
  @Output() selectedCard: EventEmitter<Card> = new EventEmitter<Card>();

  selectCard(card): void {
    this.selectedCard.emit(card);
  }
}
