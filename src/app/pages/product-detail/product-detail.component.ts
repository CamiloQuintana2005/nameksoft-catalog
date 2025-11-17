import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductService } from '../../core/product.service';
import { Product } from '../../models/product';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getById(id).subscribe((data: Product | null) => {
      this.product = data;
      console.log("Producto cargado:", data);
    });
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
      alert(`"${this.product.name}" agregado al carrito`);
    }
  }
}