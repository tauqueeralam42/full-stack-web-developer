const { log } = require("console");
const fs = require("fs"); // Import the file system module
const filePath = "./tasks.json"; // Define the path to the tasks file

// Function to load tasks from the file
const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath); // Read the file
    const dataJSON = dataBuffer.toString(); // Convert buffer to string  
    return JSON.parse(dataJSON); // Parse JSON string to object
  } catch (error) {
    return []; // Return an empty array if there's an error
  }
};

// Function to save tasks to the file
const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks); // Convert object to JSON string
  fs.writeFileSync(filePath, dataJSON); // Write JSON string to file
};

// Function to add a new task
const addTask = (task) => {
  const tasks = loadTasks(); // Load existing tasks
  tasks.push({ task }); // Add new task to the array
  saveTasks(tasks); // Save updated tasks array to file
  console.log("Task added ", task); // Log the added task
};

// Function to list all tasks
const listTasks = () => {
  const tasks = loadTasks(); // Load existing tasks
  tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`)); // Log each task with its index
};

function removeTask(index){
  const tasks = loadTasks(); // Load existing tasks
  tasks.splice(index-1,1); // Remove the task at the specified index
  saveTasks(tasks); // Save updated tasks array to file
  console.log("Task removed at index ", index); // Log the removed task
}

// Get command and argument from command line arguments
const command = process.argv[2];
const argument = process.argv[3];

// Execute the appropriate function based on the command
if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
}else if(command == "remove"){
  removeTask(parseInt(argument));
}else {
  console.log("Command not found !");
}

/*
Explanation:
1. The code imports the required modules: `console` for logging and `fs` for file system operations.
2. It defines the path to the tasks file as `filePath`.
3. The `loadTasks` function reads the tasks from the file and returns them as an array. If there's an error (e.g., file not found), it returns an empty array.
4. The `saveTasks` function saves the tasks array to the file in JSON format.
5. The `addTask` function adds a new task to the tasks array and saves it to the file.
6. The `listTasks` function logs all the tasks to the console.
7. The code gets the command and argument from the command line arguments.
8. Based on the command, it either adds a new task or lists all tasks. If the command is not recognized, it logs "Command not found !".
*/
