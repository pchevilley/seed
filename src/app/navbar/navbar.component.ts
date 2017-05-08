import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from 'app/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() private sidenav;
  private currentUser;
  constructor( private _accountService:AccountService, private _router:Router ) { }

  ngOnInit() {
    this.currentUser = this._accountService.currentUser;

    this._accountService.onLoginChange.subscribe(() => {
      this.onLoginChange(); 
    });
  }

  onLoginChange(){
    this.currentUser = this._accountService.currentUser;
  }

  logout(){
    this.sidenav.close();
    this._accountService.logout();
    this._router.navigate(['/login']);
  }

}
