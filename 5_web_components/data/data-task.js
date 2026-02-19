const TASK = {
    id: crypto.randomUUID(),
    title: '',
    owner: '',
    isComplete: false,
    description: '',
};

const TASKS = [
    {
        id: crypto.randomUUID(),
        title: 'Preparar presentación',
        owner: 'Ana',
        isComplete: false,
        description: 'Crear las diapositivas para la reunión del viernes.',
    },
    {
        id: crypto.randomUUID(),
        title: 'Revisar código',
        owner: 'Luis',
        isComplete: true,
        description: 'Revisar el pull request #42 en GitHub.',
    },
    {
        id: crypto.randomUUID(),
        title: 'Enviar informe',
        owner: 'Marta',
        isComplete: false,
        description: 'Enviar el informe mensual al cliente.',
    },
];
export default TASKS;
