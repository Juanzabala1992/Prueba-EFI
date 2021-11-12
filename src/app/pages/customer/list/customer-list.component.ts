import { Component, OnInit } from '@angular/core';

import {take} from "rxjs/operators"

import { Customer } from 'src/app/models/customer/customer';

import { CustomerService } from 'src/app/services/customer/customer.service';

import { faSortAlphaUp, faSortAlphaDownAlt, faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers!: Customer[];
  clave:string='Id';
  reversa:boolean=false;
  faSortAlphaUp = faSortAlphaUp;
  faSortAlphaDownAlt=faSortAlphaDownAlt;
  faArrowAltCircleUp=faArrowAltCircleUp;
  faArrowAltCircleDown=faArrowAltCircleDown;
  show=true;
  showId=true;
  constructor(private customerService: CustomerService, ) { 
  }

  ngOnInit() { 
    
     this.customerService.list().pipe(take(1)).subscribe((res:any)=> {
     this.customers =res;     
    });
  }

tableOrder(clave:string){
  if(this.clave===clave){
    this.reversa=!this.reversa;
  }
  if(this.clave==="Id"){
    this.showId=!this.showId;
  }else{
    this.show=!this.show;
  }
  this.clave=clave;
}

}
