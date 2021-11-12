export class Sale {

    SaleID!: number;
    CustomerId!: string;
    Lines!: object;


    build(customer: any): Sale {
        Object.assign(this, customer);
        return this;
    }

}
