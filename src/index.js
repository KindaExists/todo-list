
let projs = [];
let selectedProj;

const Todo = (title, dueDate, priority, isDone, description) => {
    const switchDone = () => {
        rets.isDone = !rets.isDone
    }

    const rets = {
        title, dueDate, priority, isDone, description,
        switchDone,
    };
    return rets;
};

const Project = (title) => {
    let _todos = [];

    const addTodo = todo => {
        _todos.push(todo);
    };

    const getTodos = () => _todos;

    const _arrangePriority = () => {
        _todos.reduce((i, todo) => {
            todo.setPriority(i);
            return i + 1;
        }, 1);
    };

    const deleteTodo = (todo) => {
        _todos.splice(_todos.indexOf(todo), 1);
        _arrangePriority();
    };

    return {
        addTodo, getTodos, title, deleteTodo
    };
};


const MainController = (() => {
    /*
    function newTodo_raw(proj) {
        todoList = proj.getTodos();

        const title = prompt('Task Title');
        const dueDate = prompt('Due Date');
        const priority = todoList.length + 1;
        const isDone = (prompt('Is it done yet?') === 'true');

        const desc = prompt('Description');

        const todo = Todo(title, dueDate, priority, isDone, desc);
        proj.addTodo(todo);
        Display.renderTodos(proj);
    }

    function newProject_raw() {
        const proj = Project();
        proj.title = prompt('Project Title');
        projs.push(proj);
        Display.renderProjects();
    }


    function newTodo(proj, title, date, priority, isDone, desc) {
        todoList = proj.getTodos();
        const todo = Todo(title, date, priority, isDone, desc);

        proj.addTodo(todo);
        Display.renderTodos(proj);
    }
    */

    function newProject(title) {
        const proj = Project(title);
        selectedProj = proj;
        projs.push(proj);
        Display.renderProjects();
    }

    return {
        newProject
    };
})();


const Display = (() => {
    const projList = document.querySelector('#project_list');
    const todoList = document.querySelector('#todo_list');

    /*
    function _displayTodo(todo) {
        const todoObj = ElementBuilder.buildTodo(todo);
        todoList.appendChild(todoObj);
    }

    function renderTodos(proj) {
        todoList.textContent = '';
        proj.getTodos().forEach(todo => {
            _displayTodo(todo)
        });
    }
    */

    function _displayProjects(proj) {
        const projObj = ElementBuilder.buildProject(proj);
        projList.appendChild(projObj);
    }

    function renderProjects() {
        projList.textContent = '';
        projs.forEach(proj => {
            _displayProjects(proj)
        });
    }

    return {
        renderProjects
    };
})();

const ElementBuilder = (() => {
    function buildTodo(todo) {
        /*
        const container = document.createElement('div');

        const mainInfo = document.createElement('div');
        mainInfo.classList.add('todo');

        const isDone = document.createElement('input');
        isDone.type = 'checkbox';
        isDone.checked = todo.isDone;


        const title = document.createElement('p');
        title.classList.add('todo-title');
        title.textContent = todo.title;

        const titleInput = document.createElement('input');
        titleInput.classList.add('hidden');
        titleInput.type = 'text';
        titleInput.value = todo.title;

        title.addEventListener('dblclick', () => {
            title.classList.add('hidden');
            titleInput.classList.remove('hidden');
            titleInput.focus();
        });
        titleInput.addEventListener('change', () => {
            todo.title = titleInput.value;
            title.textContent = titleInput.value;

            title.classList.remove('hidden');
            titleInput.classList.add('hidden');
        });


        const dueDate = document.createElement('p');
        dueDate.classList.add('todo-date');
        dueDate.textContent = todo.dueDate;

        const dueDateInput = document.createElement('input');
        dueDateInput.classList.add('hidden');
        dueDateInput.type = 'date';
        dueDateInput.value = todo.dueDate;

        dueDate.addEventListener('dblclick', () => {
            dueDate.classList.add('hidden');
            dueDateInput.classList.remove('hidden');
            dueDateInput.focus();
        });
        dueDateInput.addEventListener('change', () => {
            todo.dueDate = dueDateInput.value;
            dueDate.textContent = dueDateInput.value;

            dueDate.classList.remove('hidden');
            dueDateInput.classList.add('hidden');
        });


        const priority = document.createElement('p');
        priority.classList.add('todo-priority');
        priority.textContent = todo.priority;


        const descBtn = document.createElement('button');
        descBtn.textContent = 'Expand';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', () => {
            selectedProj.deleteTodo(todo);
            Display.renderTodos(selectedProj);
        });


        const desc = document.createElement('div');
        desc.classList.add('todo-desc', 'hidden');
        const descText = document.createElement('p');
        descText.textContent = (todo.description) ? todo.description : 'No Description...';
        descText.classList.add('todo-desc-text');

        const descInput = document.createElement('textarea');
        descInput.classList.add('hidden', 'todo-edit-textarea', 'todo-desc-text');
        descInput.value = todo.description;

        descText.addEventListener('dblclick', () => {
            descText.classList.add('hidden');
            descInput.classList.remove('hidden');
            descInput.focus()
        });
        descInput.addEventListener('change', () => {
            todo.description = descInput.value;
            descText.textContent = descInput.value;

            descText.classList.remove('hidden');
            descInput.classList.add('hidden');
        });

        desc.appendChild(descText);
        desc.appendChild(descInput);


        isDone.addEventListener('change', todo.switchDone);
        descBtn.addEventListener('click', () => {
            desc.classList.toggle('hidden');
        });


        container.addEventListener('focusout', () => {
            title.classList.remove('hidden');
            titleInput.classList.add('hidden');

            dueDate.classList.remove('hidden');
            dueDateInput.classList.add('hidden');

            descText.classList.remove('hidden');
            descInput.classList.add('hidden');
        });


        mainInfo.appendChild(isDone);

        mainInfo.appendChild(title);
        mainInfo.appendChild(titleInput);

        mainInfo.appendChild(dueDate);
        mainInfo.appendChild(dueDateInput);

        mainInfo.appendChild(priority);

        mainInfo.appendChild(descBtn);
        mainInfo.appendChild(deleteBtn);


        container.appendChild(mainInfo);
        container.appendChild(desc);

        return container;
        */
    };

    function buildProject(proj) {
        const selBtn = _newElement('button', ['proj-btn', 'sel-btn'])
        selBtn.textContent = proj.title;
        selBtn.addEventListener('click', () => {
            selectedProj = proj;
            Display.renderTodos(proj)
        });

        const editIcon = _newIcon('edit');
        const editBtn = _newElement('button', ['proj-btn', 'edit-btn'], [editIcon])

        const delIcon = _newIcon('trash-alt');
        const delBtn = _newElement('button', ['proj-btn', 'del-btn'], [delIcon])

        const container = _newElement('div', ['proj'], [selBtn, editBtn, delBtn]);

        return container;
    }

    function _newElement(tag, classes, children=null) {
        const element = document.createElement(tag);
        element.classList.add(...classes);
        if(children) {
            _appendChildren(element, children);
        }

        return element;
    }


    function _newIcon(iconName) {
        const icon = document.createElement('i');
        icon.classList.add('fas', `fa-${iconName}`);

        return icon;
    }


    function _appendChildren(parent, children) {
        children.forEach(child => {
            parent.appendChild(child);
        });
    }

    return {
        buildTodo, buildProject
    };
})();


MainController.newProject('Proj 1')
// MainController.newTodo(selectedProj, 'Todo 1', '00/00/0000', 'High', true, 'Hello World!')



const todoForm = document.forms.todoForm;
const todoOpenBtn = document.querySelector('#new_todo');

const projForm = document.forms.projForm;
const projOpenBtn = document.querySelector('#new_project');

/*
const todoFormContainer = document.querySelector('#todo_form_container');
const todoForm = document.forms.todoForm;
const todoOpenBtn = document.querySelector('#new_todo');
todoOpenBtn.addEventListener('click', () => {
    todoFormContainer.classList.add('form-open');
    todoOpenBtn.classList.add('form-open');
});

todoForm.addEventListener('reset', () => {
    todoFormContainer.classList.remove('form-open');
    todoOpenBtn.classList.remove('form-open');
});

todoForm.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
        todoFormContainer.classList.remove('form-open');
        todoOpenBtn.classList.remove('form-open');
        todoForm.reset();
    }
});

todoForm.addEventListener('submit', () => {
    todoFormContainer.classList.remove('form-open');
    todoOpenBtn.classList.remove('form-open');

    MainController.newTodo(selectedProj,
                           todoForm['title'].value,
                           todoForm['date'].value,
                           todoForm['done'].checked,
                           todoForm['desc'].value,
                           );

    todoForm.reset();
});



const projFormContainer = document.querySelector('#proj_form_container');
const projForm = document.forms.projForm;
const projOpenBtn = document.querySelector('#new_project');
projOpenBtn.addEventListener('click', () => {
    projFormContainer.classList.add('form-open');
    projOpenBtn.classList.add('form-open');
});

projForm.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        projFormContainer.classList.remove('form-open');
        projOpenBtn.classList.remove('form-open');
        projForm.reset();
    }
});

projForm.addEventListener('submit', () => {
    projFormContainer.classList.remove('form-open');
    projOpenBtn.classList.remove('form-open');

    MainController.newProject(projForm['title'].value);

    projForm.reset();
});
*/