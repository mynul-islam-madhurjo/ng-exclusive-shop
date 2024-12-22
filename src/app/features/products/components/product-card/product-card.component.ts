import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: any;
  @Input() isInWishlist = false;
  @Output() wishlistClick = new EventEmitter<void>();
  @Output() quickViewClick = new EventEmitter<void>();
  @Output() addToCartClick = new EventEmitter<void>();

  onWishlist() {
    this.wishlistClick.emit();
  }

  onQuickView() {
    this.quickViewClick.emit();
  }

  onAddToCart() {
    this.addToCartClick.emit();
  }
}
