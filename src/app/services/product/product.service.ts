import { Injectable } from '@angular/core';

import products from '../../data/product/product.json';

import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    list(): Observable<Product[]> {
        return new Observable<Product[]>(
            observable => {
                const data: Product[] = [];
                products.forEach(
                    (customer: any) => {
                        data.push(new Product().build(customer));
                    }
                );
                observable.next(data);
            }
        );
    }
}
