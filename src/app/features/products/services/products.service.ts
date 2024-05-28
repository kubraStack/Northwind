import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductListItem } from '../models/product-list-item';
import { ProductDetails } from '../models/product-details';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})//singleton
export class ProductsService {

  private apiControllerUrl = `${environment.apiUrl}/products`;
  
  constructor(private http:HttpClient ) { }

  getList(): Observable<ProductListItem[]> {
    return  this.http
    .get<ProductListItem[]>(this.apiControllerUrl)
    .pipe(
      this.setImageToplaceHolder()
    ) as Observable<ProductListItem[]>;
  }

  private setImageToplaceHolder() {
    return map((response: ProductDetails | ProductListItem[] ) => {
      if (response instanceof Array) {
        for (const productListItem of response) {
          productListItem.imageUrl = 'https://via.placeholder.com/500';
        }
      }
      else{
        response.imageUrl = "https://via.placeholder.com/500";
      }

      return response;
    });
  }

  getById(id: number): Observable<ProductDetails> {
    return this.http.get<ProductDetails>(`${this.apiControllerUrl}/${id}`)
    .pipe(this.setImageToplaceHolder()) as Observable<ProductDetails>;
  }

}
