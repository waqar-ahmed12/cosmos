<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COSMOS-Sign Up</title>
    <link rel="stylesheet" href="border.css">
    <link rel="stylesheet" href="signup.css">
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
        <form action="signup.php" method="post">
            <h1>Sign Up</h1>

            <!--
                <div class="option">
                <label for="choose">What Account would you like?</label>


                <label class="custom">Provider
                    <input type="radio" name="radio" onclick="updateSelectedValue(this)">
                  </label>
                  
                  <label class="custom">Customer
                    <input type="radio" name="radio">
                  </label>


                <button type="button" onclick="see()">Next</button>
            </div>
            -->

      <!--     
    <div class="section1">

        <h3>Personal Information</h3>

        <div class="fname">
            <label for="Fname">First Name</label>
            <input type="text" id="fname">
        </div>

        <div class="lname">
            <label for="lname">Last Name</label>
            <input type="text" id="lname">
        </div>

        <div class="date-of-birth-container">
            <label for="dob">Date of Birth</label>
            <input type="date" id="dob" >
        </div>
        

        <input type="submit" value="Next" onclick='checkName()'>
    </div>

    style="display:none;"
-->


    <div class="section2" >

        <h3>Personal Information</h3>

        <div class="email" >
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="e.g., 1234567890">
        </div>

        <div class="Phone">
            <label for="email">Phone Number</label>
            <input type="text" id="Phone" oninput="validateNumericInput(this)" placeholder="e.g., 1234567890">
        </div>

        <div id="button-container">
        <input type="submit" value="Next" onclick='checkEmail()'>
        <input type="submit" value="Back" onclick='goTo("section2", "section1")'>
        </div>
        
    </div>

   <div class="secion3">
    
   </div>

<!--

    <div class="section3" style="display:none;">
        <h3>Account Information</h3>

        <div class="email" >
            <label for="AccountN">Username</label>
            <input type="text" id="accountN" >
        </div>

        <div class="Password" >
            <label for="Password">Password</label>
            <input type="text" id="password" >
        </div>

        <div class="PasswordC" >
            <label for="Password">Enter Again</label>
            <input type="text" id="passwordC" >
        </div>
        
    

        <div id="button-container">
            <input type="submit" value="Next" onclick='checkUname()'>
            <input type="submit" value="Back" onclick='goTo("section3", "section2")'>
        </div>
        
    </div>

-->

            <!--
                
            
            <div class="password">
                <label for="password">Password</label>
                <input type="password" id="password" name="password">
            </div>
            -->
            
            
            
            
            <!--
                <input type="submit" value="Sign Up">
            -->

            <div class="section4" style="display:none;">
                this 
                <input type="submit" onclick="print()">
            </div>      
        </form>
    </div>

    <div class="cant">
        <a href="signin.php">Already have an Account! Sign in HERE.        </a>
    </div>


    <style>
        #button-container 
        {
            display: flex   ;
            justify-content: space-between;
            margin-bottom: 10px;
        }

        #button-container input[type="submit"] 
        {
            width: 48%;
        }
    </style>

    <script src="signup.js"></script>
</body>
</html>