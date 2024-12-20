import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  declarations: [ProductCardComponent, TimerComponent],
  imports: [CommonModule, RouterModule],
  exports: [ProductCardComponent, TimerComponent],
})
export class SharedModule {}
