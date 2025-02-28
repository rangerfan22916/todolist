//Init(Create) an empty array element called tasks
let tasks = [];

//Add an ON CLICK event listener to the "add task button" that calls a function
document.getElementById("addTaskButton").addEventListener("click", function () {
  //get the value of the input box and store it in a variable called taskInput
  let taskInput = document.getElementById("taskInput").value;

  //Check if taskInput has value or something in it
  if (taskInput) {
    tasks.push(taskInput);

    //clear the input field
    document.getElementById("taskInput").value = "";

    // call the function to update the task list displayt
    displayTasks();
  }
});

//function to display tasks in the list
function displayTasks() {
  //select the unordered list (tasklist) in the html
  let taskList = document.getElementById("taskList");

  //clear the existing task list before updating it
  taskList.innerHTML = "";

  //loops through each task in the array and create a list item

  tasks.forEach((task, index) => {
    //create a new <li> element for each task
    let li = document.createElement("li");

    //Add css classes for styling
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    li.innerHTML = `${task} <button class='btn btn-success btn-sm' onclick='removeTask(${index})'> √ </button>`;

    //append the new tasks to the task list
    taskList.appendChild(li);
  });
}

//Function to remove a task from thee list when the check button is clicked

function removeTask(index) {
  tasks.splice(index, 1);

  displayTasks();
}

//Event listener for the "Clear all tasks" button
document.getElementById("clearTaskBtn").addEventListener("click", function () {
  //empty thr tasks array to remove all tasks
  tasks = [];
  //call the function to update the tasks list display
  displayTasks();
});
