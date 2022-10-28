let logedinusername = localStorage.getItem("logedinusername");
let logedinpassword = localStorage.getItem("logedinpassword");
let logedin = localStorage.getItem("logedin");
if (logedin === "false") {
    location.replace("../../index.html")
}
let logOutButton = document.getElementById("log-out-button")

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
function pullProjects() {
    console.log('hi im paul')
}