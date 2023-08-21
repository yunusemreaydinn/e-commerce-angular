import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = "https://fakestoreapi.com/";

  constructor(private _http:HttpClient) { }

  getAllProducts(){
    return this._http.get(this.url + "products?limit=100");
  }

  getProductByCategory(category: string){
    return this._http.get(this.url + "products/category/" + category)
  }
}
