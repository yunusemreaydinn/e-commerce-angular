import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = "https://fakestoreapi.com/";

  arrivals = [
    {
      title: 'Fjallraven - Foldsack No. 1 Backpack',
      price: '109.05',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
      title: 'Mens Casual Premium Slim Fit T-Shirts',
      price: '22.3',
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
    {
      title: 'Mens Cotton Jacket',
      price: '55.99',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    },
    {
      title: 'Mens Cotton Jacket',
      price: '55.99',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    },
  ];
  
  topRatings = [
    {
      title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
      price: '15.99',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
    },
    {
      title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: '109.05',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    },
    {
      title: 'Solid Gold Petite Micropave',
      price: '695',
      category: 'jewelery',
      image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    },
    {
      title: 'Solid Gold Petite Micropave',
      price: '695',
      category: 'jewelery',
      image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    },
  ];

  constructor(private _http:HttpClient) { }

  getAllProducts(){
    return this._http.get(this.url + "products?limit=100");
  }

  getProductByCategory(category: string){
    return this._http.get(this.url + "products/category/" + category)
  }

}
