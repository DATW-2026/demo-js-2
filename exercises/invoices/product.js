export class Product {
    #sku;
    #name;
    #unitaryPrice;

    constructor(sku, name, unitaryPrice) {
        this.#sku = sku;
        this.#name = name;
        this.#unitaryPrice = unitaryPrice;
    }

    #calculatePrice(items) {
        return items * this.#unitaryPrice;
    }

    renderInvoiceLine(amount) {
        const tuple = ['', this.#calculatePrice(amount)];
        tuple[0] = `${this.#name}: ${amount} unidades a ${this.#unitaryPrice}€ ................... Total ${tuple[1]}€`;
        return tuple;
    }
}

const product01 = new Product('B01', 'Botella', 2);
console.log(product01);
console.log(product01.renderInvoiceLine(3));
