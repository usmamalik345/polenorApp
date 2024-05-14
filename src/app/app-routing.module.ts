import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) }, { path: 'header', loadChildren: () => import('./modules/header/header.module').then(m => m.HeaderModule) }, { path: 'boutique', loadChildren: () => import('./modules/boutique/boutique.module').then(m => m.BoutiqueModule) }, { path: 'accueil', loadChildren: () => import('./modules/accueil/accueil.module').then(m => m.AccueilModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
