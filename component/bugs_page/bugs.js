// Document variables
const mySidebar = document.getElementById("mySidebar")
const main = document.getElementById("main")
const closeSideBar = document.querySelector('.closebtn')
const openSideBar = document.querySelector('.openbtn')
const querrybtn = document.querySelector('.querrybtn')
const bugsDiv = document.querySelector('.bugs')

// Event Listeners
document.addEventListener('DOMContentLoaded', pullBugs)
closeSideBar.addEventListener("click", closeNav)
openSideBar.addEventListener("click", openNav)

// Functions
function closeNav() {
    mySidebar.style.width = "0px";
    main.style.marginLeft = "0px";
}

function openNav() {
    mySidebar.style.width = "250px";
    main.style.marginLeft = "250px";
}

async function pullBugs() {
    const response = await fetch(`http://localhost:5432/bugs/${localStorage.currentProjectid}`)
    const json = await response.json()
    for (const bugs of json){
        bugsDiv.append(document.createElement('p').innerText = bugs.title)
    }
}