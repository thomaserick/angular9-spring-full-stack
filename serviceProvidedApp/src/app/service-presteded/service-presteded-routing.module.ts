import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicePrestededModule } from './service-presteded.module';
import { ServicePrestededFormComponent } from './service-presteded-form/service-presteded-form.component';
import { ServicePrestededListComponent } from './service-presteded-list/service-presteded-list.component';

const routes: Routes = [
  { path: 'service-presteded-form', component: ServicePrestededFormComponent },
  { path: 'service-presteded-list', component: ServicePrestededListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicePrestededRoutingModule {}
