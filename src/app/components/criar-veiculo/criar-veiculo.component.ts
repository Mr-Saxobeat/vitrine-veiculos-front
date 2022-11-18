import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { Veiculo } from 'src/app/models/veiculo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-veiculo',
  templateUrl: './criar-veiculo.component.html',
  styleUrls: ['./criar-veiculo.component.css']
})
export class CriarVeiculoComponent implements OnInit {
  novoVeiculoForm!: FormGroup;
  novoVeiculo?: Veiculo;
  response: any;

  constructor(
    private veiculoService: VeiculoService,
    private formBuilde: FormBuilder,
    private router: Router,
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
        this.response = response;
        var id = this.response.id.toString() || null;
        this.router.navigate([id]);
      });
  }
}
