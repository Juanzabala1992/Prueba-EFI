import { Component, OnInit } from '@angular/core';

import {take} from "rxjs/operators"
import { Product } from 'src/app/models/product/product';

import { ProductService } from 'src/app/services/product/product.service';
import { faSortAlphaUp, faSortAlphaDownAlt, faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: Product[];
  clave:string='Price';
  reversa:boolean=true;
  faSortAlphaUp = faSortAlphaUp;
  faSortAlphaDownAlt=faSortAlphaDownAlt;
  faArrowAltCircleUp=faArrowAltCircleUp;
  faArrowAltCircleDown=faArrowAltCircleDown;
  show!:boolean;
  showId!:boolean;
  showP=false;
  constructor(private productservice: ProductService) {    
   }

  ngOnInit(): void {

    this.productservice.list().pipe(take(1)).subscribe((res:any)=> {
      this.products =res; 
     });

  }

  tableOrder(clave:string){
    if(this.clave===clave){
      this.reversa=!this.reversa;
    }
    if(this.clave==="Id"){
      this.showId=!this.showId;
    }else if (this.clave==="Name"){
      this.show=!this.show;
    }
    else{
      this.showP=!this.showP;
    }
    this.clave=clave;
  }

}
