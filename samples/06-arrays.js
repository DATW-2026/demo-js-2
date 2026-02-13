const user = ['Pepe', 22, 'Developer'];
console.log(user); // [ 'Pepe', 22, 'Developer' ]
console.log(user[0]); // 'Pepe'

// Excentricidad -> array-objeto
user.id = 1; // añado una propiedad:valor al array
console.log(user); // [ 'Pepe', 22, 'Developer', id: 1 ]

const userContacts = ['Luis', 'Ramón', 'Rosa'];

// for
console.log('for ------------------------');
for (let i = 0; i < userContacts.length; i++) {
    const item = userContacts[i];
    console.log(item);
}

// for in -> Bucle ideal para objetos
console.log('for in ---------------------');
for (const i in userContacts) {
    const item = userContacts[i];
    console.log(item);
}

// for of -> Bucle idea para arrays cuando el índice no me importa
console.log('for of ---------------------');
for (const item of userContacts) {
    console.log(item);
}

// Propiedades o métodos de arrays

// Mutables -> Modifican el array original
userContacts.push('Clara'); // Añade un elemento al final del array
userContacts.pop(); // Elimina un elemento del final de array
userContacts.unshift('José'); // Añade un elemento al principio del array
userContacts.shift(); // Elimina un elemento al principio del array
userContacts.sort(); // Ordena un array

userContacts.splice();

// Inmutables -> No modifican el array original
const newArray = userContacts.concat('Raúl', 'Juan'); // Concatena elementos a un array dando como resultado un nuevo array (transforma los argumentos en array)
console.log('.concat:', newArray);
const newArray2 = userContacts.toSorted();
console.log('.toSorted', newArray2);

const arraySlice = userContacts.slice(); // devuelve una "rebanada" del array en un nuevo array
const arrayToSplice = userContacts.toSpliced(); // Splice pero en un nuevo array

// HOF
// .forEach -> Método que itera un array y en cada iteración ejecuta la función callback y le pasa al callback como argumento el parámetro
userContacts.forEach((item) => console.log(item));

const numbers = [1, 6, 5, 7, 8];

const doubles = numbers.map((item) => item * 2); // Llama a un callback en cada elemento del array y devuelve un array que contiene los resultados
console.log('map:', doubles);

const f = numbers.filter((item) => item > 5); // devuelve los items que cumple el filtro (callback)
console.log('filter:', f);

const r = numbers.find((item) => item > 5); // devuelve el primer elemento que cumpla el filtro (callback)
console.log('find:', r);

const fi = numbers.findIndex((item) => item > 5); // devuelve el índice del elemento que cumpla el filtro (callback)
console.log('findIndex:', fi);

const num = numbers.reduce((prev, current) => prev + current); // llama a la función callback en cada uno de los items del array y acumula el resultado y lo usa de argumento para la siguiente vuelta del bucle
console.log('reduce:', num);

const arr = [1, 2, 3, [4, 5]];
const fl = arr.flat(); // devuelve un nuevo array con los sub-arrays concatenados al array padre (solo un nivel)
console.log(fl); // [ 1, 2, 3, 4, 5 ]
