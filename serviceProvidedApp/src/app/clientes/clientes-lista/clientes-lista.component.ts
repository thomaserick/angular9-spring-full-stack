import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../clientes.service';
import { Cliente } from '../cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css'],
})
export class ClientesListaComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteDelete: Cliente;
  msgSuccess: String;
  msgError: String;

  constructor(private service: ClientesService, private router: Router) {}

  ngOnInit(): void {
    this.service.findAll().subscribe(
      (response) => {
        this.clientes = response;
      },
      (errorResp) => {}
    );
  }

  insert() {
    this.router.navigate(['/clientes/form']);
  }

  deletePreview(cliente: Cliente) {
    this.clienteDelete = cliente;
  }

  delete(id: Number) {
    this.service.delete(id).subscribe(
      (response) => {
        this.msgSuccess = 'Cliente deletado com sucesso!';
        this.ngOnInit();
      },
      (error) => {
        this.msgError = 'Ocorreu um erro ao deletar o cliente.';
      }
    );
  }
}
