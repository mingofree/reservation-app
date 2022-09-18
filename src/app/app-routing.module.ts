import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './product/product.module';

// const routes: Routes = [
//   { path: '', component: ProductListComponent },
//   { path: 'detail', component: ProductDetailComponent }
// ];

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
