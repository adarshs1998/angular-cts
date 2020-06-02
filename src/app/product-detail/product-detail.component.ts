import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import {CartService} from '../cart.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product:Product;

  addToCart(product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

}
