import { footer } from './components/footer.js';
import { header } from './components/header.js';
import { menu } from './components/menu.js';
import { contactPage } from './pages/contact.js';
import { homePage } from './pages/home.js';
import { projectsPage } from './pages/projects.js';

const menuOptions = [
    {
        path: '/',
        label: 'Inicio',
    },
    {
        path: '/projects',
        label: 'Proyectos',
    },
    {
        path: '/contact',
        label: 'Contacto',
    },
];

export const navigate = (url = '') => {
    console.log('URL', url);
    history.pushState({}, null, url);
    let path = url.split('/').pop();
    if (!path) path = 'home';
    console.log('Path', path);
    // console.log("navegando a " + path);

    switch (path) {
        case 'home':
            homePage();
            break;
        case 'projects':
            projectsPage();
            break;
        case 'contact':
            contactPage();
            break;
        default:
            break;
    }
};

export function main() {
    console.log('Loaded main');
    navigate(location.pathname);
    header();
    menu(menuOptions);
    footer();

    window.addEventListener('popstate', (event) => {
        console.log(location.path);
        navigate(location.pathname);
    });
}
