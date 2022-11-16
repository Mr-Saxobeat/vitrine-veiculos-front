import { Component, Input, OnInit } from '@angular/core';
import { Veiculo } from '../veiculos/veiculo';

@Component({
  selector: 'app-veiculo-detalhe',
  templateUrl: './veiculo-detalhe.component.html',
  styleUrls: ['./veiculo-detalhe.component.css']
})
export class VeiculoDetalheComponent implements OnInit {
  @Input() veiculo?: Veiculo;

  constructor() { }

  ngOnInit(): void {
  }

}
