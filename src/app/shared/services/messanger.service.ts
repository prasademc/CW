import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessangerService {

  subject = new Subject();

  constructor() { }

  sendMsg(productId: number) {
    this.subject.next(productId);
  }

  getMsg(): Observable<any> {
    return this.subject.asObservable();
  }
}
