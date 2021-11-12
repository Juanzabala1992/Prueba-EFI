import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerComponent } from './customer.component';

import { CustomerListComponent } from './list/customer-list.component';

import { OrderModule } from 'ngx-order-pipe';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  imports: [
    CustomerRoutingModule,
    SharedModule,
    OrderModule,
    FontAwesomeModule,

  ],
  declarations: [CustomerComponent, CustomerListComponent, ProductListComponent],
  exports: [CustomerComponent, CustomerListComponent,ProductListComponent]
})
export class CustomerModule { }
