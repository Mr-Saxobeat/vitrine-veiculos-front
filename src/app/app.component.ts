import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { EventBusService } from './services/event-bus.service';
import { TokenStorageService } from './services/token-storage.service';
import { NgToastModule, NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vitrine de Veículos';
  isLoggedIn = false;
  username?: string;
  eventLogin?: Subscription;
  eventBusSub?: Subscription;

  constructor(
    private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private eventBusService: EventBusService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getAccessToken();

    if (this.isLoggedIn) {
      this.username = this.tokenStorageService.getUser();
    }

    this.eventLogin = this.eventBusService.on('login', () => {
      this.isLoggedIn = true;
      this.username = this.tokenStorageService.getUser();
      this.toast.success({detail: "Login", summary: 'Você logou!', position: 'tr', duration: 3000});
    })

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  ngOnDestroy(): void {
    if (this.eventBusSub)
      this.eventBusSub.unsubscribe();
  }

  logout() {
    this.authService.logout()
      .subscribe(response => {
        this.tokenStorageService.signOut();
        this.router.navigate(['listar']);
        this.isLoggedIn = false;
        this.toast.info({detail: "Logout", summary: 'Você deslogou!', position: 'tr', duration: 3000});
      })
  }
}
