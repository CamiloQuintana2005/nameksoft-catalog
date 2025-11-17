import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from './core/cart.service';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cartCount = 0;
  isLogged = false;
  email: string | null = null;

  constructor(private cartService: CartService, private auth: AuthService) {
    this.cartService.cart$.subscribe(items => this.cartCount = items.length);
    this.isLogged = this.auth.isLoggedIn();
    this.email = this.auth.getUserEmail();
  }

  logout() {
    this.auth.logout();
    // recargar para actualizar UI o usar router nav
    location.reload();
  }
}