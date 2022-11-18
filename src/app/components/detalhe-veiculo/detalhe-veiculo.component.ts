import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { Veiculo } from 'src/app/models/veiculo';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalhe-veiculo',
  templateUrl: './detalhe-veiculo.component.html',
  styleUrls: ['./detalhe-veiculo.component.css']
})
export class DetalheVeiculoComponent implements OnInit {
  id: Number;
  veiculo?: Veiculo;

  constructor(
    private route: ActivatedRoute,
    private veiculoService: VeiculoService,
    private location: Location
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getVeiculo();
  }

  getVeiculo(): void {
    this.veiculoService.getVeiculo(this.id)
      .subscribe(veiculo => this.veiculo = veiculo);
  }

  voltar(): void {
    this.location.back();
  }
}
