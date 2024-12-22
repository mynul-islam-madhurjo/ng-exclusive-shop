import { Component } from '@angular/core';

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

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      image: 'assets/image/items/item-1.png',
      rating: 5,
      ratingCount: 88,
    },
    {
      id: 2,
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      image: 'assets/image/items/item-1.png',
      rating: 4,
      ratingCount: 88,
    },
    {
      id: 3,
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      image: 'assets/image/items/item-1.png',
      rating: 1,
      ratingCount: 88,
    },
    {
      id: 4,
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      image: 'assets/image/items/item-1.png',
      rating: 5,
      ratingCount: 88,
    },
    {
      id: 5,
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      image: 'assets/image/items/item-1.png',
      rating: 5,
      ratingCount: 88,
    },
    {
      id: 1,
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      image: 'assets/image/items/item-1.png',
      rating: 5,
      ratingCount: 88,
    },
    {
      id: 1,
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      image: 'assets/image/items/item-1.png',
      rating: 5,
      ratingCount: 88,
    },
    {
      id: 1,
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      image: 'assets/image/items/item-1.png',
      rating: 5,
      ratingCount: 88,
    },
    {
      id: 1,
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      image: 'assets/image/items/item-1.png',
      rating: 5,
      ratingCount: 88,
    },
    {
      id: 1,
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      image: 'assets/image/items/item-1.png',
      rating: 5,
      ratingCount: 88,
    },
    {
      id: 1,
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      image: 'assets/image/items/item-1.png',
      rating: 5,
      ratingCount: 88,
    },
    {
      id: 1,
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      image: 'assets/image/items/item-1.png',
      rating: 5,
      ratingCount: 88,
    },
    {
      id: 1,
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      image: 'assets/image/items/item-1.png',
      rating: 5,
      ratingCount: 88,
    },
    {
      id: 1,
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      image: 'assets/image/items/item-1.png',
      rating: 5,
      ratingCount: 88,
    },
  ];

  toggleWishlist(productId: number): void {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      product.isWishlisted = !product.isWishlisted;
    }
  }

  quickView(productId: number): void {
    console.log('Quick view:', productId);
  }
}
