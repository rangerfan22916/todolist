let tasks = [];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");

document.getElementById("addTaskButton").addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") addTask();
});
document.getElementById("clearTaskBtn").addEventListener("click", clearTasks);

function addTask() {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push({ text: task, completed: false });
    taskInput.value = "";
    displayTasks();
  }
}

function displayTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `${task.text} 
      <div>
        <button class='btn btn-success btn-sm' onclick='toggleTask(${index})'>✔</button>
        <button class='btn btn-danger btn-sm' onclick='removeTask(${index})'>🗑</button>
      </div>`;

    taskList.appendChild(li);
  });
  updateTaskCounter();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

function removeTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function clearTasks() {
  tasks = [];
  displayTasks();
}

function updateTaskCounter() {
  taskCounter.textContent = `Total Tasks: ${tasks.length}`;
}

displayTasks();
