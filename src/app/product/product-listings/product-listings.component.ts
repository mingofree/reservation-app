import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';

type Product = typeof products[0];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.css'],
})
export class ProductListComponent implements OnInit {
  products!: Product[]

  constructor() {}

  ngOnInit(): void {
    this.products = products;
  }

  trackFn(index: any, product: Product) {
    return product.name;
  }
}
