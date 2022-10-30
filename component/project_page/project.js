let logedinusername = localStorage.getItem("logedinusername");
let logedinpassword = localStorage.getItem("logedinpassword");
let logedinId = localStorage.getItem("userid")
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
let projectsHolder = document.getElementById("projects-holder")
// Document variables
const getCreateProjectForm = document.querySelector('#create-project')
const getAddProjectForm = document.querySelector('#add-project')

let newFormBackground = document.getElementById("new-form-background")

let newProjectFormHolder = document.getElementById("new-project-form-holder")
let addProjectFormHolder = document.getElementById("add-project-form-holder")

let newProjectForm = document.getElementById("new-project-form")
let addProjectForm = document.getElementById("add-project-form")

let closeNewProjectForm = document.getElementById("close-new-project-form")
let closeAddProjectForm = document.getElementById("close-add-project-form")

let newProjectAlert = document.getElementById("new-project-alert")
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
    console.log(newProjectForm[0].value)
    creatNewProject(newProjectForm[0].value,newProjectForm[1].value)
})
addProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(addProjectForm[0].value)
    addProject(addProjectForm[0].value)
})

async function creatNewProject(newProjectName, newProjectDescription) { 
    let doesProjectExist = false
    let tasks = await fetch("http://localhost:5432/projects/")
        .then(response => response.json())
        .then(result => result)
    for (obj of tasks) { 
        if (obj.name === newProjectName) doesProjectExist = true
    }
    if (!doesProjectExist) {
        newProjectAlert.innerText = "Project Created"
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({"name": newProjectName,"description": newProjectDescription}),
            redirect: 'follow'
        };
        fetch("http://localhost:5432/projects/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result));
        
        let projectMainDiv = document.createElement("div");
        let projectName = document.createElement("p");
        let projectDescription = document.createElement("p");
        projectName.innerText = newProjectName;
        projectDescription.innerText = newProjectDescription;
        projectMainDiv.classList.add("projectBoxs", "cursor-pointer");

        projectMainDiv.append(projectName, projectDescription)
        projectMainDiv.addEventListener("click", () => {
            localStorage.setItem("currentProjectid", newProjectName);
            console.log(localStorage.getItem("currentProjectid"));
            location.replace("../bugs_page/bugs.html");
        })
        projectsHolder.append(projectMainDiv)
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
            return addProjectAlert.innerText

        }
    }
    let doesProjectExist = false
    let projects = await fetch("http://localhost:5432/projects/")
        .then(response => response.json())
        .then(result => result)
    for (obj of projects) {
        if (obj.name === newProjectName) {
            doesProjectExist = true
            addProjectDescription = obj.description
            addProjectId = obj.project_id
        }
    }
    if (!doesUserHaveProject && doesProjectExist) {
        console.log(addProjectId, logedinId)
        addProjectAlert.innerText = "Project added";

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "project_id": addProjectId,
            "user_id": +logedinId
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5432/users/project", requestOptions)
        // addProjectDescription
        let projectMainDiv = document.createElement("div")
        let projectName = document.createElement("p")
        let projectDescription = document.createElement("p")
        projectName.innerText = newProjectName
        projectDescription.innerText = addProjectDescription
        projectMainDiv.classList.add("projectBoxs", "cursor-pointer")
        projectMainDiv.append(projectName, projectDescription)
        projectMainDiv.addEventListener("click", () => {
            localStorage.setItem("currentProjectid", newProjectName);
            console.log(localStorage.getItem("currentProjectid"))
            location.replace("../bugs_page/bugs.html")
        })
        projectsHolder.append(projectMainDiv)

    } else if (!doesUserHaveProject) { 
        addProjectAlert.innerText = "Project Does not exist"
    }
}
// Functions
async function pullProjects() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    let tasks = await fetch(`http://localhost:5432/projects/${logedinId}`, requestOptions).then(response => response.json())
    //console.log(tasks)
    for (let getProject of tasks ) { 
        // console.log(getProject)
        let projectMainDiv = document.createElement("div")
        let projectName = document.createElement("p")
        let projectDescription = document.createElement("p")
        projectName.innerText = getProject.name
        projectDescription.innerText = getProject.description
        projectMainDiv.classList.add("projectBoxs", "cursor-pointer")
        projectMainDiv.append(projectName, projectDescription)
        projectMainDiv.addEventListener("click", () => { 
            localStorage.setItem("currentProjectid", getProject.name);
            console.log(localStorage.getItem("currentProjectid"))
            location.replace("../bugs_page/bugs.html")
        })
        projectsHolder.append(projectMainDiv)
    }
}
pullProjects()
