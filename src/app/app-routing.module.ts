import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarVeiculoComponent } from './components/criar-veiculo/criar-veiculo.component';
import { DetalheVeiculoComponent } from './components/detalhe-veiculo/detalhe-veiculo.component';
import { ListarVeiculosComponent } from './components/listar-veiculos/listar-veiculos.component';

const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'listar', component: ListarVeiculosComponent },
  { path: 'criar', component: CriarVeiculoComponent },
  { path: ':id', component: DetalheVeiculoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
