import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FightDataService {
  messageSource = new BehaviorSubject<any>('');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(mess: any) {
    this.messageSource.next(mess)
  }
}
