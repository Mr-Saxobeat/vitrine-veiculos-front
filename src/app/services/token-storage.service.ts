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

  public saveDataToken(token: any): void {
    this.saveAccessToken(token.access);
    this.saveRefreshToken(token.refresh);

    var decodedToken = jwt_decode<any>(token.access);
    this.saveAccessExpirationTime(decodedToken['exp']);
    this.saveUser(decodedToken['username'], token.access);
  }

  public getAccessToken(): string {
    return sessionStorage.getItem(ACCESS_TOKEN_KEY) || '';
  }

  public saveAccessToken(token: string): void {
    window.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    window.sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
  }

  public getRefreshToken(): string {
    return sessionStorage.getItem(REFRESH_TOKEN_KEY) || '';
  }

  public saveRefreshToken(token: string): void {
    window.sessionStorage.removeItem(REFRESH_TOKEN_KEY);
    window.sessionStorage.setItem(REFRESH_TOKEN_KEY, token);
  }

  public saveAccessExpirationTime(expirationTime: string): void {
    window.sessionStorage.removeItem(EXPIRATION_KEY);
    window.sessionStorage.setItem(EXPIRATION_KEY, expirationTime);
  }

  public getAcessExpirationTime(): any {
    var date = window.sessionStorage.getItem(EXPIRATION_KEY) ?? null;
    return date ? new Date(parseInt(date) * 1000) : null;
  }

  public saveUser(username: string, token: string): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify({username, token}));
  }

  public getUser(): any {
    return JSON.parse(sessionStorage.getItem(USER_KEY) || '');
  }
}
