import { Component, OnInit } from '@angular/core';
import { AccountService } from 'app/account.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private _accountService: AccountService) { }

  ngOnInit() {
  }

  onLoginClicked(){
    this._accountService.login();
  }
}
