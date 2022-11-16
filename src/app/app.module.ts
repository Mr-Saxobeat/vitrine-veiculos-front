import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { VeiculosComponent } from './veiculos/veiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    VitrineComponent,
    VeiculosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
