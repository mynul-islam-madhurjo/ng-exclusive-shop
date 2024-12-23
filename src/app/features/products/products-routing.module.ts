import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {
    path: ':id',
    component: ProductPageComponent,
  },
  {
    path: 'products-list',
    component: ProductListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
