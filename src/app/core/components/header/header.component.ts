import { Component } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  selectedCategory: number | null = null;

  headerImagePath = 'assets/image/header.png';
  headerImageAlt = 'Header promotional image';

  // Categories data
  categories: Category[] = [
    { id: 1, name: "Woman's Fashion", path: '/category/womens-fashion' },
    { id: 2, name: "Men's Fashion", path: '/category/mens-fashion' },
    { id: 3, name: 'Electronics', path: '/category/electronics' },
    { id: 4, name: 'Home & Lifestyle', path: '/category/home-lifestyle' },
    { id: 5, name: 'Medicine', path: '/category/medicine' },
    { id: 6, name: 'Sports & Outdoor', path: '/category/sports-outdoor' },
    { id: 7, name: "Baby's & Toys", path: '/category/babies-toys' },
    { id: 8, name: 'Groceries & Pets', path: '/category/groceries-pets' },
    { id: 9, name: 'Health & Beauty', path: '/category/health-beauty' },
  ];

  selectCategory(categoryId: number): void {
    this.selectedCategory = categoryId;
  }
}
