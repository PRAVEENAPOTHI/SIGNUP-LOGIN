function vfun() {
    var username = document.myform.username.value;
    var password = document.myform.password.value;
    if (username === "" || password === "") {
        document.getElementById("error").innerHTML = "Both fields are required.";
        return false;
    }
    return true;
}
function validateSignup() {
    var username = document.signupform.username.value;
    var email = document.signupform.email.value;
    var password = document.signupform.password.value;
    var confirmpassword = document.signupform.confirmpassword.value;

    if (username === "" || email === "" || password === "" || confirmpassword === "") {
        document.getElementById("signup-error").innerHTML = "All fields are required.";
        return false;
    }
    if (password !== confirmpassword) {
        document.getElementById("signup-error").innerHTML = "Passwords do not match.";
        return false;
    }
    return true;
}
