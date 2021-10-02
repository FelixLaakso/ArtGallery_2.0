function getData (transactionType, data) {
    let method;
    if (transactionType === 'signup') {
        method = 'post';
    } else if (transactionType === 'signin') {
        method = 'get';
    }

    let transactionInfo = {
        type: transactionType,
        method: method,
    }

    $.ajax({
        type: method,
        url: "services/databaseConnection.php",
        data: {transactionType: JSON.stringify(transactionInfo), data: JSON.stringify(data)},
        dataType: "json",
        success: function (response) {
            console.log(transactionType);
            if (transactionType == 'signup') {
                changePage('home');
            } else if (transactionType == 'signin') {
                let username = sessionStorage.setItem('userInfo', response);
                document.getElementById("loginContainer").innerHTML = "<p>" + username + "</p>";
                changePage('home');
            }
        },
        error: function (xhr, exception) {
            var msg = "";
            if (xhr.status === 0) {
                msg = "Not connect.\n Verify Network." + xhr.responseText;
            } else if (xhr.status == 404) {
                msg = "Requested page not found. [404]" + xhr.responseText;
            } else if (xhr.status == 500) {
                msg = "Internal Server Error [500]." +  xhr.responseText;
            } else if (exception === "parsererror") {
                msg = "Requested JSON parse failed.";
            } else if (exception === "timeout") {
                msg = "Time out error." + xhr.responseText;
            } else if (exception === "abort") {
                msg = "Ajax request aborted.";
            } else {
                msg = "Error:" + xhr.status + " " + xhr.responseText;
            }
            console.error(msg);
        }
    }); 

}