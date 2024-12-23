import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';
import { ProductService } from '../../services/prdouct.service';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchStateService } from '../../../../core/services/search-state.service';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading = false;
  error = '';
  currentPage = 0;
  productsPerLoad = 8;
  allProductsLoaded = false;
  currentCategory: string | null = null;
  searchTerm: string = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute,
    private searchStateService: SearchStateService,
  ) {}

  ngOnInit() {
    combineLatest([
      this.route.params,
      this.route.queryParams,
      this.searchStateService.searchTerm$,
    ]).subscribe(([params, queryParams, searchTerm]) => {
      this.currentCategory = params['category'] || null;
      this.searchTerm = queryParams['search'] || searchTerm || '';
      this.resetAndLoadProducts();
    });
  }

  resetAndLoadProducts() {
    this.products = [];
    this.currentPage = 0;
    this.allProductsLoaded = false;
    this.loadMoreProducts();
  }

  loadMoreProducts() {
    if (this.loading || this.allProductsLoaded) return;

    this.loading = true;
    const startAfter = this.currentPage * this.productsPerLoad;

    let productObservable: Observable<Product[]>;

    if (this.searchTerm) {
      productObservable = this.productService.searchProducts(this.searchTerm);
    } else if (this.currentCategory) {
      productObservable = this.productService.getProductsByCategory(
        this.currentCategory,
        this.productsPerLoad,
        startAfter,
      );
    } else {
      productObservable = this.productService.getProducts(
        this.productsPerLoad,
        startAfter,
      );
    }

    productObservable.subscribe({
      next: (newProducts) => {
        if (newProducts.length < this.productsPerLoad) {
          this.allProductsLoaded = true;
        }
        this.products = [...this.products, ...newProducts];
        this.currentPage++;
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

  onProductClick(productId: number) {
    this.router.navigate(['/products', productId]);
  }
}
