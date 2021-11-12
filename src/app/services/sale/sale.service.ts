import { Injectable } from '@angular/core';

import sales from '../../data/sale/sale.json';

import { Sale } from 'src/app/models/sale/sale';

import { Observable } from 'rxjs';

import { Customer } from 'src/app/models/customer/customer';

import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SaleService {
    constructor(private http:HttpClient){

    }
    list(): Observable<Sale[]> {
        return new Observable<Sale[]>(
            observable => {
                const data: Sale[] = [];
                sales.forEach(
                    (customer: any) => {
                        data.push(new Sale().build(customer));
                    }
                );
                observable.next(data);
            }
        );
    }


}
