let logedinusername = localStorage.getItem("logedinusername");
let logedinpassword = localStorage.getItem("logedinpassword");
let logedinId = localStorage.getItem("userid")
let logedin = localStorage.getItem("logedin");
if (logedin === "false") {
    location.replace("../../index.html")
}
let logOutButton = document.getElementById("log-out-button")
logOutButton.addEventListener("click", () => {
    localStorage.setItem("logedinusername", null);
    localStorage.setItem("logedinpassword", null);
    localStorage.setItem("logedin", false);
    location.replace("../../index.html")
})

// Document variables
let projectsHolder = document.getElementById("projects-holder")

const getCreateProjectForm = document.querySelector('#create-project')
const getAddProjectForm = document.querySelector('#add-project')

let newFormBackground = document.getElementById("new-form-background")

let newProjectFormHolder = document.getElementById("new-project-form-holder")
let newProjectForm = document.getElementById("new-project-form")
let closeNewProjectForm = document.getElementById("close-new-project-form")
let newProjectAlert = document.getElementById("new-project-alert")

let addProjectFormHolder = document.getElementById("add-project-form-holder")
let addProjectForm = document.getElementById("add-project-form")
let closeAddProjectForm = document.getElementById("close-add-project-form")
let addProjectAlert = document.getElementById("add-project-alert")

// Event Listeners
getCreateProjectForm.addEventListener('click', () => {
    newFormBackground.style.display = "block"
    newProjectFormHolder.style.display = "block"
})
getAddProjectForm.addEventListener('click', () => {
    newFormBackground.style.display = "block"
    addProjectFormHolder.style.display = "block"
})

closeNewProjectForm.addEventListener('click', () => {
    newFormBackground.style.display = "none"
    newProjectFormHolder.style.display = "none"
})
closeAddProjectForm.addEventListener('click', () => {
    newFormBackground.style.display = "none"
    addProjectFormHolder.style.display = "none"
})
newProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    creatNewProject(newProjectForm[0].value, newProjectForm[1].value)
})
addProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addProject(addProjectForm[0].value)
})

async function creatNewProject(newProjectName, newProjectDescription) {
    let doesProjectExist = false
    let tasks = await fetch("http://localhost:5432/projects/").then(response => response.json()).then(result => result)
    for (obj of tasks) if (obj.name === newProjectName) doesProjectExist = true;

    if (!doesProjectExist) {
        newProjectAlert.innerText = "Project Created"
        let createProjectHeaders = new Headers();
        createProjectHeaders.append("Content-Type", "application/json");
        let createProjectRequest = {
            method: 'POST',
            headers: createProjectHeaders,
            body: JSON.stringify({ "name": newProjectName, "description": newProjectDescription }),
            redirect: 'follow'
        };
        let newProject = await fetch("http://localhost:5432/projects/", createProjectRequest).then(response => response.json()).then(result => result[0])
        let addProjectId = newProject.project_id
        let projectMainDiv = document.createElement("div");
        let projectName = document.createElement("p");
        let projectDescription = document.createElement("p");
        projectName.innerText = newProjectName;
        projectDescription.innerText = newProjectDescription;
        projectMainDiv.classList.add("projectBoxs", "cursor-pointer");

        projectMainDiv.append(projectName, projectDescription)
        projectMainDiv.addEventListener("click", () => {
            localStorage.setItem("currentProjectid", newProjectName);
            location.replace("../bugs_page/bugs.html");
        })
        let joinUserToProjectHeaders = new Headers();
        joinUserToProjectHeaders.append("Content-Type", "application/json");

        let requestOptions = {
            method: 'POST',
            headers: joinUserToProjectHeaders,
            body: JSON.stringify({ "project_id": addProjectId, "user_id": +logedinId }),
            redirect: 'follow'
        };

        await fetch("http://localhost:5432/users/project", requestOptions)
        projectsHolder.append(projectMainDiv)
        newFormBackground.style.display = "none"
        newProjectFormHolder.style.display = "none"
    } {
        newProjectAlert.innerText = "Project Name taken"
    }
}

async function addProject(newProjectName) {
    let doesUserHaveProject = false;
    let addProjectId;
    let addProjectDescription;
    let userProjects = await fetch(`http://localhost:5432/projects/${logedinId}`).then(response => response.json())
    for (let getProject of userProjects) {
        if (getProject.name === newProjectName) {
            doesUserHaveProject = true
            addProjectAlert.innerText = "You have this Project"
            return false
        }
    }
    let doesProjectExist = false
    let projects = await fetch("http://localhost:5432/projects/").then(response => response.json()).then(result => result)
    for (obj of projects) {
        if (obj.name === newProjectName) {
            doesProjectExist = true
            addProjectDescription = obj.description
            addProjectId = obj.project_id
        }
    }
    if (!doesUserHaveProject && doesProjectExist) {
        addProjectAlert.innerText = "Project added";

        let addProjectToUserHeaders = new Headers();
        addProjectToUserHeaders.append("Content-Type", "application/json");

        let requestJoinUserToProject = {
            method: 'POST',
            headers: addProjectToUserHeaders,
            body: JSON.stringify({ "project_id": addProjectId, "user_id": +logedinId }),
            redirect: 'follow'
        };

        await fetch("http://localhost:5432/users/project", requestJoinUserToProject)
        let projectMainDiv = document.createElement("div")
        let projectName = document.createElement("p")
        let projectDescription = document.createElement("p")
        projectName.innerText = newProjectName
        projectDescription.innerText = addProjectDescription
        projectMainDiv.classList.add("projectBoxs", "cursor-pointer")
        projectMainDiv.append(projectName, projectDescription)
        projectMainDiv.addEventListener("click", () => {
            localStorage.setItem("currentProjectid", newProjectName);
            location.replace("../bugs_page/bugs.html")
        })
        projectsHolder.append(projectMainDiv)
        newFormBackground.style.display = "none"
        addProjectFormHolder.style.display = "none"
    } else if (!doesUserHaveProject) {
        addProjectAlert.innerText = "Project Does not exist"
    }
}
// Functions
async function pullProjects() {
    let tasks = await fetch(`http://localhost:5432/projects/${logedinId}`).then(response => response.json())
    for (let getProject of tasks) {
        let projectMainDiv = document.createElement("div")
        let projectName = document.createElement("p")
        let projectDescription = document.createElement("p")
        projectName.innerText = getProject.name
        projectDescription.innerText = getProject.description
        projectMainDiv.classList.add("projectBoxs", "cursor-pointer")
        projectMainDiv.append(projectName, projectDescription)
        projectMainDiv.addEventListener("click", () => {
            localStorage.setItem("currentProjectid", getProject.name);
            location.replace("../bugs_page/bugs.html")
        })
        projectsHolder.append(projectMainDiv)
    }
}
pullProjects()
