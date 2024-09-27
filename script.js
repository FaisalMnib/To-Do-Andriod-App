// Simple To-Do App functionality

// Function to add a task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    // Check if the input is empty
    if (taskValue === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskValue;

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        li.remove();
    };

    // Append the delete button to the list item
    li.appendChild(deleteBtn);

    // Append the list item to the task list
    document.getElementById('taskList').appendChild(li);

    // Clear the input
    taskInput.value = '';
}

// Add event listener to the button
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Add event listener for Enter key
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
