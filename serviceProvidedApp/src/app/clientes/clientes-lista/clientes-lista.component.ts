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

  constructor(private service: ClientesService, private router: Router) {}

  ngOnInit(): void {
    this.service.findAll().subscribe(
      (response) => {
        this.clientes = response;
        console.log(response);
      },
      (errorResp) => {}
    );
  }

  insert() {
    this.router.navigate(['/clientes-form']);
  }
}
