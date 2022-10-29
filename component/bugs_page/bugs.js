// Document variables
const querrybtn = document.querySelector('.querrybtn')
const bugsDiv = document.querySelector('.bugs')

// Event Listeners
document.addEventListener('DOMContentLoaded', pullBugs)
closeSideBar.addEventListener("click", closeNav)
openSideBar.addEventListener("click", openNav)

// Functions

async function pullBugs() {
    const response = await fetch(`http://localhost:5432/bugs/${localStorage.currentProjectid}`)
    const json = await response.json()
    for (const bugs of json){
        bugsDiv.append(document.createElement('p').innerText = bugs.title)
    }
}