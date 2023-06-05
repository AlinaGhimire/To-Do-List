document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    addButton.addEventListener('click', function() {
      const task = todoInput.value;
      if (task) {
        const listItem = document.createElement('li');
        listItem.innerHTML = task;
        
        const deleteButton = document.createElement('span');
        deleteButton.innerHTML = 'X';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function() {
          listItem.remove();
        });
        
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
        
        todoInput.value = '';
      }
    });
  });
  