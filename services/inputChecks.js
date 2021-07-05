const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function checkInput(check) {
    if (check === 'submit') {
        let checkedUsername = false, checkedEmail = false, checkedPassword = false;
        let username = document.getElementById('username').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        if (username !== '') {
            checkedUsername = true;
        }

        if (email.match(emailRegex)) {
            checkedEmail = true;
        }
            
        if (!password.match(passwordRegex)) {
            document.getElementById("passwordRegexMessage").innerHTML = "Something is wrong!";
            document.getElementById("passwordRegexMessage").style.color = "red";
        } else {
            document.getElementById("passwordRegexMessage").innerHTML = "";
            checkedPassword = true;
        }

        if (checkedUsername && checkedEmail && checkedPassword) {
            let data = {
                username: username,
                email: email,
                password: password
            }
            getData('signup', JSON.stringify(data));
            changePage('home');
        }
    } else {
        switch (check.type) {
            case 'password':
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
}