import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './list/customer-list.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '',  
  children:[
    {path:'customer-list', component:CustomerListComponent},
    {path:'product-list', component:ProductListComponent},
    
/*     {path:'product-details/:id', component:ProductDetailsComponent}, */
  ] 
},  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
