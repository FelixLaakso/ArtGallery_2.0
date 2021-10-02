<?php
    $serverName = "localhost";
    $userName = "root";
    $userPassword = "";
    $databaseName = "artgallery";

    $connection = mysqli_connect($serverName, $userName, $userPassword, $databaseName);

    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

    if ($_POST['transactionType'] == 'signup') {
        $data = json_decode($_POST['data']);
        $query = "INSERT INTO users (username, email, password) VALUES ('". $data->username ."', '". $data->email ."', '". $data->password ."');";
    }

    if ($queryResult = $connection->query($query)) {
        if ($_POST['transactionType'] == 'signup') {
            $return = 'success';
        } else if ($_POST['transactionType'] == 'signin'){
            $return = $queryResult['username'];
        }
        echo json_encode($return);
    }
?>