<?php
    include("database.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COSMOS-Sign In</title>

    <link rel="stylesheet" href="signin.css">
    <link rel="stylesheet" href="border.css">
    <link rel="icon" href="headerCOSMOS.png">
</head>
<body>
    <a href="main.php">
        <div class = 'logobar'>
            <div class="logo-cover border_logo">
                <div class="logo"></div>
            </div>
        </div>
    </a>
    

    <div class="sign">
        <form action="<?php $_SERVER["PHP_SELF"]?>" method="post">
            <h1>Sign In</h1>

            <div class="email">
                <label for="email">Email</label>
                <input type="text" id="username" name="username" required>
            </div>
            
            <div class="password">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            
            <input type="submit" value="Sign Up">
        </form>
    </div>

    <div class="cant">
        <a href="signup.php">Don't have an account? Sign up!</a>
    </div>
    
</body>
</html>


<?php
    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $username = $_POST["username"];
        $password = $_POST["password"];

        $sql = "SELECT role FROM login WHERE username = '$username' AND password = '$password'";
        $result = mysqli_query($con, $sql);

        if ($result) 
        {
            // Check if any rows were returned
            if (mysqli_num_rows($result) > 0) 
            {
                // Fetch the result and display the role
                $row = mysqli_fetch_assoc($result);
                $role = $row["role"];

                if ($role == 'admin') 
                {
                    header("Location: admin_page.php");
                    exit();
                }
            }
        }  
    }


    mysqli_close($con);
?>