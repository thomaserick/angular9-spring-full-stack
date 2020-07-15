import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { User } from './login/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from './services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURL: string = environment.apiUrlBase + '/api/users';
  tokenURL: string = environment.apiUrlBase + environment.tokenUrlAuth;
  clientID: string = environment.cliendId;
  clientSecret: string = environment.clientSecret;
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  isAuthenticated(): boolean {
    const token = this.storageService.getAcessToken();
    if (token) {
      const exprired = this.jwtHelper.isTokenExpired(token);
      return !exprired;
    }
    return false;
  }

  getUserAuthenticated() {
    const token = this.storageService.getAcessToken();
    let user: string = null;
    if (token) {
      user = this.jwtHelper.decodeToken(token).user_name;
    }
    return user;
  }

  logout() {
    this.storageService.setAcessToken(null);
  }

  insert(user: User): Observable<any> {
    return this.http.post<any>(this.apiURL, user);
  }

  Logar(username: string, password: string): Observable<any> {
    //Paramentros da Requisição
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    const headers = {
      Authorization: 'Basic ' + btoa(`${this.clientID}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    return this.http.post(this.tokenURL, params.toString(), { headers });
  }
}
