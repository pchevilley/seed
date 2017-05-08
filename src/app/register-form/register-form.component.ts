import { Component, OnInit } from '@angular/core';
import { AccountService } from 'app/account.service';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  private email:string;
  private password: string;
  private password2: string;
  private triggerAnimation: boolean;
  private validate: boolean;
  private loading: boolean;

  constructor(private _accountService: AccountService) { }

  ngOnInit() {
  }

  register(){
    if(this.password !== this.password2){
      this.invalidForm(null);
    }else{
      this.loading = true;
      this._accountService
        .register(this.email, this.password)
        .subscribe((data) => {
          this.loading = false;
          if(data.error){
            this.invalidForm(data.error);
          }else{
            this.validate = true;                    
          }
        }, (error) => {
          this.loading = false;          
          this.invalidForm(error);
        });
    }
  }

  invalidForm(error){
    if(error){
      console.error(error);
    }
    this.triggerAnimation = true;
    setTimeout(() =>{
      this.triggerAnimation = false;
    }, 400);
  }

}
