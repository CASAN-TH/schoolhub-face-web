import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwt: JwtHelper = new JwtHelper();
  constructor() { }
  authenticated() {
    return tokenNotExpired('token-admin@schoolhub');
  }

  Uesr() {
    if (this.authenticated()) {
      return this.jwt.decodeToken(window.localStorage.getItem('token-admin@schoolhub'))
    } else {
      return null;
    }
  }
}
