import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './pages/customer/product-details/product-details.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/customer' },
  { path: 'customer', loadChildren: () => import('./pages/customer/customer.module').then(m => m.CustomerModule) },
  {path:'product-details', component:ProductDetailsComponent},
  {path:'product-details/:id', component:ProductDetailsComponent},
];

@NgModule({
  declarations:[ProductDetailsComponent],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule, ProductDetailsComponent]
})
export class AppRoutingModule { }
