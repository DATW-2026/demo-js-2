const greeting = () => {
    const str = 'Hola Mundo';
    console.log(str);
};

const wait = (secondsLimit) => {
    const SECOND_INSTRUCTION = 3_000_000_000 / 2; // 1.5Ghz
    const limit = secondsLimit * SECOND_INSTRUCTION;

    setTimeout(() => {
        let i = 0;
        while (i < limit) {
            i++;
        }
    });
};

let seconds = 4;
const start = Date.now();
console.log('Inicio');
wait(seconds);
greeting();
console.log('Por fin', (Date.now() - start) * 0.001, 'segundos después');
