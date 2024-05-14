import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { ProductsComponent } from '../products/products.component';
import { AccueilComponent } from '../accueil/accueil.component';
import { BoutiqueComponent } from '../boutique/boutique.component';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ProductsComponent,
    AccueilComponent,
    BoutiqueComponent,
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  exports: [
    HeaderComponent ,
    AccueilComponent// Export if it needs to be used in other modules
  ]
})
export class HeaderModule { }
