import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-top-nav></app-top-nav>
    <app-main-nav></app-main-nav>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
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
