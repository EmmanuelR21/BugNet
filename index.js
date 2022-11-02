// check if the user is logedin
let logedinusername = localStorage.getItem("logedinusername");
let logedinpassword = localStorage.getItem("logedinpassword");
let logedin = localStorage.getItem("logedin");
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
    getLogIN.style.backgroundColor = "rgba(173, 173, 173, 0)";
    
    getSignUp.style.borderBottom = "2px solid black"
    getSignUp.style.backgroundColor = "rgba(55, 55, 55, 0.688)";
    logInForm.style.display = "block"
    signUpForm.style.display = "none"
})

getSignUp.addEventListener("click", () => {
    getLogIN.style.borderBottom = "2px solid black"
    getLogIN.style.backgroundColor = "rgba(55, 55, 55, 0.688)";
    getSignUp.style.borderBottom = "0px solid black"
    getSignUp.style.backgroundColor = "rgba(173, 173, 173, 0)";
    logInForm.style.display = "none"
    signUpForm.style.display = "block"
})

// submit credentials
logInForm.addEventListener("submit", (e) => { 
    e.preventDefault()


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
    console.log(logInForm[0].value, logInForm[1].value)
    
    fetch(`https://mysterious-cliffs-67080.herokuapp.com/users/${logInForm[0].value}/${logInForm[1].value}`)
        .then(response => response.json())
        .then(result => {
            if (result.alert === "invalid log in") {
                loginSignupAlert.innerText ="invalid log in"
            } else if (result.alert === "loged in") {
                loginSignupAlert.innerText = "loged in"
                console.log(result)
                localStorage.setItem("logedinusername", logInForm[0].value);
                localStorage.setItem("logedinpassword", logInForm[1].value);
                localStorage.setItem("userid", result.data.user_id);
                localStorage.setItem("logedin", true);
                location.replace("./component/project_page/project.html")
            }
        })
})


// submit signUp form
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault()
    createAccount(signUpForm[0].value, signUpForm[1].value, signUpForm[2].value)
})

async function createAccount(newAccountName, newUserPassword, confirmNewUserPassword) { 
    if (newAccountName.length === 0 && newUserPassword.length === 0 && confirmNewUserPassword.length) {
        loginSignupAlert.innerText = "Missing username and password";
        return false;
    }
    if (newAccountName.length === 0) {
        loginSignupAlert.innerText = "Missing username"
        return false;
    }
    if (newUserPassword.length === 0 || confirmNewUserPassword.length === 0) {
        loginSignupAlert.innerText = "missing password"
        return false;
    }
    if (newUserPassword.length !== confirmNewUserPassword.length) {
        loginSignupAlert.innerText = "password does not match"
        return false;
    }
    let wasNameTaken = false
    let allUsersNames = await fetch("https://mysterious-cliffs-67080.herokuapp.com/users/users")
        .then(response => response.json())
        .then(result => result)
    console.log(allUsersNames)
    for (let usersNames of allUsersNames) { 
        if (usersNames.username === newAccountName) { 
            wasNameTaken = true
            console.log(newAccountName, newUserPassword, confirmNewUserPassword)
            loginSignupAlert.innerText = "User Name Taken"
            return false;
        }
    }
    ////
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            "name": newAccountName,
            "password": newUserPassword
        }),
        redirect: 'follow'
    };

    let userData = await fetch("https://mysterious-cliffs-67080.herokuapp.com/users/new_user", requestOptions)
        .then(response => response.json())
        .then(result => result[0])
    console.log(userData)
    loginSignupAlert.innerText = "loged in";
    localStorage.setItem("logedinusername", newAccountName);
    localStorage.setItem("logedinpassword", newUserPassword);
    localStorage.setItem("userid", userData.user_id);
    localStorage.setItem("logedin", true);
    location.replace("./component/project_page/project.html");
}