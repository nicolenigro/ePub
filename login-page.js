const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "asarrazin" && password === "anais") {
        window.location.replace('menu.html')
    } else if(username === "emccabe" && password === "emme") {
    	window.location.replace('menu.html')
    } else if(username === "nnigro" && password === "nicole") {
    	window.location.replace('menu.html')
    } else {
        //loginErrorMsg.style.opacity = 1;
        alert("Error password or username!")
    }
})