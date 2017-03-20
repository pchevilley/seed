import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AccountService {
  public onLoginChange: Subject<Boolean> = new Subject<Boolean>();

  constructor() { }

  login() {
    this.onLoginChange.next(true);
  }

}
