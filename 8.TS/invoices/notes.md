# Entidades

- Invoice
    - #brand : Company
    - #client: Company
    - #items: Item[]
    - #total: number
    - #ivaType: number
    - #payment: string
    - #calculateTotal: function: number
    - showTotal: function: void
    - showInvoice: function: void

- Company
    - #name: string
    - #address: string
    - #phone: string
    - #nif: string

- Item
    - product: Product
    - amount: number

- Product
    - description: string
    - price: number
