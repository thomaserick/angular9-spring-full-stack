import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css'],
})
export class ClientesFormComponent implements OnInit {
  cliente: Cliente;
  success: boolean = false;
  errors: String[];
  msg: String;
  id: Number;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRouter.params;
    params.subscribe((urlParams) => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service.findById(this.id).subscribe(
          (response) => {
            this.cliente = response;
          },
          (error) => {
            this.cliente = new Cliente();
          }
        );
      }
    });
  }

  cancel() {
    this.router.navigate(['/clientes/lista']);
  }

  onSubmit() {
    if (this.id) {
      this.service.update(this.cliente).subscribe(
        (response) => {
          this.success = true;
          this.msg = 'Cliente atualizado com sucesso!';
          this.errors = null;
        },
        (errors) => {
          this.success = false;
          this.errors = errors.error.errors;
        }
      );
    } else {
      this.service.save(this.cliente).subscribe(
        (response) => {
          this.errors = null;
          this.success = true;
          this.cliente = response;
          this.msg = 'Cliente salvo com sucesso!';
        },
        (errors) => {
          this.success = false;
          this.errors = errors.error.errors;
        }
      );
    }
  }
}
