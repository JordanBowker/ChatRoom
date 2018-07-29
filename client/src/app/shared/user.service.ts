import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private  _username$ = new BehaviorSubject<string>(null);
  username$ = this._username$.asObservable();

  constructor() { }

  setUsername(name : string){
    this._username$.next(name);
  }
}
