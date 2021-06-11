const todoInput = document.querySelector('input[name="add"]');
const todos_ul = document.querySelector('.todos');
const search = document.querySelector('.search input');

todoInput.addEventListener('keyup', addTodo);
todos_ul.addEventListener('click', removeTodo);
search.addEventListener('keyup', filterTodos);

let todos = [];

function addTodo(e) {
    e.preventDefault();
    if (e.key === 'Enter' && e.target.value !== '') {
        appendlIToUl(e.target.value);
        todoInput.value = '';
    }
}

function getTodos() {
    todos_ul = getData('todos') ? getData('todos') : [];
    todos_ul.forEach(todo => {
        appendlIToUl(todo);
    });
}

function appendlIToUl(todo) {
    todos_ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`
}

function removeTodo(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
}

function myFilter(term) {
    Array.from(todos_ul.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term.toLowerCase()))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(todos_ul.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term.toLowerCase()))
        .forEach(todo => todo.classList.remove('filtered'));
}

function filterTodos() {
    // console.log(search);
    const term = search.value.trim();
    myFilter(term);
}
