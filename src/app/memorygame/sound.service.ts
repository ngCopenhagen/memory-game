import { Injectable } from '@angular/core';
// We don't reinvent the wheel so we use :)
// Link https://github.com/goldfire/howler.js/
import { Howl } from 'howler';

@Injectable()
export class SoundService {
  playSound() {
    const sound = new Howl({
      src: ['./assets/sound/flip.mp3'],
      volume: 0.05
    });
    sound.play();
  }
}
