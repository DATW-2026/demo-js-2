// Objects

//JSON (JavaScript Object Notation)
const obj = {
    name: 'Pepe',
    age: 22,
    address: {
        coords: {
            lat: 'x',
        },
    },
};

console.log(obj);

// Práctica "regular" -> Mejor práctica es seguir un schema predeterminado
obj.job = 'Developer';
console.log(obj);

// Borra la propiedad age, suele considerarse mala práctica
delete obj.age;
console.log(obj);
console.log(obj.x); // undefined -> la propiedad no existe

// Notación de puntos
console.log(obj.address.coords.lat); // x

// Notación de corchetes
const prop = 'name';
console.log(obj[prop]); // name -> primero evalúa la expresión (resuelve la variable prop) y accede con el resultado a ese valor en el objeto
console.log(obj[prop ? prop : 'job']); // podemos utilizar expresiones complejas dentro del corchete

///

// Bucle for in -> Bucle para objetos

const user = {
    name: 'Pepe',
    age: 22,
    job: 'Developer',
};

for (const key in user) {
    const value = user[key];
    console.log(`Clave ${key} valor ${value}`);
}

console.log(Object.keys(user)); // Devuelve un array con las propiedades del objeto
console.log(Object.values(user)); // Devuelve array con los valores del objeto
console.log(Object.entries(user)); // Devuelve arrays de arrays de dos elementos (tuplas) del objeto [[prop1, value1], [prop2, value2], [prop3, value3]]
