document.addEventListener('DOMContentLoaded', function() {
    // Display today's date
    const dateDisplay = document.getElementById('dateDisplay');
    const today = new Date();
    dateDisplay.textContent = today.toLocaleDateString();

    // Existing code for adding tasks
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');

        // Create checkbox for completion
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onchange = function() {
            if (checkbox.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        };

        li.appendChild(checkbox);

        // Task text
        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;
        li.appendChild(taskText);

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'; // FontAwesome trash icon
        deleteBtn.className = 'delete';
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    }
}
