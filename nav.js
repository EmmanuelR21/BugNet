let logOutButton = document.getElementById("log-out-button")

logOutButton.addEventListener("click", () => { 
    localStorage.setItem("logedinusername", null);
    localStorage.setItem("logedinpassword", null);
    localStorage.setItem("logedin", false);
})
console.log('ji')