function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("All fields are required!");
        return false;
    }
    return true;
}

function validateLoginForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please fill in both fields.");
        return false;
    }
    return true;
}

function validateRegisterForm() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!username || !email || !password) {
        alert("All fields are required!");
        return false;
    }
    return true;
}
