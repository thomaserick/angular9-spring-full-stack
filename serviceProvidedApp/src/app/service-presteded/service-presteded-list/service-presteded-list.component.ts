import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-presteded-list',
  templateUrl: './service-presteded-list.component.html',
  styleUrls: ['./service-presteded-list.component.css'],
})
export class ServicePrestededListComponent implements OnInit {
  name: String;
  mes: Number;
  meses: Number[];

  constructor() {
    this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  ngOnInit(): void {}

  search() {
    console.log(this.name, this.mes);
  }
}
