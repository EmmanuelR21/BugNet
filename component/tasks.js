localStorage.setItem("logedin", false);

let logedinusername = localStorage.getItem("logedinusername");
let logedinpassword = localStorage.getItem("logedinpassword");
let logedin = localStorage.getItem("logedin");
console.log(logedinusername, logedinpassword, logedin)

if (logedin === "false") {
    location.replace("../index.html");
    console.log('whaaa')
}

let getNewTaskForm = document.getElementById("get-add-task-form")
let newTaskFormBackground = document.getElementById("new-form-background")
let newTaskFormHolder = document.getElementById("new-task-form-holder")

let newTaskForm = document.getElementById("new-task-form")

getNewTaskForm.addEventListener('click', (e) => {
    newTaskFormBackground.style.display = "block"
    newTaskFormHolder.style.display = "block"
    console.log('ji')
})
newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(newTaskForm[2].value)
})