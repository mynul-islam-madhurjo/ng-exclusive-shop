import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, RouterModule],
  exports: [ProductListComponent],
})
export class ProductListModule {}
