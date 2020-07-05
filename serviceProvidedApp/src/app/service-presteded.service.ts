import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ServicePrested } from './service-presteded/service-presteded';
import { Observer, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ServicePrestededSearch } from './service-presteded/service-presteded-list/servicePrestededSearch';

@Injectable({
  providedIn: 'root',
})
export class ServicePrestededService {
  apiURL: string = environment.apiUrlBase + '/api/services';

  constructor(private http: HttpClient) { }

  insert(servicePresteded: ServicePrested): Observable<ServicePrested> {
    return this.http.post<ServicePrested>(`${this.apiURL}`, servicePresteded);
  }

  search(name: string, mes: number): Observable<ServicePrestededSearch[]> {
    let httpParams = new HttpParams();

    if (!name) name = '';

    httpParams = httpParams.set('name', name);

    if (mes) {
      httpParams = httpParams.set('mes', mes.toString());
    }

    const url = this.apiURL + '?' + httpParams.toString();
    console.log(url);

    return this.http.get<any>(url);
  }
}
