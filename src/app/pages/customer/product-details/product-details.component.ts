import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Product } from 'src/app/models/product/product';
import { Sale } from 'src/app/models/sale/sale';
import { ProductService } from 'src/app/services/product/product.service';
import { SaleService } from 'src/app/services/sale/sale.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products$!: Observable<Product[]>;
  sales: Sale[]=[];
  salesdata!: Sale[];
  lines: Array<any> = [];
  linesP: Array<any> = [];
  linesU: Array<any> = [];
  id!: string;
  j=0;

  constructor(private route: ActivatedRoute,
    private saleServices: SaleService,
    private productservice: ProductService    
  ) { 

    this.products$= new Subject();
  }

  ngOnInit(): void {
  
 
    this.products$=this.productservice.list();
    

    this.saleServices.list().pipe(take(1)).subscribe((res: any) => {
      this.route.params.pipe(take(1)).subscribe((params) => {
        this.id = params['id'];
      });
           
      this.salesdata = res;
      
      for(let i=0;i<this.salesdata.length;i++){        
        if(this.id==this.salesdata[i].CustomerId){  
          this.sales[this.j]=this.salesdata[i]
          this.j++;
        }        
      }
      for (let i = 0; i < this.sales.length; i++) {
        this.lines.push(this.sales[i].Lines);        
      }

      this.lines.forEach(data => {

        for (let i = 0; i <= 1; i++) {
          this.linesP.push(data[i].ProductId)
          this.linesU.push(data[i].Units)
        }

      });
    });

  }
  goback(){
    window.history.back();
  }
}

