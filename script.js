const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to create a new task item
function createTaskElement(taskText) {
  const todoItem = document.createElement('li');
  todoItem.classList.add('todo-item');

  // Task description with checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskLabel = document.createElement('label');
  taskLabel.textContent = taskText;

  todoItem.appendChild(checkbox);
  todoItem.appendChild(taskLabel);

  // Actions: Edit and Delete buttons
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', function() {
    editTask(taskLabel);
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    todoItem.remove();
  });

  todoItem.appendChild(editButton);
  todoItem.appendChild(deleteButton);

  todoList.appendChild(todoItem);
}

// Function to edit a task
function editTask(taskLabel) {
  const currentTaskText = taskLabel.textContent.trim();
  const updatedTask = prompt('Edit task:', currentTaskText);
  if (updatedTask !== null && updatedTask.trim() !== '') {
    taskLabel.textContent = updatedTask;
  }
}

// Event listener for form submission
todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  
  if (todoText !== '') {
    createTaskElement(todoText);
    todoInput.value = '';
  }
});

// Event delegation for handling task completion
todoList.addEventListener('change', function(event) {
  if (event.target.type === 'checkbox') {
    const checkbox = event.target;
    const todoItem = checkbox.parentElement;
    if (checkbox.checked) {
      todoItem.classList.add('completed');
    } else {
      todoItem.classList.remove('completed');
    }
  }
});