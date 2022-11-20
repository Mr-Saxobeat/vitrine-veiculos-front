import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const url = 'http://127.0.0.1:8000/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) { }

  login(credentials: any): Observable<any> {
    return this.http.post(url + 'login/', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  logout(): Observable<any> {
    var refresh_token = this.tokenStorageService.getRefreshToken();
    return this.http.post(url + 'logout/', { refresh: refresh_token });
  }

  register(user: any): Observable<any> {
    return this.http.post(url + 'register/', {
      username: user.username,
      password: user.password,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name
    }, httpOptions);
  }

  refreshToken(token: string) {
    return this.http.post(url + 'refresh/', {
      refresh: token
    }, httpOptions);
  }
}
