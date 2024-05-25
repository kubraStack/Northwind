import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListItem } from '../models/product-list-item';
import { ProductDetails } from '../models/product-details';

@Injectable({
  providedIn: 'root'
})//singleton
export class ProductsService {

  private apiControllerUrl = 'http://localhost:3000/products'
  
  constructor(private http:HttpClient ) { }

  getList(): Observable<ProductListItem[]> {
    return  this.http.get<ProductListItem[]>(this.apiControllerUrl);
  }

  getById(id: number) {
    return this.http.get<ProductDetails>(`${this.apiControllerUrl}/${id}`);
  }

}
