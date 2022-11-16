import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { FormsModule } from '@angular/forms';
import { VeiculoDetalheComponent } from './veiculo-detalhe/veiculo-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    VitrineComponent,
    VeiculosComponent,
    VeiculoDetalheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
