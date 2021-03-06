import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ProductsComponent} from './products/products.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import{ProductDetailComponent} from './product-detail/product-detail.component';
import{CartComponent} from './cart/cart.component';
const routes: Routes = [{path: ' ', redirectTo:'/dashboard',pathMatch: 'full'},
  {path: 'products',component: ProductsComponent},
{path: 'product-detail',component: ProductDetailComponent},
{path: 'dashboard',component: DashboardComponent},
{path: 'cart',component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
