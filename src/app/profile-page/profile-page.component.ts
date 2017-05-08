import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'app/account.service';

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  private userId: number;
  private user;

  constructor(private _route: ActivatedRoute, private _accountService:AccountService, private _router: Router) { }

  ngOnInit() {
    this.userId = this._route.snapshot.params['id'];

    if(!this.userId && this._accountService.currentUser){
      this.userId = this._accountService.currentUser.id;
    }

    if(!this.userId){
      this._router.navigate(['/']);
    }else{
      this.initUser();
    }

  }

  initUser(){
    this._accountService.getUserProfile(this.userId)
      .subscribe((response) => {
        this.onUserProfileReceived(response);
      });
  }

  onUserProfileReceived(response){
    if(response.data){
      this.user = response.data;
    }else{
      this._router.navigate(['/']);
    }

    console.log(this.user);
  }

}
