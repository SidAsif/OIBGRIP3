const inputBox = document.querySelector(".inputfield input");
const addbtn = document.querySelector(".inputfield button");
const todoList = document.querySelector(".list");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if (userData.trim() != 0) {
        addbtn.classList.add("active");
    } else {
        addbtn.classList.remove("active");
    }
}
showTasks();

addbtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorageData = localStorage.getItem("New Todo");
    if (getLocalStorageData == null) {
        listArray = [];
    }
    else {
        listArray = JSON.parse(getLocalStorageData);
    }
    listArray.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
}

function showTasks() {
    let getLocalStorageData = localStorage.getItem("New Todo");
    if (getLocalStorageData == null) {
        listArray = [];
    }
    else {
        listArray = JSON.parse(getLocalStorageData);
    }
    let newliTag = ' ';
    listArray.forEach((element, index) => {
        newliTag += `<li> ${element} <span onclick="deleteTask(${index})";> <i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newliTag;
    inputBox.value = " ";
}

function deleteTask(index) {
    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
}

deleteAllBtn.onclick = () => {
    listArray = [];
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
}