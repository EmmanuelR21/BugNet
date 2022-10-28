let navLogOutButton = document.getElementById("log-out-button")

navLogOutButton.addEventListener("click", () => { 
    localStorage.setItem("logedinusername", null);
    localStorage.setItem("logedinpassword", null);
    localStorage.setItem("logedin", false);
})