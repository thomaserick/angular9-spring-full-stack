import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServicePrestededRoutingModule } from './service-presteded-routing.module';
import { ServicePrestededFormComponent } from './service-presteded-form/service-presteded-form.component';
import { ServicePrestededListComponent } from './service-presteded-list/service-presteded-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ServicePrestededFormComponent, ServicePrestededListComponent],
  imports: [
    CommonModule,
    ServicePrestededRoutingModule,
    FormsModule,
    RouterModule,
  ],
  exports: [ServicePrestededFormComponent, ServicePrestededListComponent],
})
export class ServicePrestededModule {}
