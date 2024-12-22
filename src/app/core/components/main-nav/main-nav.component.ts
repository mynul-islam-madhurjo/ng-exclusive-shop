import { Component } from '@angular/core';
import { CartService } from '../../../features/cart/services/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'; // Add this import

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/sign-up', label: 'Sign up' },
  ];

  cartCount$: Observable<number> = this.cartService.cartItems$.pipe(
    map((items) =>
      items.reduce((count, item) => count + (item.quantity || 0), 0),
    ),
  );

  constructor(private cartService: CartService) {}
}
