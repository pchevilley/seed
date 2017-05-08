import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { HttpService } from './http.service';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { AccountService } from './account.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterActivationFormComponent } from './register-activation-form/register-activation-form.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountFinalizePageComponent } from './account-finalize-page/account-finalize-page.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    LoginFormComponent,
    LoginPageComponent,
    RegisterPageComponent,
    RegisterFormComponent,
    RegisterActivationFormComponent,
    ProfilePageComponent,
    NavbarComponent,
    AccountFinalizePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA1cA9WHe4s5VmyeyEI25fZ9bOwzB4G1gg',
      libraries: ["places"]
    })
  ],
  providers: [AccountService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
