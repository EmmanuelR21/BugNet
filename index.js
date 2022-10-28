// check if the user is logedin
let logedinusername = localStorage.getItem("logedinusername");
let logedinpassword = localStorage.getItem("logedinpassword");
let logedin = localStorage.getItem("logedin");
console.log(logedin)
if (logedin === "true") { 
    location.replace("./component/project_page/project.html")
}

let getLogIN = document.getElementById("get-login")
let getSignUp = document.getElementById("get-sign-up")

let logInForm = document.getElementById("login-form")
let signUpForm = document.getElementById("sign-up-form")

let loginSignupAlert = document.getElementById("login-signup-alert")
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

    console.log(logInForm[0].value, logInForm[1].value)
    if (logInForm[0].value.length === 0 && logInForm[1].value.length === 0) {
        loginSignupAlert.innerText = "Missing username and password";
        return false;
    }
    if (logInForm[0].value.length === 0) { 
        loginSignupAlert.innerText = "Missing username"
        return false;
    }
    if (logInForm[1].value.length === 0) {
        loginSignupAlert.innerText = "missing password"
        return false;
    }
    
    fetch(`http://localhost:5432/users-names/${logInForm[0].value}/${logInForm[1].value}`)
        .then(response => response.json())
        .then(result => {
            if (result.alert === "invalid log in") {
                loginSignupAlert.innerText ="invalid log in"
            } else if (result.alert === "loged in") {
                loginSignupAlert.innerText = "loged in"
                localStorage.setItem("logedinusername", logInForm[0].value);
                localStorage.setItem("logedinpassword", logInForm[1].value);
                localStorage.setItem("logedin", true);
                location.replace("./component/project_page/project.html")
            }
        })
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



