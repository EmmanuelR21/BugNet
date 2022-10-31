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

const postBugTitle = document.querySelector('#new-task-title')
const postBugDesc = document.querySelector('#new-task-form')
const postBugCode = document.querySelector('#new-task-code')
const postBugBtn = document.querySelector('#new-task-button')

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

postBugBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log('hi')

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "user_id": localStorage.userid,
  "projectId": "1",
  "title": postBugTitle.value,
  "description": postBugDesc.value,
  "code": postBugCode.value
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:5432/bugs/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

})

// Functions
async function pullBugs() {
    const response = await fetch(`http://localhost:5432/bugs/${localStorage.getItem("currentProjectid")}`)
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