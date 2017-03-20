import { Component, OnInit } from '@angular/core';
import {AccountService } from 'app/account.service';


@Component({
  selector: 'splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  host: {
    '[class.closed]': 'loggedIn'
  }
})
export class SplashScreenComponent implements OnInit {
  private loggedIn: Boolean = false;

  constructor(private _accountService: AccountService) { }

  ngOnInit() {
    this._accountService.onLoginChange.subscribe(isLoggedIn => {
      this.loggedIn = isLoggedIn;
    });
  }

}
