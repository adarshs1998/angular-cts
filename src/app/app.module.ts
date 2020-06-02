import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    DashboardComponent,
    CartComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
