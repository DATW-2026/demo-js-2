export class Company {
    // Métodos estáticos (no necesitamos)

    // Propiedades
    #name;
    #address;
    #phone;
    #nif;

    // setters & getters (solo necesitamos getters)
    get name() {
        return this.#name;
    }
    get nif() {
        return this.#nif;
    }
    get address() {
        return this.#address;
    }
    get phone() {
        return this.#phone;
    }

    // Constructor
    constructor(name, nif, address = '', phone = '') {
        this.#name = name;
        this.#address = address;
        this.#phone = phone;
        this.#nif = nif;
    }

    // Métodos
    returnInfo() {
        return {
            name: this.#name,
            phone: this.#phone,
            data: `${this.#address} - ${this.#nif}`,
        };
    }
}
