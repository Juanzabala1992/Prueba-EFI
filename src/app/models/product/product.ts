export class Product {
    ProductId!: number;
    Name!: string;
    Price!: string;
    Weight!: string;

    build(content: any): Product {
        Object.assign(this, content);

        return this;
    }
}
