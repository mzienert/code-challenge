import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductList, Qty } from './product';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getProducts(): Product[]  {
    return ProductList;
  }

  addToCart(data: Product): any {
    return this.http.post(`${this.baseUrl}/add-item`, data);
  }

  getCart(): any {
    return this.http.get(`${this.baseUrl}/cart-items`);
  }

  removeCart(id: number): any {
    return this.http.delete(`${this.baseUrl}/remove-item/${id}`);
  }

  updateQty(qty: Qty): any {
    return this.http.put(`${this.baseUrl}/update-item/`, qty);
  }

}
