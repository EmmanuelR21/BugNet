let logedinusername = localStorage.getItem("logedinusername");
let logedinpassword = localStorage.getItem("logedinpassword");
let logedin = localStorage.getItem("logedin");
if (logedin === "false") {
    location.replace("../../index.html")
}
let logOutButton = document.getElementById("log-out-button")
let projectsHolder = document.getElementById("projects-holder")
logOutButton.addEventListener("click", () => {
    console.log(true)
    localStorage.setItem("logedinusername", null);
    localStorage.setItem("logedinpassword", null);
    localStorage.setItem("logedin", false);
    location.replace("../../index.html")
})
 
// Document variables
const addProjectButton = document.querySelector('.add-project')

// Event Listeners
addProjectButton.addEventListener('click', addProject)

async function addProject() { 
    
}
// Functions
async function pullProjects() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    let tasks = await fetch(`http://localhost:5432/projects/${localStorage.getItem("userid")}`, requestOptions).then(response => response.json())
    console.log(tasks)
    for (let getProject of tasks ) { 
        console.log(getProject)
        let projectMainDiv = document.createElement("div")
        let projectName = document.createElement("p")
        let projectDescription = document.createElement("p")
        projectName.innerText = getProject.name
        projectDescription.innerText = getProject.description
        projectMainDiv.classList.add("projectBoxs", "cursor-pointer")
        projectMainDiv.append(projectName, projectDescription)
        projectMainDiv.addEventListener("click", () => { 
            localStorage.setItem("currentProjectid", getProject.project_id);
            console.log(localStorage.getItem("currentProjectid"))
            location.replace("../bugs_page/bugs.html")
        })
        projectsHolder.append(projectMainDiv)
    }
}
pullProjects()
