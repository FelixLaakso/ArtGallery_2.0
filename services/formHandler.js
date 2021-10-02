function submitForm(formType) {
    if (formType === 'signup') {
        let inputCheckResponse = checkInput('signup');
        if (inputCheckResponse === 'OK') {
            let username = document.getElementById('signupUsername').value;
            let email = document.getElementById('signupEmail').value;
            let password = document.getElementById('signupPassword').value;
            let data = {
                    username: username,
                    email: email,
                    password: password
                }
            
            getData(formType, data);
        } else {
            /* TODO: Clean up */
            if (!inputCheckResponse.checkedUsername) {
                let usernameMessage = document.getElementById('usernameMessage');
                usernameMessage.innerHTML = "Something is wrong!";
                usernameMessage.style.color = "red";
            } else {
                let usernameMessage = document.getElementById('usernameMessage').innerHTML = "";
            }
            if (!inputCheckResponse.checkedEmail) {
                let emailMessage = document.getElementById('emailMessage');
                emailMessage.innerHTML = "Something is wrong!";
                emailMessage.style.color = "red";
            } else {
                let emailMessage = document.getElementById('emailMessage').innerHTML = "";
            }
            if (!inputCheckResponse.checkedPassword) {
                let passwordMessage = document.getElementById('passwordMessage');
                passwordMessage.innerHTML = "Something is wrong!";
                passwordMessage.style.color = "red";
            } else {
                let passwordMessage = document.getElementById('passwordMessage').innerHTML = "";
            }
        }
    }
}