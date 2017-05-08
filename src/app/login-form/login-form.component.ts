import { Component, OnInit } from '@angular/core';
import { AccountService } from 'app/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  private email:string;
  private password: string;
  private triggerAnimation: boolean;
  private loggingIn: boolean;

  constructor(private _router:Router, private _accountService: AccountService) { }

  ngOnInit() {
    this._accountService.onLoginChange.subscribe(this.onLoginStateChange.bind(this));
  }

  onLoginClicked(){
    this.loggingIn = true;
    this._accountService.login(this.email, this.password);
  }

  onLoginStateChange(loggedIn){
    this.loggingIn = false;
    if(!loggedIn){
      this.triggerAnimation = true;
      setTimeout(() =>{
        this.triggerAnimation = false;
      }, 400);
    }else{
      if(this._accountService.currentUser.last_name){
        this._router.navigate(['user']);        
      }else{
        this._router.navigate(['finalize']);        
      }
    }
  }
}
