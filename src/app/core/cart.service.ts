import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private storageKey = 'cart_items_v1';

  // BehaviorSubject para notificar cambios del carrito a la UI
  private cartSubject = new BehaviorSubject<Product[]>(this.readFromStorage());
  cart$: Observable<Product[]> = this.cartSubject.asObservable();

  private readFromStorage(): Product[] {
    try {
      const raw = localStorage.getItem(this.storageKey);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private writeToStorage(items: Product[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
    this.cartSubject.next(items);
  }

  getCart(): Product[] {
    return this.readFromStorage();
  }

  addToCart(product: Product) {
    const cart = this.readFromStorage();
    cart.push(product);
    this.writeToStorage(cart);
  }

  removeFromCart(id: number) {
    let cart = this.readFromStorage();
    // elimina la primera ocurrencia con ese id
    const idx = cart.findIndex(p => p.id === id);
    if (idx !== -1) {
      cart.splice(idx, 1);
      this.writeToStorage(cart);
    }
  }

  clearCart() {
    this.writeToStorage([]);
  }

  getTotal(): number {
    const cart = this.readFromStorage();
    return cart.reduce((sum, p) => sum + (p.price || 0), 0);
  }

  getTotalItems(): number {
    return this.readFromStorage().length;
  }
}