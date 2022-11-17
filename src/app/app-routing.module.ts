import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarVeiculoComponent } from './criar-veiculo/criar-veiculo.component';
import { VeiculoDetalheComponent } from './veiculo-detalhe/veiculo-detalhe.component';
import { VeiculosComponent } from './veiculos/veiculos.component';

const routes: Routes = [
  { path: '', redirectTo: '/veiculos', pathMatch: 'full' },
  { path: 'veiculos', component: VeiculosComponent },
  { path: 'detalhe/:Id', component: VeiculoDetalheComponent},
  { path: 'criar', component: CriarVeiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
