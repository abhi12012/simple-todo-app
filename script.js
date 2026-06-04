let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

addBtn.onclick = function () {
    
    let task = taskInput.value;

    if (task === "") {
        alert("Task likho pehle!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;


    // ❌ Delete Button
    let delBtn = document.createElement("button");
    delBtn.textContent = "❌";

    delBtn.style.marginLeft = "10px";
    delBtn.style.background = "red";
    delBtn.style.color = "white";
    delBtn.style.border = "none";
    delBtn.style.cursor = "pointer";

    delBtn.onclick = function () {
        li.remove();
    };


    // ✏️ Edit Button
    let editBtn = document.createElement("button");
    editBtn.textContent = "✏️";

    editBtn.style.marginLeft = "5px";
    editBtn.style.background = "blue";
    editBtn.style.color = "white";
    editBtn.style.border = "none";
    editBtn.style.cursor = "pointer";

    editBtn.onclick = function () {
        let newTask = prompt("Task edit karo:", li.firstChild.textContent);

        if (newTask !== null && newTask !== "") {
            li.firstChild.textContent = newTask;
        }
    };

    li.appendChild(delBtn);
    li.appendChild(editBtn);

    


    taskList.appendChild(li);

    taskInput.value = "";
};