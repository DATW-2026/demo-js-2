export class Product {
    #sku: string;
    #name: string;
    #unitaryPrice: number;

    get sku() {
        return this.#sku;
    }

    constructor(sku: string, name: string, unitaryPrice: number) {
        this.#sku = sku;
        this.#name = name;
        this.#unitaryPrice = unitaryPrice;
    }

    #calculatePrice(items: number) {
        return items * this.#unitaryPrice;
    }

    renderInvoiceLine(amount: number) {
        const tuple = ['', this.#calculatePrice(amount)];
        tuple[0] = `${this.#name}: ${amount} unidades a ${this.#unitaryPrice}€ ................... Total ${tuple[1]}€`;
        return tuple;
    }
}

const product01 = new Product('B01', 'Botella', 2);
console.log(product01);
console.log(product01.renderInvoiceLine(3));
