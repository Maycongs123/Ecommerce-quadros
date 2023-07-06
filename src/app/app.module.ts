import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardSizeComponent } from './components/card-size/card-size.component';
import { CardFrameComponent } from './components/card-frame/card-frame.component';
import { CartComponent } from './pages/cart/cart.component';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductCardComponent,
    ProductsDetailsComponent,
    FooterComponent,
    CardSizeComponent,
    CardFrameComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    AppRoutingModule,
    MatGridListModule,
    MatIconModule,
    MatSelectModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
