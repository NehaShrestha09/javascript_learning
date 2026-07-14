const input = document.getElementById("input-task");
const button = document.getElementById("btn");
const list = document.getElementById("ul-list");

let tasks = [];
try {
    const stored = JSON.parse(localStorage.getItem("tasks"));
    if(Array.isArray(stored))
        tasks = stored;
} catch (e) {
    tasks = [];
}

function saveTask(){
    console.log("Saved task to local storage", tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTask(){
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
        <span class = "task-completed ${task.completed ? "completed" : ""}">${task.text}</span>
        <div>
            <button class = "complete-btn" onclick = "toggleComplete(${index})">✔</button>
            <button class = "delete-btn" onclick="deleteTask(${index})">✖</button>
        </div>
        `;

        list.appendChild(li);

    });
}

function addTask(){
    const text = input.value.trim();
    if(text === "") return;

    tasks.push({text, completed: false });
    input.value = "";
    saveTask();
    renderTask();
}

function deleteTask(index){
    tasks.splice(index, 1);
    saveTask();
    renderTask();
}

function toggleComplete(index){
    tasks[index].completed = !tasks[index].completed;
    saveTask();
    renderTask();
}

button.addEventListener("click", addTask);
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

renderTask();