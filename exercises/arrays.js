// Length

const length = (arr) => {
    let length = 0;
    for (const item of arr) {
        length++;
    }
    return length;
};

console.log(length([])); // 0
console.log(length([1, 2, 3])); // 3

// Push

function push(arr, ...items) {
    for (const item of items) {
        arr[length(arr)] = item;
    }

    return length(arr);
}

let array = [];
console.log(push(array, 'Pepe') === 1);
array = [];
console.log(push(array, 'Pepe', 'Juan') === 2);
array = [];
console.log(push(array, ['Pepe', '', '']) === 1);
array = [];
console.log(push(array, ...['Pepe', 'A', 'B']) === 3);
