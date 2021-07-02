function checkInput(check) {
    switch (check.type) {
        /*case 'email':
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!check.value.match(emailRegex)) {
                document.getElementById("emailRegexMessage").innerHTML = "Something is wrong!";
                document.getElementById("emailRegexMessage").style.color = "red";
                document.getElementById("signup").classList.remove("");
            } else {
                document.getElementById("emailRegexMessage").innerHTML = "";
            }
            break;
        */
        case 'password':
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
            if (!check.value.match(passwordRegex)) {
                document.getElementById("passwordRegexMessage").innerHTML = "Something is wrong!";
                document.getElementById("passwordRegexMessage").style.color = "red";
            } else {
                document.getElementById("passwordRegexMessage").innerHTML = "";
            }
            break;
        default:
            break;
    }
}