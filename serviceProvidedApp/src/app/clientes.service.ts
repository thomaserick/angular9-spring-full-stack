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

  getCliente(): Cliente {
    let cliente: Cliente = new Cliente();
    cliente.name = 'Thomas';
    cliente.cpf = '374.016.988-54';

    return cliente;
  }
}
