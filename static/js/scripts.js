// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);

// Functions
function addTodo(event) {
  event.preventDefault();
  if (todoInput.value.trim() === '') {
    alert("Please enter a task");
    return;
  }

  const todoTitle = todoInput.value;

  fetch('/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: todoTitle })
  })
  .then(response => response.json())
  .then(task => {
    createTodoElement(task);
    todoInput.value = '';
  });
}

function deleteCheck(event) {
  const item = event.target;
  if (item.classList.contains("delete-btn")) {
    const todo = item.parentElement;
    const taskId = todo.getAttribute('data-id');

    fetch(`/delete/${taskId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Task deleted') {
        todo.classList.add("fall");
        todo.addEventListener("transitionend", () => {
          todo.remove();
        });
      } else {
        alert(data.message);
      }
    });
  }

  if (item.classList.contains("complete-btn")) {
    const todo = item.parentElement;
    const taskId = todo.getAttribute('data-id');

    fetch(`/update/${taskId}`, {
      method: 'PUT'
    })
    .then(response => response.json())
    .then(task => {
      todo.classList.toggle('completed', task.completed);
    });
  }
}

function filterTodo() {
  const todos = todoList.childNodes;
  todos.forEach(todo => {
    if (todo.style != undefined) {
      switch (filterOption.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains('completed')) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains('completed')) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
      }
    }
  });
}

function getTodos() {
  fetch('/tasks')
    .then(response => response.json())
    .then(tasks => {
      tasks.forEach(task => {
        createTodoElement(task);
      });
    });
}

function createTodoElement(task) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  todoDiv.setAttribute('data-id', task.id);

  const newTodo = document.createElement("li");
  newTodo.innerText = task.title;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);

  todoList.appendChild(todoDiv);

  if (task.completed) {
    todoDiv.classList.add('completed');
  }
}
