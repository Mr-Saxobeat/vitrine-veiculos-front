import { Component, OnInit } from '@angular/core';
import { Veiculo } from './veiculo';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {
  veiculo: Veiculo = {
    Id: 1,
    Marca: "MarcaVeiuclo",
    Modelo: "modelosss",
    Valor: 2
  }

  constructor() { }

  ngOnInit(): void {
  }

}
