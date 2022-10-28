// Document variables
const mySidebar = document.getElementById("mySidebar")
const main = document.getElementById("main")
const closeSideBar = document.querySelector('.closebtn')
const openSideBar = document.querySelector('.openbtn')
const querrybtn = document.querySelector('.querrybtn')

// Event Listeners
closeSideBar.addEventListener("click", closeNav)
openSideBar.addEventListener("click", openNav)
querrybtn.addEventListener('click', pullBugs) //THIS SHOULD BE CHANGED TO LOAD NOT CLICK

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
    const response = await fetch(`http://localhost:5432/bugs/Meta`) //THE WORD 'META' NEEDS TO CHANGE DEPENDING ON 
    const json = await response.json()
    console.log(json) //THE PAGE SHOULD CHANGE DEPENDING ON WHAT IS RECIEVED FROM THE json VARIABLE
}