import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  public cartItems: CartInterface[] = [];


  constructor(
    public productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.cartItems = this.productService.productsInCart
  }
  public deleteProduct(product: CartInterface) {
    return this.productService.deleteProductFromCart(product)
  }
}
