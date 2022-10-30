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

let closeIndividualTask = document.getElementById("close-individual-task-form")
closeIndividualTask.addEventListener("click", () => {
    individualTasks.style.display = "none"
    newTaskFormBackground.style.display = "none"
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
let individualTasks = document.getElementById("individual-tasks")

let bugTaskTable = document.getElementById("bug-task")
let taskInReview = document.getElementById("task-in-review")
let taskCompleted = document.getElementById("task-completed")

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
    let userTasks = await fetch(`https://evening-plains-57425.herokuapp.com/bugs/user/${localStorage.getItem("userid")}`).then(response => response.json())
    console.log(userTasks)
    for (task of userTasks) {
        let taskDiv = document.createElement("div");
        let taskTitle = document.createElement("h1");
        taskTitle.innerText = task.title;
        taskDiv.append(taskTitle)
        taskDiv.classList.add("cursor-pointer")

        taskDiv.addEventListener("click", async () => {
            newTaskFormBackground.style.display = "block"
            individualTasks.style.display = "block"
        })

        if (task.status === "todo") {
            bugTaskTable.append(taskDiv)
        } else if (task.status === "todo in review") {
            taskInReview.append(taskDiv)
        } else if (task.status === "completed") {
            taskCompleted.append(taskDiv)
        }
    }
}
getAllUserTasks()