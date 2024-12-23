import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';
import { ProductService } from '../../services/prdouct.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading = true;
  error = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.loading = true;
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load products. Please try again later.';
        this.loading = false;
        console.error('Error loading products:', error);
      },
    });
  }

  toggleWishlist(productId: number): void {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      product.isWishlisted = !product.isWishlisted;
    }
  }

  quickView(productId: number): void {
    console.log('Quick view:', productId);
  }

  onAddToCart(product: Product) {
    const cartProduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      rating: product.rating.rate,
      ratingCount: product.rating.count,
    };

    this.cartService.addToCart(cartProduct);

    const productToUpdate = this.products.find((p) => p.id === product.id);
    if (productToUpdate) {
      productToUpdate.addedToCart = true;
      setTimeout(() => {
        productToUpdate.addedToCart = false;
      }, 2000);
    }
  }
}
