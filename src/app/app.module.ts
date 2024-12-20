import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './core/components/top-nav/top-nav.component';
import { MainNavComponent } from './core/components/main-nav/main-nav.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './core/components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { FlashSaleModule } from './features/flash-sale/flash-sale.module';
import { ProductGalleryModule } from './features/product-gallery/product-gallery.module';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    MainNavComponent,
    SearchBarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    FlashSaleModule,
    ProductGalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
