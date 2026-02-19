import { PROJECTS } from '../data/data-projects.js';

export const projectsPage = () => {
    console.log('Projects loaded');
    const projects = PROJECTS;

    const setTemplate = () => `<section id="projects">
      <h2>Preguntas frecuentes</h2>

      ${projects
          .map(
              (p) =>
                  `<details>
                    <summary>${p.name}</summary>
                    <p>ID: ${p.id}</p>
                    <p><input type="checkbox" ${p.isComplete && 'checked'}>Completado</p>
                    <p>${p.description}</p>
                    <p>${p.author}</p>
                </details>`,
          )
          .join('')}

    </section>`;

    document.querySelector('main').innerHTML = setTemplate();
};
