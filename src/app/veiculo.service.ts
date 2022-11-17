import { Injectable } from '@angular/core';
import { Veiculo } from './veiculos/veiculo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaginacaoVeiculo } from './veiculos/paginacaoVeiculo';

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

  getVeiculo(Id: Number): Observable<Veiculo> {
    return this.http.get<Veiculo>(this.url + Id);
  }

  postVeiculo(novoVeiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(this.url, novoVeiculo);
  }
}
