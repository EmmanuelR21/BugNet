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
    console.log(logInForm[0].value)
    console.log(logInForm[1].value)
})

// submit signUp form
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(signUpForm[0].value)
    console.log(signUpForm[1].value)
    console.log(signUpForm[2].value)
})



