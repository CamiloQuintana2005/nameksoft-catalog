import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'assets/data/products.json';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getById(id: number): Observable<Product | null> {
    return this.getAll().pipe(
      map(products => products.find(p => p.id === id) || null)
    );
  }

  create(product: Product) {
    const items = this.getCache();
    
    product.id = items.length ? Math.max(...items.map(x => x.id)) + 1 : 1;
    items.push(product);
  
    localStorage.setItem('products', JSON.stringify(items));
  }
  
  update(product: Product) {
    const items = this.getCache();
    const index = items.findIndex(p => p.id === product.id);
  
    if (index >= 0) {
      items[index] = product;
      localStorage.setItem('products', JSON.stringify(items));
    }
  }
  
  delete(id: number) {
    const items = this.getCache().filter(p => p.id !== id);
    localStorage.setItem('products', JSON.stringify(items));
  }  

  private getCache(): Product[] {
    const data = localStorage.getItem('products');
  
    if (data) {
      return JSON.parse(data);
    }
  
    return [];
  }  

  }