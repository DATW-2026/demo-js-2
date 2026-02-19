import { footer } from './components/footer.js';
import { header } from './components/header.js';
import { menu } from './components/menu.js';
import { contactPage } from './pages/contact.js';
import { homePage } from './pages/home.js';
import { projectsPage } from './pages/projects.js';
import { todoPage } from './pages/todo/todo.js';

const routes = [
    {
        path: '/',
        label: 'Inicio',
        component: homePage,
    },
    {
        path: '/projects',
        label: 'Proyectos',
        component: projectsPage,
    },
    {
        path: '/todo',
        label: 'Tareas',
        component: todoPage,
    },
    {
        path: '/contact',
        label: 'Contacto',
        component: contactPage,
    },
];

export const navigate = (url = '') => {
    console.log('URL', url);

    if (location.href === url) {
        return;
    }

    history.pushState({}, null, url);
    let path = url.split('/').pop();

    const selectedOption = routes.find((o) => o.path === '/' + path);

    if (selectedOption) {
        selectedOption.component();
    }
};

export function main() {
    console.log('Loaded main');
    navigate(location.pathname);
    header();
    menu(routes);
    footer();

    window.addEventListener('popstate', (event) => {
        console.log(location.path);
        navigate(location.pathname);
    });
}
