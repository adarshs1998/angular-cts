import { Component, OnInit} from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // selectedProduct: Product;
  products: Product;
  myimage1:string =  "assets/images/samsung.jpg";
  myimage2:string =  "assets/images/realme.jpg";
  myimage3:string =  "assets/images/nokia.jpg";
  myimage4:string =  "assets/images/download.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
