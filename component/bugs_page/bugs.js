let logedinusername = localStorage.getItem("logedinusername");
let logedinpassword = localStorage.getItem("logedinpassword");
let logedinId = localStorage.getItem("userid")
let logedin = localStorage.getItem("logedin");
let currentProject = localStorage.getItem("currentProjectid");
let getNewTaskForm = document.getElementById("get-add-task-form")
let newTaskFormBackground = document.getElementById("new-form-background")
let newTaskFormHolder = document.getElementById("new-task-form-holder")
let closeAddTaskForm = document.getElementById("close-add-task-form")
let logOutButton = document.getElementById("log-out-button")
let individualTasks = document.getElementById("individual-tasks")
let closeIndividualTask = document.getElementById("close-individual-task-form")
const formText = document.querySelector('#form-text')
const formDescription = document.querySelector('#form-description')

if (logedin === "false") {
    location.replace("../../index.html")
}

//console.log(logedinusername, logedinpassword, logedinId, logedin, currentProject)

// Event Listeners
getNewTaskForm.addEventListener('click', (e) => {
    newTaskFormBackground.style.display = "block"
    newTaskFormHolder.style.display = "block"
})

closeAddTaskForm.addEventListener("click", () => {
    newTaskFormBackground.style.display = "none"
    newTaskFormHolder.style.display = "none"
})

logOutButton.addEventListener("click", () => {
    localStorage.setItem("logedinusername", null);
    localStorage.setItem("logedinpassword", null);
    localStorage.setItem("logedin", false);
    location.replace("../../index.html")
})

closeIndividualTask.addEventListener("click", () => {
    individualTasks.style.display = "none"
    newTaskFormBackground.style.display = "none"
})

// Functions
async function pullBugs() {
    const response = await fetch(`https://evening-plains-57425.herokuapp.com/bugs/${localStorage.getItem("currentProjectid")}`)
    const json = await response.json()
    for (const bugs of json) {
        const div = document.createElement('div')
        div.innerText = bugs.title
        div.addEventListener("click", async () => {
            formText.innerText = bugs.title
            formDescription.innerText = bugs.description
            newTaskFormBackground.style.display = "block"
            individualTasks.style.display = "block"
        })
        switch (bugs.status) {
            case 'review':
                document.querySelector('#review').append(div)
                break
            case 'completed':
                document.querySelector('#completed').append(div)
                break
            default:
                document.querySelector('#todo').append(div)
                break
        }
    }
}

document.querySelector('#current-project').innerText = localStorage.currentProjectid

pullBugs()