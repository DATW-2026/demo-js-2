export let theme = 'light';

const handleChange = (event) => {
    const element = event.target;
    theme = element.checked ? 'dark' : 'light';
    console.log(theme);
};

const handleMenu = (event) => {
    event.preventDefault();
    console.log(event.target.localName);
    const menuDialogElement = document.querySelector('#menu-dialog');

    if (event.target.localName === 'button') {
        menuDialogElement.close();
    } else {
        menuDialogElement.showModal();
    }
};

export function main() {
    console.log('Main loaded');

    const toggleElement = document.querySelector('#theme-toggle');
    toggleElement.addEventListener('change', handleChange);

    const menuIconElement = document.querySelector('#menu-icon');
    menuIconElement.addEventListener('click', handleMenu);

    const closeDialogElement = document.querySelector('#menu-dialog button');
    closeDialogElement.addEventListener('click', handleMenu);
}
