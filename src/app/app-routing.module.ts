import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product-details/:foto/:nome', component: ProductsDetailsComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
