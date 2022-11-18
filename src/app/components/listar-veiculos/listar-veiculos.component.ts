import { Component, OnInit } from '@angular/core';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { Veiculo } from 'src/app/models/veiculo';

@Component({
  selector: 'app-listar-veiculos',
  templateUrl: './listar-veiculos.component.html',
  styleUrls: ['./listar-veiculos.component.css']
})
export class ListarVeiculosComponent implements OnInit {

  veiculos?: Veiculo[];

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.getVeiculos();
  }

  getVeiculos(): void {
    this.veiculoService.getVeiculos()
      .subscribe(veiculos => this.veiculos = veiculos.results);
  }
}
