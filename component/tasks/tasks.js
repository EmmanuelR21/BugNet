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

async function getAllTasks() { 
    var requestOptions = {
        method: 'GET',
        body: "",
        redirect: 'follow'
    };

    await fetch("http://localhost:5432/issues", requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
}
getAllTasks()