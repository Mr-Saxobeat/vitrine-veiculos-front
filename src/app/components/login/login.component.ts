import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private token: TokenStorageService
    ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }


  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const credentials = this.loginForm.value;

    if (this.loginForm.valid) {
      this.authService.login(credentials)
        .subscribe((response) => {
          this.token.saveDataToken(response);
          this.router.navigate(['listar']);
        })
    }
  }
}
