import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _http:HttpClient) { }


  getComments(){
    return this._http.get("https://dummyjson.com/comments?limit=10")
  }
}
