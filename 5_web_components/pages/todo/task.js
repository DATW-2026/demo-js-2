export const task = () => {
    const selector = 'app-task';

    const setTemplate = (task) => `<li>
        <article>
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <footer>
                <address>${task.owner}</address>
            </footer>
        </article>
    </li>`;

    document.querySelectorAll(selector).forEach((taskElement) => {
        // console.log(taskElement.dataset);
        let task = taskElement.dataset;
        task = {
            ...task,
            isCompleted: task.isCompleted === 'true' ? true : false,
        };
        taskElement.outerHTML = setTemplate(task);
    });
};
