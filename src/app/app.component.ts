import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vitrine de Veículos';

  constructor(
    private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  usuarioLogado(): boolean {
    return this.authService.usuarioLogado();
  }

  logout() {
    this.authService.logout()
      .subscribe(response => {
        this.tokenStorageService.signOut();
        this.router.navigate(['listar']);
      })
  }
}
