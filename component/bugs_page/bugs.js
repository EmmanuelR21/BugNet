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

if (logedin === "false") {
    location.replace("../../index.html")
}

//console.log(logedinusername, logedinpassword, logedinId, logedin, currentProject)

// Event Listeners
getNewTaskForm.addEventListener('click', (e) => {
    newTaskFormBackground.style.display = "block"
    newTaskFormHolder.style.display = "block"
    console.log('ji')
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

// Functions
async function pullBugs() {
    const response = await fetch(`https://evening-plains-57425.herokuapp.com/bugs/${localStorage.getItem("currentProjectid")}`)
    const json = await response.json()
    for (const bugs of json) {
        const div = document.createElement('div')
        div.innerText = bugs.title
        switch (bugs.status) {
            case 'review':
                document.querySelector('#review').append((document.createElement('div').innerText = bugs.title))
                break
            case 'completed':
                document.querySelector('#completed').append(document.createElement('div').innerText = bugs.title)
                break
            default:
                document.querySelector('#todo').append(div)
                break
        }
    }
}

document.querySelector('#current-project').innerText = localStorage.currentProjectid
pullBugs()