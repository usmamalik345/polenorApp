import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';
import {FooterModule} from "./modules/footer/footer.module";
import { ProductShopComponent } from './modules/product-shop/product-shop.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
