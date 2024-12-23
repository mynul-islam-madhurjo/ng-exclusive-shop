import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts(
    limit: number = 8,
    startAfter: number = 0,
  ): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.apiUrl)
      .pipe(map((products) => products.slice(startAfter, startAfter + limit)));
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/categories`);
  }

  getProductsByCategory(
    category: string,
    limit: number = 8,
    startAfter: number = 0,
  ): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${this.apiUrl}/category/${category}`)
      .pipe(map((products) => products.slice(startAfter, startAfter + limit)));
  }
}
