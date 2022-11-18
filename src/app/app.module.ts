import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CriarVeiculoComponent } from './components/criar-veiculo/criar-veiculo.component';
import { ListarVeiculosComponent } from './components/listar-veiculos/listar-veiculos.component';
import { DetalheVeiculoComponent } from './components/detalhe-veiculo/detalhe-veiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarVeiculoComponent,
    ListarVeiculosComponent,
    DetalheVeiculoComponent
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
