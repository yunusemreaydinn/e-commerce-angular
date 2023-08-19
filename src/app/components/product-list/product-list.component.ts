import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products:any;

  constructor(private _service:ProductsService ){}

  ngOnInit(){
    this._service.getAllProducts().subscribe(data => {
      this.products=data;
      console.log(this.products);
    })
  }

}
