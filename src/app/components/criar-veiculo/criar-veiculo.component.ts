import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VeiculoService } from '../../veiculo.service';
import { Veiculo } from 'src/app/models/veiculo';

@Component({
  selector: 'app-criar-veiculo',
  templateUrl: './criar-veiculo.component.html',
  styleUrls: ['./criar-veiculo.component.css']
})
export class CriarVeiculoComponent implements OnInit {
  novoVeiculoForm!: FormGroup;
  novoVeiculo?: Veiculo;
  res: any;

  constructor(
    private veiculoService: VeiculoService,
    private formBuilde: FormBuilder
  ) { }

  ngOnInit(): void {
    this.novoVeiculoForm = this.formBuilde.group({
      Marca: ['', [Validators.required, Validators.maxLength(50)]],
      Modelo: ['', [Validators.required, Validators.maxLength(50)]],
      Valor: ['', [Validators.required, Validators.maxLength(6)]]
    })
  }

  salvar(): void {
    this.novoVeiculo = {
      Marca: this.novoVeiculoForm.get('Marca')?.value,
      Modelo: this.novoVeiculoForm.get('Modelo')?.value,
      Valor: this.novoVeiculoForm.get('Valor')?.value,
    }

    this.veiculoService.postVeiculo(this.novoVeiculo)
      .subscribe(response => {
        this.res = response;
        console.log(this.res);
      });
  }
}
