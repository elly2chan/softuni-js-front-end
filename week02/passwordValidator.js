function passwordValidator(password) {
    let valid = true;

    if (password.length <= 5 || password.length > 10) {
        valid = false;
        console.log("Password must be between 6 and 10 characters");
    }
    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        valid = false;
        console.log("Password must consist only of letters and digits");
    }
    if (!/\d.*\d/.test(password)) {
        valid = false;
        console.log("Password must have at least 2 digits");
    }

    if (valid) {
        console.log("Password is valid");
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');