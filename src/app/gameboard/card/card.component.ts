import { Component, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'itu-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  private _card: Card;

  get card(): Card {
    return this._card;
  }

  @Input()
  set card(card: Card) {
    this._card = card;
  }
}
