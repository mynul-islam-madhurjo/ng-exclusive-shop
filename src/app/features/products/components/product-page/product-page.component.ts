import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WishlistService } from '../../../../core/services/wishlist.service';
import { CartService } from '../../../cart/services/cart.service';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/prdouct.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  product: Product | null = null;
  selectedColor: string | null = null;
  selectedSize: string | null = null;
  quantity = 1;
  isInWishlist$: Observable<boolean>;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private productService: ProductService,
  ) {
    this.isInWishlist$ = this.wishlistService.wishlistItems$.pipe(
      map((items) => items.some((item) => item.id === this.product?.id)),
    );
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.loadProduct(id);
    });
  }

  loadProduct(id: number) {
    this.loading = true;
    this.error = '';
    this.productService.getProduct(id).subscribe({
      next: (product) => {
        this.product = {
          ...product,
          colors: ['#000000', '#FF0000'],
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
        };
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading product:', error);
        this.error = 'Failed to load product. Please try again later.';
        this.loading = false;
      },
    });
  }

  onAddToCart() {
    if (this.product) {
      const cartProduct = {
        id: this.product.id,
        title: this.product.title,
        price: this.product.price,
        image: this.product.image,
        rating: this.product.rating.rate,
        ratingCount: this.product.rating.count,
        quantity: this.quantity,
      };
      this.cartService.addToCart(cartProduct);
    }
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
      this.onAddToCart();
      this.router.navigate(['/cart']);
    }
  }

  toggleWishlist() {
    if (this.product) {
      // this.wishlistService.toggleWishlistItem(this.product);
    }
  }
}
