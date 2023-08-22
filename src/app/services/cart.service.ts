import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private key = 'cart';
  private productCountSubject = new BehaviorSubject<number>(
    this.getProducts().length
  );
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

  deleteProduct(item: any) {
    let products = localStorage.getItem('cart');
    if (products) {
      let productsArr = JSON.parse(products);
      const itemDelete = item.id;
      const newCart = productsArr.filter((item: any) => item.id !== itemDelete);
      localStorage.setItem('cart', JSON.stringify(newCart));
      window.location.reload();
    }
  }

  getCart(): Product[] {
    const cart = localStorage.getItem(this.key);
    if (cart) {
      const products: Product[] = JSON.parse(cart);

      const consolidatedProducts = products.reduce(
        (acc: Product[], product: Product) => {
          const existingProduct = acc.find((p) => p.id === product.id);

          if (existingProduct) {
            existingProduct.quantity = (existingProduct.quantity || 0) + 1;
          } else {
            product.quantity = 1;
            acc.push(product);
          }
          return acc;
        },
        []
      );
      return consolidatedProducts;
    }
    return [];
  }
}

interface Product {
  id: string;
  name: string;
  quantity?: number;
}
