import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashSaleComponent } from './flash-sale.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [FlashSaleComponent],
  imports: [CommonModule, SharedModule],
  exports: [FlashSaleComponent],
})
export class FlashSaleModule {}
