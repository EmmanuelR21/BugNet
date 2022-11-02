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
let taskDescription = document.getElementById("individual-task-description")
let taskCode = document.getElementById("individual-task-code")
let closeIndividualTask = document.getElementById("close-individual-task-form")
const formText = document.querySelector('#form-text')
const formDescription = document.querySelector('#form-description')
const postBugTitle = document.querySelector('#new-task-title')
const postBugDesc = document.querySelector('#new-task-description')
const postBugCode = document.querySelector('#new-task-code')
const postBugBtn = document.querySelector('#new-task-button')
const bugStatusUpdate = document.querySelector("bug-status-update")
const bugCode = document.querySelector('#form-code')

let updateTaskForm = document.getElementById("individual-task-form")
let statusLevle = document.getElementById("bug-status-update")
let currentBugId;
if (logedin === "false") {
    location.replace("../../index.html")
}

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
updateTaskForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    let myHeadersa = new Headers();
    myHeadersa.append("Content-Type", "application/json");

    let rawa = JSON.stringify({
        "status": statusLevle.value
    });

    let requestOptionss = {
        method: 'PATCH',
        headers: myHeadersa,
        body: rawa,
        redirect: 'follow'
    };

    let newBugData = fetch(`https://mysterious-cliffs-67080.herokuapp.com/bugs/status/${currentBugId}`, requestOptionss)
        .then(response => response.json())
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "codeFeedback": updateTaskForm[0].value,
        "commentFeedback": updateTaskForm[1].value,
        "bugDescription": "aaaaaaaaaaaaaaaaaaaaaaa"
    });

    var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(`https://mysterious-cliffs-67080.herokuapp.com/bugs/feedback/${currentBugId}`, requestOptions)
        .then(response => response.json())
        .then(result => result)
    location.replace("../bugs_page/bugs.html")
 })

postBugBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "user_id": localStorage.userid,
        "title": postBugTitle.value,
        "description": postBugDesc.value,
        "code": postBugCode.value
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    let newBugData = await fetch(`https://mysterious-cliffs-67080.herokuapp.com/bugs/${localStorage.currentProjectid}`, requestOptions)
        .then(response => response.json())
        .then(result => result[0])
    newTaskFormHolder.style.display = "none"
    newTaskFormBackground.style.display = "none"

    const div = document.createElement('div')
    div.innerText = newBugData.title
    div.addEventListener("click", async () => {
        formText.innerText = newBugData.title
        formDescription.innerText = newBugData.description
        newTaskFormBackground.style.display = "block"
        individualTasks.style.display = "block"
        currentBugId = newBugData.bug_id;
        statusLevle.value = newBugData.status;
    })
    document.querySelector('#todo').append(div)
})

// Functions
async function pullBugs() {
    const response = await fetch(`https://mysterious-cliffs-67080.herokuapp.com/bugs/${localStorage.getItem("currentProjectid")}`)
    const json = await response.json()
    for (const bugs of json) {
        const div = document.createElement('div')
        div.innerText = bugs.title
        div.addEventListener("click", async () => {
            console.table(bugs)
            formText.innerText = bugs.title
            formDescription.innerText = bugs.description
            newTaskFormBackground.style.display = "block"
            individualTasks.style.display = "block"
            currentBugId = bugs.bug_id;
            statusLevle.value = bugs.status;
            bugCode.innerText = bugs.code
            taskDescription.defaultValue = bugs.feedback || ""
            taskCode.defaultValue = bugs.code_feedback || ""
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