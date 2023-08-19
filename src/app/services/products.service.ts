import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }

  getAllProducts(){
    return this._http.get("https://dummyjson.com/products?limit=100");
  }
}
