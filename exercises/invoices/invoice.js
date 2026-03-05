export class Invoice {
    #name;
    #address;
    #phone;
    #nif;
    #client;
    #items;
    #total;
    #iva;
    #payment;

    constructor(name, address, phone, nif, client, items = [], iva, payment) {
        this.#name = name;
        this.#address = address;
        this.#phone = phone;
        this.#nif = nif;
        this.#client = client;
        this.#items = items;
        this.#total = 0;
        this.#iva = iva;
        this.#payment = payment;
    }

    totalValue() {
        this.#items.map;
    }
}
