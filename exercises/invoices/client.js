export class Client {
    #name;
    #address;
    #phone;
    #nif;

    constructor(name, address, phone, nif) {
        this.#name = name;
        this.#address = address;
        this.#phone = phone;
        this.#nif = nif;
    }
}
