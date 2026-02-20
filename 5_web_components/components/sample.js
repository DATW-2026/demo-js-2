export const sampleOld = () => {
    const selector = 'app-sample';

    const setTemplate = () => {
        const text = 'Sample';
        return `
            <div class="container" title="sample>
                <p lang="es">${text}</p>
            </div>
        `;
    };

    // innerHTML sustituye solo el contenido, manteniendo la custom tag <app-sample>
    // document.querySelector(selector).innerHTML = setTemplate();
    // outerHTML sustituye la custom tag <app-sample>
    if (document.querySelector(selector)) {
        document.querySelector(selector).outerHTML = setTemplate();
    }
};

export const sample = () => {
    const selector = 'app-sample';

    const text = 'Sample';
    const template = /*html*/ `
        <div class="container" title="sample">
            <p lang="es">${text}</p>
            <button>Borrar</button>
        </div>
    `;

    const createElement = () => {
        const parentElement = document.createElement('parent');
        parentElement.innerHTML = template;
        const element = parentElement.firstElementChild;
        return element;
    };

    const element = createElement();

    element.querySelector('button').addEventListener('click', (event) => {
        event.stopPropagation();
        console.log('Borrando');
    });

    if (document.querySelector(selector)) {
        // document.querySelector(selector).appendChild(element); -> (innerHTML)
        document.querySelector(selector).replaceWith(element);
    }
};
