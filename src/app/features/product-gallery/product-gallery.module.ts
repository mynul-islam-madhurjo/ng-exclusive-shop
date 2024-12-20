import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductGalleryComponent } from './product-gallery.component';

@NgModule({
  declarations: [ProductGalleryComponent],
  imports: [CommonModule, RouterModule],
  exports: [ProductGalleryComponent],
})
export class ProductGalleryModule {}
