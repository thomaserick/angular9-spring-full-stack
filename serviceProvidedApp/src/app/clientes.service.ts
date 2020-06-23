import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  save(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(
      'http://localhost:8085/api/clientes',
      cliente
    );
  }

  update(cliente: Cliente): Observable<any> {
    return this.http.put<Cliente>(
      `http://localhost:8085/api/clientes/${cliente.id}`,
      cliente
    );
  }

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8085/api/clientes');
  }

  findById(id: Number): Observable<Cliente> {
    return this.http.get<any>(`http://localhost:8085/api/clientes/${id}`);
  }

  delete(id: Number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8085/api/clientes/${id}`);
  }
}
