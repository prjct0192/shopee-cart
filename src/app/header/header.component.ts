import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public itemsInCart: number | undefined;

  constructor(
    public productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.getCartTotalItems();
  }

  private getCartTotalItems(): void {
    this.productService.totalProducts.subscribe(cartProductAmount =>{
      this.itemsInCart = cartProductAmount;
    })
  }
}
