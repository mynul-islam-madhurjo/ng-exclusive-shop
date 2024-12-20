import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TimerComponent } from './components/timer/timer.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    TimerComponent,
    ServicesSectionComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ProductCardComponent,
    TimerComponent,
    ServicesSectionComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
