import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  access_token: string = environment.access_token;

  constructor() {}

  getAcessToken(): String {
    let token = localStorage.getItem(this.access_token);
    if (token == null) {
      return null;
    } else {
      const tokenJWT = JSON.parse(token);
      return tokenJWT.access_token;
    }
  }

  setAcessToken(obj: Object) {
    if (obj == null) {
      localStorage.removeItem(this.access_token);
    } else {
      localStorage.setItem(this.access_token, JSON.stringify(obj));
    }
  }
}
