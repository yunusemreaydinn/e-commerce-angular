import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private key = 'cart';
  private productCountSubject = new BehaviorSubject<number>(this.getProducts().length);
  productCount$ = this.productCountSubject.asObservable();

  constructor() {}

  addProduct(product: any) {
    let products = this.getProducts();
    products.push(product);
    localStorage.setItem(this.key, JSON.stringify(products));
    this.productCountSubject.next(products.length);
  }

  getProducts() {
    const cart = localStorage.getItem(this.key);
    if (cart) {
      return JSON.parse(cart);
    }
    return [];
  }
}
