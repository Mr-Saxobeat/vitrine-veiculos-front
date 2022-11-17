import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VeiculoDetalheComponent } from './veiculo-detalhe/veiculo-detalhe.component';
import { AppRoutingModule } from './app-routing.module';
import { CriarVeiculoComponent } from './criar-veiculo/criar-veiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    VeiculosComponent,
    VeiculoDetalheComponent,
    CriarVeiculoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
