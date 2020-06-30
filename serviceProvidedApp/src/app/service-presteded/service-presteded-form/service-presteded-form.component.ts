import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/cliente';
import { ClientesService } from '../../clientes.service';
import { ServicePrested } from '../service-presteded';
import { ServicePrestededService } from '../../service-presteded.service';

@Component({
  selector: 'app-service-presteded-form',
  templateUrl: './service-presteded-form.component.html',
  styleUrls: ['./service-presteded-form.component.css'],
})
export class ServicePrestededFormComponent implements OnInit {
  clientes: Cliente[] = [];
  service: ServicePrested;
  success: boolean = false;
  errors: String[];
  msg: String;

  constructor(
    private ClienteService: ClientesService,
    private servicePrestededService: ServicePrestededService
  ) {
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
    this.servicePrestededService.insert(this.service).subscribe(
      (response) => {
        this.success = true;
        this.msg = 'Serviço Prestado cadastrado com sucesso!';
        this.errors = null;
        this.service = new ServicePrested();
      },
      (errors) => {
        this.success = false;
        this.errors = errors.error.errors;
      }
    );
  }
}
