import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }
  rmvCart(item){
    // console.log(item)

    // for(var i=0; i<this.items.length; i++){

    //   if(this.items[i]["name"] == name){
    //     this.items.splice(i,-1);
    //   }
    // }
    this.items.pop();
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
  constructor() { }
}
