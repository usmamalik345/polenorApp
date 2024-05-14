import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoutiqueRoutingModule } from './boutique-routing.module';
import { BoutiqueComponent } from './boutique.component';

@NgModule({
  declarations: [
    BoutiqueComponent
  ],
  imports: [
    CommonModule,
    BoutiqueRoutingModule
  ]
})
export class BoutiqueModule { }
