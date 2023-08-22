import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})

export class CartComponent {
  cart: boolean;
  cartItems:any[] = [];

  constructor(private _service: CartService) {}

  ngOnInit() {
    this.cartItems = this._service.getCart();
    if (this.cartItems.length > 0) {
      this.cart = true;
      console.log(this.cartItems)
    }
  }

  deleteItem(item:any){
    this._service.deleteProduct(item);
  }
}
