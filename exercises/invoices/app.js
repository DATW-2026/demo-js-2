import { Company } from './company.js';
import { Invoice } from './Invoice.js';

const myCompany = new Company('ACME', 'C/Patata', '658-95-95-95', '78945612H');

const invoice01 = new Invoice(
    myCompany,
    new Company('PepeSL', 'C/Pepito', '856-95-56-56', '412598354G'),
);

invoice01.printInvoice();
