import { Component, OnInit } from '@angular/core';
import { ServicePrestededSearch } from './servicePrestededSearch';
import { ServicePrestededService } from '../../service-presteded.service';

@Component({
  selector: 'app-service-presteded-list',
  templateUrl: './service-presteded-list.component.html',
  styleUrls: ['./service-presteded-list.component.css'],
})
export class ServicePrestededListComponent implements OnInit {
  name: string;
  mes: number;
  meses: number[];
  list: ServicePrestededSearch[];
  message: string;

  constructor(private servicePrestededService: ServicePrestededService) {
    this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  ngOnInit(): void { }

  search() {
    this.servicePrestededService.search(this.name, this.mes).subscribe(
      (response) => {
        this.list = response;
        if (this.list.length <= 0) {
          this.message = "Nenhum Registro encontrado."
        } else {
          this.message = null;
        }
      },
      (error) => {
        this.list = [];
      }
    );
  }
}
