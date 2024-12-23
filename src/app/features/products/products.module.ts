import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { FlashSaleComponent } from './components/flash-sale/flash-sale.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/prdouct.service';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductPageComponent,
    ProductGalleryComponent,
    FlashSaleComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductsRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [ProductService],
  exports: [
    ProductListComponent,
    ProductPageComponent,
    ProductGalleryComponent,
    FlashSaleComponent,
    ProductCardComponent,
  ],
})
export class ProductsModule {}
