var Input = []; 

function checkName() 
{
    event.preventDefault();
    var allFieldsFilled = false;
    var section1 = document.querySelector('.section1');
    var section2 = document.querySelector('.section2');

    Input[0] = document.getElementById("fname").value;
    Input[1] = document.getElementById("lname").value;
    Input[2] = document.getElementById("dob").value;

    if(Input[0] != "" && Input[1] != "" && Input[2] != "")
        allFieldsFilled = true;


    if (allFieldsFilled) 
        changesection(section1, section2);
    
    else 
        AlertF();
    
}


function checkEmail()
{
    
    event.preventDefault();
    var allFieldsFilled = false;

    var section2 = document.querySelector('.section2');
    var section3 = document.querySelector('.section3');

    var emailInput = document.getElementById("email").value;
    var phoneInput = document.getElementById("Phone").value;

    
    //var phoneValue = phoneInput.value.trim();
    //var emailValue = emailInput.value.trim();
    
    var ph = false, ema = false;
    

    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailValue)) 
    {
        alert("Please enter a valid email address.");
        emailInput.focus();
    }
    ema = true;
    

    var phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phoneValue)) 
    {
        alert("Please enter a valid 10-digit phone number.");
        phoneInput.focus();
    }
    ph
    Input[3] = emailValue;
    Input[4] = phoneValue;

    if(Input[3] != "" && Input[4] != "")
        allFieldsFilled = true;


    if (allFieldsFilled && ema && ph) 
        changesection(section2, section3);
    else 
        AlertF();
}


function checkUname()
{
    event.preventDefault();
    var allFieldsFilled = false;
    var a = 1;
    

    var section3 = document.querySelector('.section3');
    var section4 = document.querySelector('.section4');
    
    Input[5] = document.getElementById("accountN").value;
    Input[6] = document.getElementById("password").value;
    var check = document.getElementById("passwordC").value;

    if (Input[5] !== "" && Input[6] !== "" && check !== "") 
        if (Input[6] === check) 
            allFieldsFilled = true;
        else
        {
            alert("Passwords do not match. Please enter them again.");
            a = 0;
        }
    alert(allFieldsFilled);

    if (allFieldsFilled) 
        changesection(section3, section4);
    else if(allFieldsFilled == false && a == 1)
        AlertF();
}

function print()
{
    event.preventDefault();
    for (let i = 0; i < Input.length; i++) {
        alert(Input[i]);
        
    }
}
/**
 * 
 
function checkEmail()
{
    var allFieldsFilled = false;

    alert(allFieldsFilled);
    var section2 = document.querySelector('.section2');
    var section3 = document.querySelector('.section3');

    Input[3] = document.getElementById("email").value;
    Input[4] = document.getElementById("Phone").value;

    if(Input[3] != "" && Input[4] != "")
        allFieldsFilled = true;

        alert(allFieldsFilled);

    if (allFieldsFilled) 
        changesection(section2, section3);
    else 
        Alert();
}

 */

function changesection(sectionFrom, sectionTo)
{
    sectionFrom.style.display='none';
    sectionTo.style.display='block';
    
}
function AlertF()
{
    alert("Please fill in all the boxes");
}