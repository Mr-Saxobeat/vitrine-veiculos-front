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
}
