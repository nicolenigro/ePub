const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "acsarraz" && password === "anais") {
        window.location.replace('menu.html')
        //location.reload();
    } else {
        //loginErrorMsg.style.opacity = 1;
        alert("Error password or username!")
    }
})