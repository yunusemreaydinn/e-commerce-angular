import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  itemCount:number = 0;

  constructor(private _service:CartService){}

  ngOnInit() {
    this._service.productCount$.subscribe(
      count => {this.itemCount = count}
    )
  }
}
