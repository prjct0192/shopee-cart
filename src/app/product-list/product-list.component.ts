import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  productList: CartInterface[] = [];


  constructor(
    public productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    this.productList = this.productService.products;
  }
  public addProduct (product: CartInterface) {
    return this.productService.addProductToCart(product);
  }
}

