import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/cliente';
import { ClientesService } from '../../clientes.service';
import { ServicePrested } from '../service-presteded';

@Component({
  selector: 'app-service-presteded-form',
  templateUrl: './service-presteded-form.component.html',
  styleUrls: ['./service-presteded-form.component.css'],
})
export class ServicePrestededFormComponent implements OnInit {
  clientes: Cliente[] = [];
  service: ServicePrested;

  constructor(private ClienteService: ClientesService) {
    this.service = new ServicePrested();
  }

  ngOnInit(): void {
    this.ClienteService.findAll().subscribe(
      (response) => {
        this.clientes = response;
      },
      (error) => {}
    );
  }

  onSubmit() {
    console.log(this.service);
  }
}
