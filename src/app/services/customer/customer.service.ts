import { Injectable } from '@angular/core';

import customers from '../../data/customer/customer.json';

import { Observable } from 'rxjs';

import { Customer } from 'src/app/models/customer/customer';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    list(): Observable<Customer[]> {
        return new Observable<Customer[]>(
            observable => {
                const data: Customer[] = [];
                customers.forEach(
                    (customer: any) => {
                        data.push(new Customer().build(customer));
                    }
                );
                observable.next(data);
            }
        );
    }
}
