import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Veiculo } from '../models/veiculo';
import { PaginacaoVeiculo } from '../models/paginacao-veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  private url = 'http://127.0.0.1:8000/api/veiculos/';

  constructor(
    private http: HttpClient
  ) { }

  getVeiculos(): Observable<PaginacaoVeiculo> {
    return this.http.get<PaginacaoVeiculo>(this.url);
  }

  getVeiculo(id: Number): Observable<Veiculo> {
    return this.http.get<Veiculo>(this.url + id);
  }

  postVeiculo(novoVeiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(this.url, novoVeiculo);
  }
}
