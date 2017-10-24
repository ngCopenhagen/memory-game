import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'itu-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() attempts: number;
  @Input() message: string;
  @Input() timer: string;

  @Output() newGame: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  startNewGame(): void {
    this.newGame.emit(true);
  }
}
