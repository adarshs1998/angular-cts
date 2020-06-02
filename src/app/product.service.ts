import { Injectable } from '@angular/core';
import{PRODUCTS} from './mock-products';
import {Product} from './product';
import{Observable,of} from 'rxjs';
import { MessagesService } from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private messagesService: MessagesService) { }

  getProducts(): Observable<Product[]> {
    this.messagesService.add('ProductService: fetched product');
    return of (PRODUCTS);
  }
}
