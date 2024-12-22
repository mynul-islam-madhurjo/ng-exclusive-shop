import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: number;
  ratingCount: number;
  isWishlisted?: boolean;
  addedToCart?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly CART_KEY = 'cart_items';
  private cartItems = new BehaviorSubject<CartItem[]>(
    this.getCartFromStorage(),
  );
  cartItems$ = this.cartItems.asObservable();

  cartTotal$ = this.cartItems$.pipe(
    map((items) =>
      items.reduce((total, item) => total + item.price * item.quantity, 0),
    ),
  );

  constructor() {
    this.loadCart();
  }

  private loadCart() {
    const storedCart = localStorage.getItem(this.CART_KEY);
    if (storedCart) {
      this.cartItems.next(JSON.parse(storedCart));
    }
  }

  private saveCart(items: CartItem[]) {
    localStorage.setItem(this.CART_KEY, JSON.stringify(items));
    this.cartItems.next(items);
  }

  private getCartFromStorage(): CartItem[] {
    const storedCart = localStorage.getItem(this.CART_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  }

  addToCart(product: Product, quantity: number = 1) {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
      this.saveCart([...currentItems]);
    } else {
      this.saveCart([...currentItems, { ...product, quantity }]);
    }
  }

  removeFromCart(productId: number) {
    const currentItems = this.cartItems.value;
    this.saveCart(currentItems.filter((item) => item.id !== productId));
  }

  updateQuantity(productId: number, quantity: number) {
    const currentItems = this.cartItems.value;
    const item = currentItems.find((item) => item.id === productId);

    if (item) {
      item.quantity = quantity;
      this.saveCart([...currentItems]);
    }
  }

  getCartTotal(): number {
    return this.cartItems.value.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }

  getCartCount(): number {
    return this.cartItems.value.reduce(
      (count, item) => count + item.quantity,
      0,
    );
  }

  clearCart() {
    localStorage.removeItem(this.CART_KEY);
    this.cartItems.next([]);
  }
}
