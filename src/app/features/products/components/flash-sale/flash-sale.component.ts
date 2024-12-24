import { Component, OnInit, OnDestroy } from '@angular/core';

interface Product {
  id: number;
  title: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  image: string;
  rating: number;
  ratingCount: number;
  isInWishlist?: boolean;
}

@Component({
  selector: 'app-flash-sale',
  templateUrl: './flash-sale.component.html',
  styleUrls: ['./flash-sale.component.css'],
})
export class FlashSaleComponent implements OnInit, OnDestroy {
  products: Product[] = [
    {
      id: 1,
      title: 'HAVIT HV-G92 Gamepad',
      currentPrice: 120,
      originalPrice: 160,
      discount: 40,
      image: 'assets/image/items/item-1.png',
      rating: 5,
      ratingCount: 88,
    },
    {
      id: 2,
      title: 'AK-900 Wired Keyboard',
      currentPrice: 1000,
      originalPrice: 1260,
      discount: 35,
      image: 'assets/image/items/item-2.png',
      rating: 4,
      ratingCount: 75,
    },
    {
      id: 3,
      title: 'IPS LCD Gaming Monitor',
      currentPrice: 960,
      originalPrice: 1160,
      discount: 35,
      image: 'assets/image/items/item-3.png',
      rating: 2,
      ratingCount: 80,
    },
    {
      id: 4,
      title: 'S-Series Comfort chair',
      currentPrice: 120,
      originalPrice: 140,
      discount: 35,
      image: 'assets/image/items/item-4.png',
      rating: 4,
      ratingCount: 75,
    },
    {
      id: 5,
      title: 'HAVIT HV-G92 Gamepad',
      currentPrice: 960,
      originalPrice: 1160,
      discount: 35,
      image: 'assets/image/items/item-5.png',
      rating: 4,
      ratingCount: 75,
    },
  ];

  endDate = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000); // 3 days from now
  currentSlide = 0;
  slideWidth = 280;
  itemsPerView = 4;
  maxSlide = this.products.length - this.itemsPerView;
  private resizeObserver?: ResizeObserver;

  ngOnInit() {
    this.setupResizeObserver();
    this.calculateItemsPerView();
  }

  ngOnDestroy() {
    this.resizeObserver?.disconnect();
  }

  private setupResizeObserver() {
    this.resizeObserver = new ResizeObserver(() => {
      this.calculateItemsPerView();
      this.adjustCurrentSlide();
    });

    const container = document.querySelector('.product-slider');
    if (container) {
      this.resizeObserver.observe(container);
    }
  }

  private calculateItemsPerView() {
    const width = window.innerWidth;
    if (width < 768) {
      this.itemsPerView = 1;
    } else if (width < 1024) {
      this.itemsPerView = 2;
    } else if (width < 1280) {
      this.itemsPerView = 3;
    } else {
      this.itemsPerView = 4;
    }
    this.maxSlide = Math.max(0, this.products.length - this.itemsPerView);
  }

  private adjustCurrentSlide() {
    if (this.currentSlide > this.maxSlide) {
      this.currentSlide = this.maxSlide;
    }
  }

  slide(direction: 'prev' | 'next') {
    if (direction === 'prev' && this.currentSlide > 0) {
      this.currentSlide--;
    } else if (direction === 'next' && this.currentSlide < this.maxSlide) {
      this.currentSlide++;
    }
  }

  onWishlistToggle(product: Product) {
    console.log('Toggle wishlist:', product);
  }

  onAddToCart(product: Product) {
    console.log('Add to cart:', product);
  }

  onQuickView(product: Product) {
    console.log('Quick view:', product);
  }
}
