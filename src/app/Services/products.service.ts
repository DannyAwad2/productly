import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  URL: string = 'http://localhost:3000/products/';

  get(productId: string): Observable<IProduct> {
    return this.http.get<IProduct>(this.URL + productId);
  }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.URL);
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.URL, product);
  }

  update(productId: string, product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(this.URL + productId, product);
  }
}
