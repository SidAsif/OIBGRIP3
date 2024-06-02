const inputBox = document.querySelector(".inputfield input");
const addbtn = document.querySelector(".inputfield button");
const todoList = document.querySelector(".list");
const deleteAllBtn = document.querySelector(".footer button");

// Handle input keyup event to toggle button active state
inputBox.onkeyup = () => {
    let userData = inputBox.value.trim();
    if (userData != 0) {
        addbtn.classList.add("active");
    } else {
        addbtn.classList.remove("active");
    }
}

// Show tasks from localStorage
showTasks();

// Handle add button click event
addbtn.onclick = () => {
    let userData = inputBox.value.trim();
    if (userData === "") {
        alert("Please enter a task.");
        return;
    }

    let getLocalStorageData = localStorage.getItem("New Todo");
    let listArray = getLocalStorageData ? JSON.parse(getLocalStorageData) : [];
    listArray.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
    inputBox.value = ""; // Clear the input box
    addbtn.classList.remove("active"); // Deactivate the button
}

// Function to show tasks
function showTasks() {
    let getLocalStorageData = localStorage.getItem("New Todo");
    let listArray = getLocalStorageData ? JSON.parse(getLocalStorageData) : [];
    let newliTag = '';
    listArray.forEach((element, index) => {
        newliTag += `<li> ${element} <span onclick="deleteTask(${index})";> <i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newliTag;
}

// Function to delete a task
function deleteTask(index) {
    let getLocalStorageData = localStorage.getItem("New Todo");
    let listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
}

// Handle delete all button click event
deleteAllBtn.onclick = () => {
    localStorage.setItem("New Todo", JSON.stringify([]));
    showTasks();
}
