document.getElementById("btn-submit").addEventListener("click", function () {
    const emailField = document.getElementById("login-email");
    const email = emailField.value;
    const passField = document.getElementById("login-pass");
    const pass = passField.value;
    if (email === "sadab@gmail.com" && pass == "sadab") {
        window.location.href = 'bank.html';
    }
    else {
        alert("Invalid Password");
    }
})