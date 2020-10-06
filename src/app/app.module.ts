import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutingModule } from './routing.module';

// Import common modules
import { MaterialModule } from './material.module';

//Import services
import { MessangerService } from './shared/services/messanger.service'


//Import components
import { MainComponent } from './shared/pages/main/main.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductIndexComponent } from './product/pages/product-index/product-index.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { CardComponent } from './shared/components/card/card.component';
import { ProductDetailComponent } from './product/pages/product-detail/product-detail.component';
import { CartMenuComponent } from './cart/components/cart-menu/cart-menu.component';
import { CartItemComponent } from './cart/components/cart-item/cart-item.component';
import { CartIndexComponent } from './cart/pages/cart-index/cart-index.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductIndexComponent,
    HeaderComponent,
    HeroComponent,
    CardComponent,
    ProductDetailComponent,
    CartMenuComponent,
    CartItemComponent,
    CartIndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule,
  ],
  providers: [
    MessangerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
