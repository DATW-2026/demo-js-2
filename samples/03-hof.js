// Hight Order Function

// Recibe como parámetro una función
// o retorna una función

const x = 0;
const y = 0;

const calculate = function (fn, a = 0, b = 0) {
    if (typeof fn !== 'function') {
        throw new Error('Invalid argument: not function');
    }
    const r = fn(a, b);
    console.log(r);
};

const add = (x, y) => x + y;

calculate(add, x, y); // add es un callback, la función que le llega a una HOF como parámetro

calculate((x, y) => x + y, x, y); // pasamos una función anónima como argumento a calculate. calculate ya le asigna "fn" como nombre
