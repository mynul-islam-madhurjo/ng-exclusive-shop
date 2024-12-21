import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-top-nav></app-top-nav>
    <app-main-nav></app-main-nav>
    <main class="main-content">
      <app-header></app-header>
      <app-flash-sale></app-flash-sale>
      <app-product-list></app-product-list>
      <app-product-gallery></app-product-gallery>
      <app-services-section></app-services-section>
      <app-product-page></app-product-page>
      <app-footer></app-footer>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
      .main-content {
        min-height: calc(100vh - 12rem);
        padding: 2rem 0;
      }
    `,
  ],
})
export class AppComponent {}
