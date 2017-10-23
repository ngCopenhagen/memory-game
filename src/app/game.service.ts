import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from './models/card';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GameService {
  private endpoint = 'http://www.mocky.io/v2/59e7c4ae0f0000dc00aef962';
  constructor(private http: HttpClient) {}
  getCards(): Observable<Card[]> {
    return this.http.get(this.endpoint);
  }
}
