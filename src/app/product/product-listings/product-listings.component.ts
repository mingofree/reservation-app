import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';
import { ProductService } from '../shared/product.service';

type Product = typeof products[0];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.css'],
})
export class ProductListComponent implements OnInit {
  products!: Product[]

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  trackFn(index: any, product: Product) {
    return product._id;
  }
}
