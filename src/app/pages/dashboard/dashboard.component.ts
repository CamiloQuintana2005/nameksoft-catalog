import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductService } from '../../core/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  products: Product[] = [];
  editing = false;
  mode: 'create' | 'edit' = 'create';

  // FORMULARIO COMPLETO CON TU MODELO REAL
  form: Product = {
    id: 0,
    name: '',
    category: '',
    price: 0,
    stock: 0,
    image: '',
    description: ''
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
  }

  startCreate() {
    this.mode = 'create';
    this.editing = true;
    this.form = {
      id: 0,
      name: '',
      category: '',
      price: 0,
      stock: 0,
      image: '',
      description: ''
    };
  }

  startEdit(p: Product) {
    this.mode = 'edit';
    this.editing = true;
    this.form = { ...p };
  }

  save() {
    if (this.mode === 'create') {
      this.productService.create(this.form);
    } else {
      this.productService.update(this.form);
    }

    this.editing = false;
    this.load();
  }

  delete(id: number) {
    this.productService.delete(id);
    this.load();
  }

  cancel() {
    this.editing = false;
  }
}