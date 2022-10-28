let logedinusername = localStorage.getItem("logedinusername");
let logedinpassword = localStorage.getItem("logedinpassword");
let logedin = localStorage.getItem("logedin");
if (logedin === "false") {
    location.replace("../../index.html")
}

let logOutButton = document.getElementById("log-out-button")

logOutButton.addEventListener("click", () => { 
    location.replace("../../index.html")
})