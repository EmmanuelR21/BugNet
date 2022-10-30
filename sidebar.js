// Document variables

const mySidebar = document.getElementById("mySidebar")
const main = document.getElementById("main")
const closeSideBar = document.querySelector('.closebtn')
const openSideBar = document.querySelector('.openbtn')
const usernameHolder = document.getElementById("username-holder")
// Event Listeners
closeSideBar.addEventListener("click", closeNav)
openSideBar.addEventListener("click", openNav)
//let logedinusername = localStorage.getItem("logedinusername");
usernameHolder.innerText = `${logedinusername}`
// Functions
function closeNav() {
    mySidebar.style.width = "0px";
    main.style.marginLeft = "0px";
}

function openNav() {
    mySidebar.style.width = "250px";
    main.style.marginLeft = "250px";
}

async function pullProjects() {
    const response = await fetch(`http://localhost:5432/projects/1`)
    const json = await response.json()
    const thingy = document.createElement('div')
    thingy.innerText = json[0].name
    main.appendChild(thingy)
}
