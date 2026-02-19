import TASKS from '../../data/data-task.js';
import { task } from './task.js';

export const todoPage = () => {
    console.log('To do loaded');
    const tasks = TASKS;

    const setTemplate = () => `
        <section id="todo" class="todo">
            <h2>Tareas</h2>
            <ul>
            ${tasks
                .map((task) => {
                    return `<app-task
                        data-id="${task.id}"
                        data-title="${task.title}"
                        data-owner="${task.owner}"
                        data-is-complete="${task.isComplete}"
                        data-description="${task.description}"
                    ></app-task>`;
                })
                .join('')}
            </ul>
        </section>
        `;

    document.querySelector('main').innerHTML = setTemplate();
    task();
};
