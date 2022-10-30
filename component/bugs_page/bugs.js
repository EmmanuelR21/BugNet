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