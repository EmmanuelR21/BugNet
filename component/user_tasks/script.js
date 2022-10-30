let logedinusername = localStorage.getItem("logedinusername");
let logedinpassword = localStorage.getItem("logedinpassword");
let logedin = localStorage.getItem("logedin");
if (logedin === "false") {
    location.replace("../../index.html")
}

let logOutButton = document.getElementById("log-out-button")
logOutButton.addEventListener("click", () => {
    console.log(true)
    localStorage.setItem("logedinusername", null);
    localStorage.setItem("logedinpassword", null);
    localStorage.setItem("logedin", false);
    location.replace("../../index.html")
})
let closeAddTaskForm = document.getElementById("close-add-task-form")
closeAddTaskForm.addEventListener("click", () => {
    newTaskFormBackground.style.display = "none"
    newTaskFormHolder.style.display = "none"
})
let getNewTaskForm = document.getElementById("get-add-task-form")
let newTaskFormBackground = document.getElementById("new-form-background")
let newTaskFormHolder = document.getElementById("new-task-form-holder")
let newTaskForm = document.getElementById("new-task-form")

let bugTaskTable = document.getElementById("bug-task")
getNewTaskForm.addEventListener('click', (e) => {
    newTaskFormBackground.style.display = "block"
    newTaskFormHolder.style.display = "block"
    console.log('ji')
})
newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(newTaskForm[2].value)
})

async function getAllUserTasks() { 
    let userTasks = await fetch("http://localhost:5432/bugs/user/1").then(response => response.json())
    for (task of userTasks) {
        if (task.status = "todo") { 
            console.table(task)
            let taskDiv = document.createElement("div");
            // let 
        }
    }
}
getAllUserTasks()