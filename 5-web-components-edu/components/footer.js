export const footer = () => {
    const selector = 'app-footer';

    const setTemplate = () => `
    <footer><h2>Hola desde el componente app-footer</h2></footer>
    `;

    document.querySelector(selector).outerHTML = setTemplate();
};
