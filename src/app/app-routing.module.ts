import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';

const routes: Routes = [{ path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) ,canActivate: [authGuard] },
  { path: 'header', loadChildren: () => import('./modules/header/header.module').then(m => m.HeaderModule) ,canActivate: [authGuard] },
  { path: 'boutique', loadChildren: () => import('./modules/boutique/boutique.module').then(m => m.BoutiqueModule) ,canActivate: [authGuard] },
  { path: 'accuei', loadChildren: () => import('./modules/accueil/accueil.module').then(m => m.AccueilModule) ,canActivate: [authGuard] },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'registration', loadChildren: () => import('./modules/registration/registration.module').then(m => m.RegistrationModule) },
  { path: '**', redirectTo: '/login' } // Redirect all other routes to the login page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
