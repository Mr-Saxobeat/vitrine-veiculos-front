import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';


const ACCESS_TOKEN_KEY = 'auth-token';
const REFRESH_TOKEN_KEY = 'auth-refresh';
const USER_KEY = 'auth-user';
const EXPIRATION_KEY = 'exp';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: any): void {
    var access_token = token.access;
    var refresh_token = token.refresh;

    window.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    window.sessionStorage.setItem(ACCESS_TOKEN_KEY, access_token);

    window.sessionStorage.removeItem(REFRESH_TOKEN_KEY);
    window.sessionStorage.setItem(REFRESH_TOKEN_KEY, refresh_token);

    var decodedToken = jwt_decode<any>(token.access);
    var expirationTime = decodedToken['exp'];
    window.sessionStorage.removeItem(EXPIRATION_KEY);
    window.sessionStorage.setItem(EXPIRATION_KEY, expirationTime);

    this.saveUser(token.access);
  }

  public getAcessExpirationTime(): any {
    var date = window.sessionStorage.getItem(EXPIRATION_KEY) ?? null;
    return date ? new Date(parseInt(date) * 1000) : null;
  }

  public getToken(): string {
    return sessionStorage.getItem(ACCESS_TOKEN_KEY) || '';
  }

  public getRefreshToken(): string {
    return sessionStorage.getItem(REFRESH_TOKEN_KEY) || '';
  }

  public saveUser(token: any): void {
    var decoded_token = jwt_decode<any>(token);
    var username = decoded_token['username'];
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(username));
  }

  public getUser(): any {
    return JSON.parse(sessionStorage.getItem(USER_KEY) || '');
  }
}
