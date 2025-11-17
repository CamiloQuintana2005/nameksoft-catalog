import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CartService } from '../../core/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items: Product[] = [];
  total = 0;

  constructor(private cartService: CartService) {
    // inicializar
    this.refresh();
    // suscribirse para actualizaciones en tiempo real
    this.cartService.cart$.subscribe(() => this.refresh());
  }

  private refresh() {
    this.items = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  remove(id: number) {
    this.cartService.removeFromCart(id);
    // refresh se ejecutará por la suscripción, pero forzamos por si acaso
    this.refresh();
  }

  clear() {
    this.cartService.clearCart();
    this.refresh();
  }
}