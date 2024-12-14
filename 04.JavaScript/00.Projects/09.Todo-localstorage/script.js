document.addEventListener("DOMContentLoaded", () => {
  // Get references to the input field, add button, and the list container
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  // Retrieve tasks from localStorage or initialize an empty array if none exist
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Render each task from the retrieved tasks
  tasks.forEach((task) => renderTask(task));

  // Add event listener to the add button to handle adding new tasks
  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return; // Do nothing if the input is empty

    // Create a new task object
    const newTask = {
      id: Date.now(), // Unique ID based on current timestamp
      text: taskText,
      completed: false,
    };
    tasks.push(newTask); // Add the new task to the tasks array
    saveTasks(); // Save the updated tasks array to localStorage
    renderTask(newTask); // Render the new task in the UI
    todoInput.value = ""; // Clear the input field
    console.log(tasks); // Log the tasks array to the console
  });

  // Function to render a task in the UI
  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id); // Set a data attribute with the task ID
    if (task.completed) li.classList.add("completed"); // Add 'completed' class if the task is completed
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;

    // Add event listener to handle task completion toggle
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return; // Ignore clicks on the delete button
      task.completed = !task.completed; // Toggle the completed status
      li.classList.toggle("completed"); // Toggle the 'completed' class
      saveTasks(); // Save the updated tasks array to localStorage
    });

    // Add event listener to handle task deletion
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent the click from bubbling up to the li
      tasks = tasks.filter((t) => t.id !== task.id); // Remove the task from the tasks array
      li.remove(); // Remove the task from the UI
      saveTasks(); // Save the updated tasks array to localStorage
    });

    todoList.appendChild(li); // Add the task to the list container
  }

  // Function to save the tasks array to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
