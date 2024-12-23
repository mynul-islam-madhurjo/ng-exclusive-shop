import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ProductService } from '../../../features/products/services/prdouct.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  selectedCategory: string | null = null;
  categories: string[] = [];
  headerImagePath = 'assets/image/header.png';
  headerImageAlt = 'Header promotional image';
  loading = true;

  constructor(
    private productService: ProductService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.productService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading categories:', error);
        this.loading = false;
      },
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.router.navigate(['/products/category', category]);
  }
}
