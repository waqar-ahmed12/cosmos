<?php
    $dbserver = "localhost";
    $db_user = "root";
    $db_pass = "";
    $db_name = "cosmos";
    $conn = "";
    
    try
    {
        $con = mysqli_connect($dbserver, $db_user,
        $db_pass, $db_name);
    }
    catch(mysqli_sql_exception)
    {
        echo "Counld not connect to DataBase";
    }

?>