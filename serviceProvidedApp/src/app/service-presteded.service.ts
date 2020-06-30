import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicePrested } from './service-presteded/service-presteded';
import { Observer, Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServicePrestededService {
  apiUrl: String = environment.apiUrlBase + '/api/services';
  constructor(private http: HttpClient) {}

  insert(servicePresteded: ServicePrested): Observable<ServicePrested> {
    return this.http.post<ServicePrested>(`${this.apiUrl}`, servicePresteded);
  }
}
