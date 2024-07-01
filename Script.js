document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTodoItem(todoInput.value);
        todoInput.value = '';
    });

    function addTodoItem(task) {
        if (task.trim() === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(li);
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});
