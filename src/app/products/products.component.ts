import { Component, OnInit } from '@angular/core';
import{Product} from '../product';
// import {PRODUCTS} from './../mock-products';
import {ProductService} from './../product.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = 'Angular Search Using ng2-search-filter';
  searchText;
  selectedProduct: Product;
  products: Product[];
  constructor(private ProductService: ProductService ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  onSelect(product: Product):void{
    this.selectedProduct = product;
  }
  getProducts(): void{
    this.ProductService.getProducts().subscribe(products => this.products=products);
  }
  // Search(){
  //   this.products = this.products.filter(res=>{
  //     return this.products;
  //   });
  // }
}
