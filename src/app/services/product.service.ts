import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class ProductService {
  public  products: CartInterface[] = [
    {
      id: 1,
      product: 'Gaming Mouse',
      price: 29.99,
      amount: 0,
    },
    {
      id: 2,
      product: 'Harry Potter 3',
      price: 9.99,
      amount: 0,
    },
    {
      id: 3,
      product: 'Used plastic bottle',
      price: 0.99,
      amount: 0,
    },
    {
      id: 4,
      product: 'Half-dried plant',
      price: 2.99,
      amount: 0,
    }
  ];
  public productsInCart: CartInterface[] = [];
  private totalAmount: number = 0;
  public totalProducts = new BehaviorSubject(0);


  constructor() {}

  public addProductToCart(product: CartInterface): void {
    const existingProduct = this.productsInCart.find((item) => item.id === product.id);
    if (!existingProduct) {
      product.amount = 1;
      this.productsInCart.push(product);
    } else {
      existingProduct.amount += 1;
    }
    console.log(existingProduct);

    this.totalAmount++
    this.totalProducts.next(this.totalAmount)
  }
  public deleteProductFromCart(product: CartInterface): void {
    const existingProductIndex = this.productsInCart.findIndex(item => item.id === product.id);
    if (product.amount >= 1) {
      product.amount -= 1
      if (product.amount === 0) {
        this.productsInCart.splice(existingProductIndex, 1)
      }
    }
    this.totalAmount--
    this.totalProducts.next(this.totalAmount)

  }
}
