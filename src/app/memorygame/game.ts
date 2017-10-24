import { Card } from './models/card';
import { Observable } from "rxjs/Observable";
import {TimerObservable} from 'rxjs/observable/TimerObservable';
import 'rxjs/add/operator/map';

export interface Memorygame {
  unmatchedPairs: number;
  deck: Array<Card>;
  message: string;
  attempts: number;
  timer: Observable<string>;
  firstPick: Card;
  secondPick: Card;
  complete: boolean;
}

const MESSAGE_START = 'Click on the first tile to start your game.';
const MESSAGE_ONE_MORE = 'Pick one more card.';
const MESSAGE_MISS = 'Try again.';
const MESSAGE_MATCH = 'Good job! Keep going.';
const MESSAGE_WON = 'You win!';

export class Memorygame implements Memorygame {
  public unmatchedPairs: number;
  public deck: Array<Card>;
  public message: string;
  public attempts: number;
  public timer: Observable<string>;
  public firstPick: Card;
  public secondPick: Card;
  public complete: boolean;

  constructor(cards: Array<Card>) {
    this.message = MESSAGE_START;
    this.init(cards);
  }

  init(cards: Array<Card>): void {
    this.attempts = 0;
    this.deck = this.randomizeDeck(
      cards.reduce((x, card) => {
        x.push({ ...card }, { ...card });
        return x;
      }, [])
    );
    this.timer = this.createTimer$();
  }

  createTimer$(): Observable<string> {
    return TimerObservable.create(1, 1000).map(time => {
      let m = Math.floor(time / 60);
      let s = Math.floor( time - (m * 60) );
      return `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
    });
  }

  selectCard(card: Card): void {
    card.flipped = true;
    if (!this.firstPick || this.secondPick) {
      if (this.secondPick) {
        this.firstPick.flipped = false;
        this.secondPick.flipped = false;
        this.firstPick = null;
        this.secondPick = null;
      }
      this.firstPick = card;
      this.message = MESSAGE_ONE_MORE;
    } else if (this.firstPick && this.firstPick.name === card.name) {
      this.attempts++;
      this.unmatchedPairs--;

      if (this.unmatchedPairs > 0) {
        this.message = MESSAGE_MATCH;
      } else {
        this.complete = true;
        this.message = MESSAGE_WON;
      }
      this.firstPick = this.secondPick = undefined;
    } else {
      this.attempts++;
      this.secondPick = card;
      this.message = MESSAGE_MISS;
    }
  }

  randomizeDeck(array: Array<Card>): Array<Card> {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
