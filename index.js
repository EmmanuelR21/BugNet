// check if the user is logedin
let logedinusername = localStorage.getItem("logedinusername");
let logedinpassword = localStorage.getItem("logedinpassword");
let logedin = localStorage.getItem("logedin");
console.log(logedinusername, logedinpassword, logedin)

let getLogIN = document.getElementById("get-login")
let getSignUp = document.getElementById("get-sign-up")

let logInForm = document.getElementById("login-form")
let signUpForm = document.getElementById("sign-up-form")


// document.getElementById()
// go to login or sign yo form
getLogIN.addEventListener("click", () => { 
    getLogIN.style.borderBottom = "0px solid black"
    getSignUp.style.borderBottom = "2px solid black"
    logInForm.style.display = "block"
    signUpForm.style.display = "none"
})

getSignUp.addEventListener("click", () => {
    getLogIN.style.borderBottom = "2px solid black"
    getSignUp.style.borderBottom = "0px solid black"
    logInForm.style.display = "none"
    signUpForm.style.display = "block"
})

// submit credentials
logInForm.addEventListener("submit", (e) => { 
    e.preventDefault()
    localStorage.setItem("logedinusername", signUpForm[0].value);
    localStorage.setItem("logedinpassword", signUpForm[1].value);
    localStorage.setItem("logedin", true);
})


// submit signUp form
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault()
    if (signUpForm[1].value === signUpForm[2].value) {
        localStorage.setItem("logedinusername", signUpForm[0].value);
        localStorage.setItem("logedinpassword", signUpForm[1].value);
        localStorage.setItem("logedin", true);
    } else { 
        
    }
})



