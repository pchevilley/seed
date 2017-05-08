import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Md5 } from 'ts-md5/dist/md5';
import { HttpService } from './http.service';

@Injectable()
export class AccountService {
  public onLoginChange: Subject<Boolean> = new Subject<Boolean>();
  public currentUser;

  constructor(private http: HttpService) {
    if(localStorage && localStorage.getItem('token')){
      this.login("", "", localStorage.getItem('token'));
    }
  }

  login(email: string, password: string, token?: string): Observable<any> {
    var l_oObservable = this.http.post('users/login', {
      email: email,
      password: Md5.hashStr(password)
    }).map(response => response.json());

    l_oObservable.subscribe((response) => {
      let success;

      if (response.data && response.data.token) {
        success = true;
        this.currentUser = response.data.user;
        this.http.setToken(response.data.token);
      } else {
        this.http.setToken("");
        this.currentUser = null;
        success = false;
      }
      this.onLoginChange.next(success);
    });

    return l_oObservable;
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post('users', {
      email: email,
      password: Md5.hashStr(password)
    }).map(response => response.json());
  }

  activate(email: string, code: number): Observable<any> {
    return this.http.post('users/activate', {
      activation_code: code,
      email: email
    }).map(response => response.json());
  }

  logout(){
    this.http.setToken("");
    this.currentUser = null;
    this.onLoginChange.next(false);
    return this.http.post('users/logout', {});
  }

  getUserProfile(userId:number):Observable<any>{
    return this.http.get('users/' + userId)
      .map(response => response.json());
  }
}
