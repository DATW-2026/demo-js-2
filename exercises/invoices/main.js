import { Invoice } from './invoice.js';
import { Client } from './client.js';

const client01 = new Client(
    'Pepe',
    'Calle Invent. Madrid',
    '+34 012 34 98 53',
    564324684654,
);

const items = [
    {
        description: 'lechugas',
        price: 50,
        quantity: 2,
    },
    {
        description: 'patatas',
        price: 30,
        quantity: 10,
    },
    {
        description: 'tomates',
        price: 25,
        quantity: 5,
    },
];

const invoice01 = new Invoice(
    'PepeSA',
    'Calle Anabel Segura, Madrid',
    '+34 000 00 00 00',
    client01,
    items,
);

console.log(invoice01);
