import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from 'app/login-page/login-page.component';
import { RegisterPageComponent } from 'app/register-page/register-page.component';
import { ProfilePageComponent } from 'app/profile-page/profile-page.component';
import { AccountFinalizePageComponent } from 'app/account-finalize-page/account-finalize-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'user/:id',
    component: ProfilePageComponent
  },
  {
    path: 'finalize',
    component: AccountFinalizePageComponent
  },
  {
    path: 'user',
    component: ProfilePageComponent
  },
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
