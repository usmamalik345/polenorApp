import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoutiqueRoutingModule } from './boutique-routing.module';
import { BoutiqueComponent } from './boutique.component';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [
    BoutiqueComponent
  ],
  imports: [
    CommonModule,
    BoutiqueRoutingModule,
    FooterModule
  ]
})
export class BoutiqueModule { }
