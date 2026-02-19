export const sample = () => {
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
