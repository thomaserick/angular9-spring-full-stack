import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  getCliente(): Cliente {
    let cliente: Cliente = new Cliente();
    cliente.name = 'Thomas';
    cliente.cpf = '374.016.988-54';

    return cliente;
  }
}
