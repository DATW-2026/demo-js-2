export const header = () => {
    const selector = 'app-header';

    const setTemplate = () =>
        `<header>
            <h2>Hola desde el componente app-header</h2>
        </header>`;
    document.querySelector(selector).outerHTML = setTemplate();
};
