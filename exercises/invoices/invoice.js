import { Company } from './company.js';

export class Invoice {
    static #brand = new Company('PepeSL', '55154651654X');
    static #lastId = 0;
    static #getID() {
        const year = new Date().getFullYear();
        const id = String(year) + '/' + String(++this.#lastId);
        return id;
    }

    #id = Invoice.#getID();
    #client;
    #items;
    #iva;
    #total = 0;

    constructor(client, product, amount, iva = 1.21) {
        this.#items = [
            {
                product: product,
                amount: amount,
            },
        ];
        this.#iva = iva;
        this.#client = client;
    }

    get client() {
        return this.#client;
    }

    addProduct(product, amount) {
        this.#items.push(product, amount);
    }

    #calculatePrice(price) {}

    printInvoice() {
        const invoice = `
        =====================================
        ${Invoice.#brand.name}
        NIF: ${Invoice.#brand.nif}

        `;
        console.log(invoice);
    }
}
