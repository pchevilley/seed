import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HttpService {

public token:String = localStorage.getItem('token');
  private headers = new Headers();
  private url = 'http://localhost:1337/API/';
  
  constructor(private http:Http) {
    this.setAuthorizationHeader();    
  }

  setToken(i_sToken){
    this.token = i_sToken;
    localStorage.setItem('token', i_sToken);
    this.setAuthorizationHeader();
  }

  setAuthorizationHeader() {
    if(this.token){
      this.headers.append('Authorization', 'Bearer ' + this.token);      
    }
  }

  get(url) {
    return this.http.get(this.url + url, {
      headers: this.headers
    });
  }

  post(url, data) {
    return this.http.post(this.url + url, data, {
      headers: this.headers
    });
  }
}