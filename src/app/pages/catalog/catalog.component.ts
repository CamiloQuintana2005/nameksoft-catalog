import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    this.productService.getAll().subscribe(data => {
      this.products = data;
      console.log("Productos cargados:", this.products);
    });
  }
}