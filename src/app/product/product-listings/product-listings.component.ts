import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.css'],
})
export class ProductListComponent implements OnInit {
  products = [1, 2, 3, 4];

  constructor() {}

  ngOnInit(): void {}
}
