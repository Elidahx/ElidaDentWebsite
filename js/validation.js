function validateForm(form) {
    let isValid = true;
    let errorMessages = [];

    // Example validation for required fields
    if (form.username.value.trim() === "") {
        errorMessages.push("Përdoruesi është i detyrueshëm.");
        isValid = false;
    }

    if (form.password.value.trim() === "") {
        errorMessages.push("Fjalëkalimi është i detyrueshëm.");
        isValid = false;
    }

    // Display error messages
    if (!isValid) {
        alert(errorMessages.join("\n"));
    }

    return isValid;
}
