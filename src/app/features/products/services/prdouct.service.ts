// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, delay } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';
  private mockProducts: Product[] = [
    {
      id: 1,
      title: 'Red Gaming Controller',
      price: 49.99,
      description:
        'High-quality gaming controller with ergonomic design and responsive buttons',
      category: 'gaming',
      image: 'assets/image/items/item-1.png',
      rating: { rate: 4.5, count: 120 },
    },
    {
      id: 2,
      title: 'RGB Gaming Keyboard',
      price: 129.99,
      description:
        'Mechanical gaming keyboard with RGB backlight and customizable keys',
      category: 'accessories',
      image: 'assets/image/items/item-2.png',
      rating: { rate: 4.8, count: 230 },
    },
    {
      id: 3,
      title: 'Gaming Monitor',
      price: 299.99,
      description:
        '27-inch curved gaming monitor with high refresh rate and LED display',
      category: 'electronics',
      image: 'assets/image/items/item-3.png',
      rating: { rate: 4.7, count: 150 },
    },
    {
      id: 4,
      title: 'Modern Chair',
      price: 159.99,
      description:
        'Comfortable modern chair with wooden legs and grey upholstery',
      category: 'furniture',
      image: 'assets/image/items/item-4.png',
      rating: { rate: 4.3, count: 85 },
    },
    {
      id: 5,
      title: 'Winter Jacket',
      price: 89.99,
      description:
        'Warm winter jacket with hood and pockets, perfect for cold weather',
      category: 'clothing',
      image: 'assets/image/items/item-5.png',
      rating: { rate: 4.4, count: 95 },
    },
    {
      id: 6,
      title: 'Water Cooling System',
      price: 149.99,
      description: 'RGB liquid cooling system for PC with dual fans',
      category: 'accessories',
      image: 'assets/image/items/item-6.png',
      rating: { rate: 4.6, count: 195 },
    },
    {
      id: 7,
      title: 'Designer Travel Bag',
      price: 1299.99,
      description:
        'Luxury designer travel bag with signature pattern and leather trim',
      category: 'fashion',
      image: 'assets/image/items/item-7.png',
      rating: { rate: 4.9, count: 75 },
    },
    {
      id: 8,
      title: 'Wooden Side Table',
      price: 199.99,
      description:
        'Modern wooden side table with book storage, perfect for living room',
      category: 'furniture',
      image: 'assets/image/items/item-8.png',
      rating: { rate: 4.2, count: 65 },
    },
    {
      id: 9,
      title: 'Premium Dog Food',
      price: 29.99,
      description:
        'High-quality dog food with balanced nutrition for small breeds',
      category: 'pets',
      image: 'assets/image/items/item-9.png',
      rating: { rate: 4.8, count: 320 },
    },
    {
      id: 10,
      title: 'Professional DSLR Camera',
      price: 899.99,
      description:
        'High-end DSLR camera with 24.1MP sensor and 4K video capability',
      category: 'electronics',
      image: 'assets/image/items/item-10.png',
      rating: { rate: 4.9, count: 250 },
    },
    {
      id: 11,
      title: 'Gaming Laptop',
      price: 1499.99,
      description:
        'Powerful gaming laptop with RGB keyboard and high-performance GPU',
      category: 'electronics',
      image: 'assets/image/items/item-11.png',
      rating: { rate: 4.7, count: 180 },
    },
    {
      id: 12,
      title: 'Kids Electric Car',
      price: 299.99,
      description:
        'Luxury kids electric car with remote control and LED lights',
      category: 'toys',
      image: 'assets/image/items/item-12.png',
      rating: { rate: 4.5, count: 90 },
    },
    {
      id: 14,
      title: 'Pro Gaming Controller',
      price: 69.99,
      description:
        'Professional gaming controller with customizable buttons and improved grip',
      category: 'gaming',
      image: 'assets/image/items/item-14.png',
      rating: { rate: 4.7, count: 200 },
    },
    {
      id: 15,
      title: 'Winter Bomber Jacket',
      price: 129.99,
      description: 'Stylish bomber jacket with warm lining and zip pockets',
      category: 'clothing',
      image: 'assets/image/items/item-15.png',
      rating: { rate: 4.4, count: 110 },
    },
  ];

  constructor(private http: HttpClient) {}

  getProducts(
    limit: number = 8,
    startAfter: number = 0,
  ): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map((products) => products.slice(startAfter, startAfter + limit)),
      catchError(() => {
        console.log('API failed, using mock data');
        return of(this.mockProducts.slice(startAfter, startAfter + limit)).pipe(
          delay(500),
        );
      }),
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => {
        const product = this.mockProducts.find((p) => p.id === id);
        if (!product) {
          throw new Error('Product not found');
        }
        return of(product).pipe(delay(300));
      }),
    );
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/categories`).pipe(
      catchError(() => {
        const categories = [
          ...new Set(this.mockProducts.map((p) => p.category)),
        ];
        return of(categories).pipe(delay(300));
      }),
    );
  }

  getProductsByCategory(
    category: string,
    limit: number = 8,
    startAfter: number = 0,
  ): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/category/${category}`).pipe(
      map((products) => products.slice(startAfter, startAfter + limit)),
      catchError(() => {
        const filteredProducts = this.mockProducts
          .filter((p) => p.category.toLowerCase() === category.toLowerCase())
          .slice(startAfter, startAfter + limit);
        return of(filteredProducts).pipe(delay(500));
      }),
    );
  }

  searchProducts(searchTerm: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map((products) =>
        products.filter(
          (product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()),
        ),
      ),
      catchError(() => {
        const filteredProducts = this.mockProducts.filter(
          (product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()),
        );
        return of(filteredProducts).pipe(delay(300));
      }),
    );
  }
}
