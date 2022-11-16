import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VeiculoService } from '../veiculo.service';
import { Veiculo } from '../veiculos/veiculo';
import { Location } from '@angular/common';

@Component({
  selector: 'app-veiculo-detalhe',
  templateUrl: './veiculo-detalhe.component.html',
  styleUrls: ['./veiculo-detalhe.component.css']
})
export class VeiculoDetalheComponent implements OnInit {
  @Input() veiculo?: Veiculo;

  constructor(
    private route: ActivatedRoute,
    private veiculoService: VeiculoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getVeiculo();
  }

  getVeiculo(): void {
    const id = Number(this.route.snapshot.paramMap.get('Id'));
    this.veiculoService.getVeiculo(id)
      .subscribe(veiculo => this.veiculo = veiculo);
  }

}
