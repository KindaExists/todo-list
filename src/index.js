
let projs = [];

const Todo = (title, dueDate, priority, isDone, description) => {
    const setPriority = (priority) => {
        rets.priority = priority
    }

    const switchDone = () => {
        rets.isDone = !rets.isDone
    }

    const rets = {
        title, dueDate, priority, isDone, description,
        setPriority,
        switchDone,
    };
    return rets;
};

const Project = () => {
    let _todos = [];

    const addTodo = todo => {
        _todos.push(todo);
    };

    const getTodos = () => _todos;

    return {
        addTodo, getTodos
    };
};

const Display = (() => {
    const projList = document.querySelector('#project_list');
    const todoList = document.querySelector('#todos_list');

    function _displayTodo(todo) {
        const todoObj = ElementBuilder.buildTodo(todo);
        todoList.appendChild(todoObj);
    }

    function renderProject(proj) {
        todoList.textContent = '';
        proj.getTodos().forEach(todo => {
            _displayTodo(todo)
        });
    }

    function _displayProjects(proj) {
        const projObj = ElementBuilder.buildProject(proj);
        projList.appendChild(projObj);
    }

    function renderProjectList() {
        projList.textContent = '';
        projs.forEach(proj => {
            _displayProjects(proj)
        });
    }

    return {
        renderProject, renderProjectList
    };
})();

const ElementBuilder = (() => {
    function buildTodo(todo) {
        const container = document.createElement('div');
        container.classList.add('todo');

        const title = document.createElement('p');
        title.textContent = todo.title;

        const dueDate = document.createElement('p');
        dueDate.textContent = todo.dueDate;

        const priority = document.createElement('p');
        priority.textContent = todo.priority;

        const isDone = document.createElement('input');
        isDone.type = 'checkbox';
        isDone.value = todo.isDone;

        const descBtn = document.createElement('button');
        descBtn.textContent = 'Expand';

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        const desc = document.createElement('div');
        desc.classList.add('todo-desc', 'hidden');
        const descText = document.createElement('p');
        descText.textContent = todo.description;
        desc.appendChild(descText);


        descBtn.addEventListener('click', () => {
            desc.classList.toggle('hidden');
        });

        container.appendChild(title);
        container.appendChild(dueDate);
        container.appendChild(priority);
        container.appendChild(isDone);
        container.appendChild(descBtn);
        container.appendChild(editBtn);
        container.appendChild(deleteBtn);

        container.appendChild(desc);

        return container;
    };

    function buildProject(proj) {
        const container = document.createElement('div');
        container.classList.add('proj');

        const projBtn = document.createElement('button');
        projBtn.addEventListener('click', Display.renderProject(proj));

        container.appendChild(projBtn)

        return container;
    }

    return {
        buildTodo, buildProject
    };
})();


todo1 = Todo('a', 'a', 1, false, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.')
todo2 = Todo('b', 'b', 2, true, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.')
todo3 = Todo('c', 'c', 3, false, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.')
proj1 = Project()
proj1.addTodo(todo1)
proj1.addTodo(todo2)
proj1.addTodo(todo3)
projs.push(proj1)

todo4 = Todo('d', 'd', 4, true, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.')
todo5 = Todo('e', 'e', 5, true, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.')
todo6 = Todo('f', 'f', 6, false, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.')
proj2 = Project()
proj2.addTodo(todo4)
proj2.addTodo(todo5)
proj2.addTodo(todo6)
projs.push(proj2)

Display.renderProject(projs[0]);