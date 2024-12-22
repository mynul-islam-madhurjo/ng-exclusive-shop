import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <app-flash-sale></app-flash-sale>
    <app-product-list></app-product-list>
    <app-product-gallery></app-product-gallery>
    <app-services-section></app-services-section>
  `,
})
export class HomeComponent {}
