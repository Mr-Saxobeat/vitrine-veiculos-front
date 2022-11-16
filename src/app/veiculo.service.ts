import { Injectable } from '@angular/core';
import { Veiculo } from './veiculos/veiculo';
import { VEICULOS } from './mock-veiculos';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor() { }

  getVeiculos(): Observable<Veiculo[]> {
    const veiculos = of(VEICULOS);
    return veiculos;
  }

  getVeiculo(Id: Number): Observable<Veiculo> {
    const veiculo = VEICULOS.find(v => v.Id === Id)!;
    return of(veiculo);
  }
}
