import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: NgToastService
    ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required)
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const user = this.registerForm.value;
    this.authService.register(user)
      .subscribe(response => {
        this.toast.success({detail: "Usuário registrado", summary: "Logue para continuar.", duration: 3000})
        this.router.navigate(['listar'])
      })
  }

}
