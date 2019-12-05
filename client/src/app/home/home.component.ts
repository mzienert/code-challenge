import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[];
  cartItems = [];
  loadingCart: boolean;
  itemCount: number;
  qtyCount: number;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadingCart = true;
    this.getProducts();
    this.getCart();
  }

  getProducts(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product): void {
    this.loadingCart = true;
    this.productService.addToCart(product).subscribe(res => {
      this.getCart();
    });
  }

  getCart(): void {
    this.productService.getCart().subscribe(res => {
      this.loadingCart = false;
      this.cartItems = res;
      this.getTotals();
    });
  }

  getTotals(): void {
    this.itemCount = this.cartItems.length;
    this.qtyCount = this.cartItems.reduce((a, b) => a + (b['qty'] || 0), 0);
  }

  removeCart(id: number): void {
    this.loadingCart = true;
    this.productService.removeCart(id).subscribe(res => {
      this.getCart();
    });
  }

  addQty(id: number, qty: number): void {
    const qtyValues = {
      id,
      qty: qty + 1
    };
    this.loadingCart = true;
    this.productService.updateQty(qtyValues).subscribe(res => {
      this.getCart();
    });
  }

  removeQty(id: number, qty: number): void {
    const qtyValues = {
      id,
      qty: qty - 1
    };
    this.loadingCart = true;
    this.productService.updateQty(qtyValues).subscribe(res => {
      this.getCart();
    });
  }

}
