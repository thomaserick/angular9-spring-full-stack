import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  apiURL: String = environment.apiUrlBase + '/api/clientes';

  constructor(private http: HttpClient) {}

  save(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiURL}`, cliente);
  }

  update(cliente: Cliente): Observable<any> {
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
  }

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiURL}`);
  }

  findById(id: Number): Observable<Cliente> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  delete(id: Number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }
}
