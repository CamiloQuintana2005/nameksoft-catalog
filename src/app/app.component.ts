import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartService } from './core/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cartCount = 0;
  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(items => this.cartCount = items.length);
  }
}