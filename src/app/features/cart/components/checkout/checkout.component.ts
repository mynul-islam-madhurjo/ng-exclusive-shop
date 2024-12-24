import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  checkoutForm: FormGroup;
  cartItems$ = this.cartService.cartItems$;
  cartTotal$ = this.cartService.cartTotal$;
  paymentMethod: 'bank' | 'cash' = 'bank';
  showSuccessMessage = false;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private router: Router,
  ) {
    this.checkoutForm = this.fb.group({
      firstName: ['', Validators.required],
      companyName: [''],
      streetAddress: ['', Validators.required],
      apartment: [''],
      town: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      saveInfo: [false],
      couponCode: [''],
    });
  }

  applyCoupon() {
    // Implement coupon logic
    console.log('Applying coupon:', this.checkoutForm.get('couponCode')?.value);
  }

  placeOrder() {
    if (this.checkoutForm.valid) {
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.cartService.clearCart();
        this.router.navigate(['/home']);
      }, 2000);
    } else {
      Object.keys(this.checkoutForm.controls).forEach((key) => {
        const control = this.checkoutForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}
