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
const querrybtn = document.querySelector('.querrybtn')
function run() { 
    console.log("yes")
}
// Event Listeners
querrybtn.addEventListener('click', pullProjects)

// Functions
async function pullProjects() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    let tasks = await fetch("http://localhost:5432/projects/3", requestOptions).then(response => response.json())
    console.log(tasks)
    for (let getProject of tasks ) { 
        console.log(getProject)
        let projectMainDiv = document.createElement("div")
        let projectName = document.createElement("p")
        projectMainDiv.classList.add("projectBoxs")
        projectName.innerText = getProject.name
        projectMainDiv.append(projectName)
        projectMainDiv.addEventListener("click", () => { 
            localStorage.setItem("currentProjectid", getProject.name);
            console.log(localStorage.getItem("currentProjectid"))
            location.replace("../bugs_page/bugs.html")
        })
        projectsHolder.append(projectMainDiv)
    }
}
pullProjects()
