<?php
    $serverName = "localhost";
    $userName = "root";
    $password = "";
    $databaseName = "artgallery";

    $connection = mysqli_connect($serverName, $userName, $password, $databaseName);

    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }
?>