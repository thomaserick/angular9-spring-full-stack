import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './clientes.service';
import { ServicePrestededService } from './service-presteded.service';
import { ServicePrestededModule } from './service-presteded/service-presteded.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicePrestededModule,
  ],
  providers: [ClientesService, ServicePrestededService],
  bootstrap: [AppComponent],
})
export class AppModule {}
