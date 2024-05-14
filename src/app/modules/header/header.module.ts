import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { ProductsComponent } from '../products/products.component';
import { AccueilComponent } from '../accueil/accueil.component';
import { BoutiqueComponent } from '../boutique/boutique.component';
import { HeaderComponent } from './header.component';
import {AppModule} from "../../app.module";


@NgModule({
  declarations: [
    HeaderComponent,
  ],
    imports: [
        CommonModule,
        HeaderRoutingModule,
    ],
  exports: [
    HeaderComponent ,
  ]
})
export class HeaderModule { }
