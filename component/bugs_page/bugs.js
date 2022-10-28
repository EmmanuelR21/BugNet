// Document variables
const mySidebar = document.getElementById("mySidebar")
const main = document.getElementById("main")
const closeSideBar = document.querySelector('.closebtn')
const openSideBar = document.querySelector('.openbtn')
const querrybtn = document.querySelector('.querrybtn')

// Event Listeners
closeSideBar.addEventListener("click", closeNav)
openSideBar.addEventListener("click", openNav)
querrybtn.addEventListener('click', pullBugs)

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
    console.log('hi')
    const response = await fetch(`http://localhost:5432/bugs/Meta`)
    const json = await response.json()
    console.log(json)
    const thingy = document.createElement('div')
    thingy.innerText = json[0]
    main.appendChild(thingy)
}