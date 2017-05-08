import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from 'app/account.service';

@Component({
  selector: 'register-activation-form',
  templateUrl: './register-activation-form.component.html',
  styleUrls: ['./register-activation-form.component.scss']
})
export class RegisterActivationFormComponent implements OnInit {
  private code;
  private loading: boolean;
  private triggerAnimation: boolean;
  @Input() private email: string;

  constructor(private _accountService: AccountService) { }

  ngOnInit() {
  }

  activate(){
    this.loading = true;

    this._accountService.activate(this.email, this.code)
      .subscribe((response) => {
        this.loading = false;        

        if(response.error){

        }else{

        }
      });
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
