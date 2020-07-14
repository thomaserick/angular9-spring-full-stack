import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { User } from './login/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURL: string = environment.apiUrlBase + '/api/users';
  tokenURL: string = environment.apiUrlBase + environment.tokenUrlAuth;
  clientID: string = environment.cliendId;
  clientSecret: string = environment.clientSecret;

  constructor(private http: HttpClient) {}

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

    console.log(headers);
    console.log(params);

    return this.http.post(this.tokenURL, params.toString(), { headers });
  }
}
