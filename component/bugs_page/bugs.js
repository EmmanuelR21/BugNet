let logedinusername = localStorage.getItem("logedinusername");
let logedinpassword = localStorage.getItem("logedinpassword");
let logedinId = localStorage.getItem("userid")
let logedin = localStorage.getItem("logedin");
let currentProject = localStorage.getItem("currentProjectid");
if (logedin === "false") {
    location.replace("../../index.html")
}
console.log(logedinusername, logedinpassword, logedinId, logedin, currentProject)
let logOutButton = document.getElementById("log-out-button")
logOutButton.addEventListener("click", () => {
    localStorage.setItem("logedinusername", null);
    localStorage.setItem("logedinpassword", null);
    localStorage.setItem("logedin", false);
    location.replace("../../index.html")
})
// Document variables
const querrybtn = document.querySelector('.querrybtn')
const bugsDiv = document.querySelector('.bugs')

// Event Listeners
document.addEventListener('DOMContentLoaded', pullBugs)
querrybtn.addEventListener("click", pullBugs)
// Functions

async function pullBugs() {

    const response = await fetch(`http://localhost:5432/bugs/${localStorage.getItem("currentProjectid")}`)
    const json = await response.json()
    for (const bugs of json){
        bugsDiv.append(document.createElement('p').innerText = bugs.title)
    }
}