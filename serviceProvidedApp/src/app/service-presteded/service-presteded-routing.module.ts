import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicePrestededFormComponent } from './service-presteded-form/service-presteded-form.component';
import { ServicePrestededListComponent } from './service-presteded-list/service-presteded-list.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {
    path: 'service-presteded',
    component: LayoutComponent,
    children: [
      { path: 'form', component: ServicePrestededFormComponent },
      { path: 'list', component: ServicePrestededListComponent },
      { path: '', redirectTo: '/service-presteded/list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicePrestededRoutingModule {}
