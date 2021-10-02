const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function checkInput(formType) {
    if (formType === 'signup') {
        let checkedUsername = false, checkedEmail = false, checkedPassword = false;
        let username = document.getElementById('signupUsername').value;
        let email = document.getElementById('signupEmail').value;
        let password = document.getElementById('signupPassword').value;

        if (username !== '') {
            checkedUsername = true;
        }

        if (email.match(emailRegex)) {
            
            checkedEmail = true;
        }
            
        if (!password.match(passwordRegex)) {
            document.getElementById("passwordMessage").innerHTML = "Something is wrong!";
            document.getElementById("passwordMessage").style.color = "red";
        } else {
            document.getElementById("passwordMessage").innerHTML = "";
            checkedPassword = true;
        }

        if (checkedUsername && checkedEmail && checkedPassword) {
            return 'OK';
        } else {
            let response = {
                checkedUsername: checkedUsername,
                checkedEmail: checkedEmail,
                checkedPassword: checkedPassword
            }

            return response;
        }
    } else {
        /* TODO: Clean up */
        let errorMessage;
        if (formType === 'signupUsername') {
            errorMessage = document.getElementById('usernameMessage');
            if (document.getElementById(formType).value === '') {
                errorMessage.innerHTML = "Something is wrong!";
                errorMessage.style.color = "red";
            } else {
                errorMessage.innerHTML = "";
            }
        } else if (formType === 'signupEmail') {
            errorMessage = document.getElementById('emailMessage');
            if (!document.getElementById(formType).value.match(emailRegex)) {
                errorMessage.innerHTML = "Something is wrong!";
                errorMessage.style.color = "red";
            } else {
                errorMessage.innerHTML = "";
            }
        } else if (formType === 'signupPassword') {
            errorMessage = document.getElementById('passwordMessage');
            if (!document.getElementById(formType).value.match(passwordRegex)) {
                errorMessage.innerHTML = "Something is wrong!";
                errorMessage.style.color = "red";
            } else {
                errorMessage.innerHTML = "";
            }
        }
    }
}