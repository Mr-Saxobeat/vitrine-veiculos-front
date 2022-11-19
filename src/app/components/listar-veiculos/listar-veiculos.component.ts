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
  proximaPaginaLink!: string;
  anteriorPaginaLink!: string;

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.getVeiculos();
  }

  getVeiculos(): void {
    this.veiculoService.getVeiculos()
      .subscribe(response => {
        this.veiculos = response.results;
        this.proximaPaginaLink = response.next;
        this.anteriorPaginaLink = response.previous;
      });
  }

  paginar(link: string): void {
    this.veiculoService.getVeiculos(link)
      .subscribe(response => {
        this.veiculos = response.results;
        this.proximaPaginaLink = response.next;
        this.anteriorPaginaLink = response.previous;
      })
  }
}
