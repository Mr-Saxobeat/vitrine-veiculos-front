import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculoDetalheComponent } from './veiculo-detalhe/veiculo-detalhe.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { VitrineComponent } from './vitrine/vitrine.component';

const routes: Routes = [
  { path: '', redirectTo: '/vitrine', pathMatch: 'full' },
  { path: 'vitrine', component: VitrineComponent },
  { path: 'veiculos', component: VeiculosComponent },
  { path: 'detalhe/:Id', component: VeiculoDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
