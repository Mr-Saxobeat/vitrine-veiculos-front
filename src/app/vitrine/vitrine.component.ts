import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { Veiculo } from '../veiculos/veiculo';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent implements OnInit {
  veiculos?: Veiculo[];

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.getVeiculos();
  }

  getVeiculos(): void {
    this.veiculoService.getVeiculos()
      .subscribe(veiculos => this.veiculos = veiculos);
  }
}
