import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header.component';
import { AccueilComponent } from '../accueil/accueil.component';
import { BoutiqueComponent } from '../boutique/boutique.component';
import { ProductsComponent } from '../products/products.component';

const routes: Routes = [{ path: '', component: HeaderComponent } ,  { path: 'accueil', component: AccueilComponent },
{ path: 'boutique', component: BoutiqueComponent },
{ path: 'products', component: ProductsComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
