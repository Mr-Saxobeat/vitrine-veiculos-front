import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { Veiculo } from 'src/app/models/veiculo';
import { Location } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-detalhe-veiculo',
  templateUrl: './detalhe-veiculo.component.html',
  styleUrls: ['./detalhe-veiculo.component.css']
})
export class DetalheVeiculoComponent implements OnInit {
  id: number;
  veiculo?: Veiculo;
  veiculoForm!: FormGroup;
  emEdicao: boolean = false;
  isLoggedIn = false;

  constructor(
    private route: ActivatedRoute,
    private veiculoService: VeiculoService,
    private router: Router,
    private tokenStorageService: TokenStorageService,
    private toast: NgToastService
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getVeiculo();
    this.isLoggedIn = !!this.tokenStorageService.getAccessToken();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.veiculoForm.controls;
  }

  getVeiculo(): void {
    this.veiculoService.getVeiculo(this.id)
      .subscribe(veiculo => {
        this.veiculo = veiculo;

        this.veiculoForm = new FormGroup({
          Marca: new FormControl({value: this.veiculo?.Marca, disabled: true}, [Validators.required, Validators.maxLength(50)]),
          Modelo: new FormControl({value: this.veiculo?.Modelo, disabled: true}, [Validators.required, Validators.maxLength(50)]),
          Valor: new FormControl({value: this.veiculo?.Valor, disabled: true}, [Validators.required, Validators.maxLength(6)]),
        })
      });
  }

  editar(): void {
    this.veiculoForm.get('Marca')?.enable();
    this.veiculoForm.get('Modelo')?.enable();
    this.veiculoForm.get('Valor')?.enable();
    this.emEdicao = true;
  }

  salvar(): void {
    this.veiculo = {
      id: this.veiculo?.id,
      Marca: this.veiculoForm.get('Marca')?.value,
      Modelo: this.veiculoForm.get('Modelo')?.value,
      Valor: this.veiculoForm.get('Valor')?.value,
    }

    this.veiculoService.putVeiculo(this.veiculo).subscribe(
      () => {
        this.veiculoForm.get('Marca')?.disable();
        this.veiculoForm.get('Modelo')?.disable();
        this.veiculoForm.get('Valor')?.disable();
        this.emEdicao = false;
        this.toast.success({detail: "Editado:", summary: "Veículo editado com sucesso", duration: 3000});
        this.router.navigate([this.veiculo?.id?.toString()])
      }
    )
  }

  excluir(): void {
    this.veiculoService.deleteVeiculo(this.id).subscribe(
      () => {
        this.toast.warning({detail: "Excluído:", summary: "Veículo excluído", duration: 3000});
        this.router.navigate(['listar']);
      }
    )
  }
}
