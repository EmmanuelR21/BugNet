// Document variables
const mySidebar = document.getElementById("mySidebar")
const main = document.getElementById("main")
const closeSideBar = document.querySelector('.closebtn')
const openSideBar = document.querySelector('.openbtn')

// Event Listeners
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
