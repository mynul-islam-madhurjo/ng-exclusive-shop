import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from '../../core/services/cart.service';
import { WishlistService } from '../../core/services/wishlist.service';

interface Product {
  id: number;
  title: string;
  price?: number;
  currentPrice?: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  ratingCount: number;
  description?: string;
  image?: string;
  images?: string[];
  colors?: string[];
  sizes?: string[];
  isWishlisted?: boolean;
}

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  product: Product | null = null;
  selectedImageIndex = 0;
  selectedColor: string | null = null;
  selectedSize: string | null = null;
  quantity = 1;
  isInWishlist$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private wishlistService: WishlistService,
  ) {
    this.isInWishlist$ = this.wishlistService.wishlistItems$.pipe(
      map((items) => items.some((item) => item.id === this.product?.id)),
    );
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.loadProduct(id);
    });
  }

  loadProduct(id: string) {
    this.product = {
      id: 1,
      title: 'Havic HV G-92 Gamepad',
      price: 192.0,
      rating: 4.5,
      ratingCount: 150,
      description:
        'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal',
      colors: ['#000000', '#FF0000'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      images: [
        'assets/image/items/item-1.png',
        'assets/image/items/item-2.png',
        'assets/image/items/item-3.png',
        'assets/image/items/item-4.png',
      ],
    };
  }

  selectImage(index: number) {
    this.selectedImageIndex = index;
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  buyNow() {
    if (this.product) {
      console.log('Buy Now:', this.product);
    }
  }

  toggleWishlist() {
    if (this.product) {
      // this.wishlistService.toggleWishlist(this.product);
    }
  }
}
