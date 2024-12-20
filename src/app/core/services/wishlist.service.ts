import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private wishlistItems = new BehaviorSubject<Product[]>([]);
  wishlistItems$ = this.wishlistItems.asObservable();

  toggleWishlist(product: Product) {
    const currentItems = this.wishlistItems.value;
    const index = currentItems.findIndex((item) => item.id === product.id);

    if (index > -1) {
      currentItems.splice(index, 1);
    } else {
      currentItems.push(product);
    }

    this.wishlistItems.next([...currentItems]);
  }
}
