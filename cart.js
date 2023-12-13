let items = ['assissin', 'fc5', 'jedi', 'wwz', 'quran', 'bussi', 'head', 'winter', 'hoodie', 'pink', 'black', 'white'];
var totalValue = 0, total;
var asTotal = 79.99, fTotal = 19.99, wTotal = 39.99, jTotal = 49.71;


function reload() 
{
    var existingDiv = document.querySelector('.itemPicture');
    
    
    if(localStorage.getItem('total') == null)
        localStorage.setItem('total', '0');



    for (var i = 0; i < items.length; i++) 
    {
        var divelement = document.createElement('div');
        var para = document.createElement('p');
        var imgElement = document.createElement('img');
        var delicon = document.createElement('i');

        delicon.classList.add('fas', 'fa-trash');
        //console.log(para)
        
        //para.innerHTML = 'Star Wars&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$39.99';'This is the text content for the paragraph.';
        if(items[i] == 'assissin')
            setPriceAndQuantity('assissin', "Assassin's Creed", 79.99, para)

        else if(items[i] == 'fc5')
            setPriceAndQuantity('assissin', "Assassin's Creed", fTotal, para);

        else if(items[i] == 'jedi') 
            setPriceAndQuantity('assissin', "Assassin's Creed", jTotal, para);
        
        else if(items[i] == 'wwz') 
            setPriceAndQuantity('assissin', "Assassin's Creed", wTotal, para); 
            
        else if (items[i] == 'quran') 
            //console.log(3)
            setPriceAndQuantity(items[i], 'Quran Karim', 2.99, para);
            

        else if (items[i] == 'bussi') 
            setPriceAndQuantity(items[i], 'How to Bussiness', 3.49, para);
        
        else if (items[i] == 'head') 
            setPriceAndQuantity(items[i], 'Head Lines', 4.98, para);
        
        else if (items[i] == 'winter') 
            setPriceAndQuantity(items[i], 'Winter Winter', 8.99, para);


        else if (items[i] == 'hoodie') 
            setPriceAndQuantity(items[i], 'Hoodie', 9.99, para);
        
        else if (items[i] == 'pink') 
            setPriceAndQuantity(items[i], 'Pinky Shirt', 3.49, para);
        
        else if (items[i] == 'black') 
            setPriceAndQuantity(items[i], 'Black Shirt', 4.98, para);
        
        else if (items[i] == 'white') 
            setPriceAndQuantity(items[i], 'White Shirt', 8.99, para);
        /*
        
        
        var storedTotal = localStorage.getItem('total');
        totalValue += parseInt(storedTotal, 10) || 0;
        localStorage.setItem('total', totalValue);
        console.log(localStorage.getItem('total'))
*/
/*
        console.log("This is total: "+totalValue)
        totalValue += parseInt(localStorage.getItem('total')) ;
        console.log("This is total: "+localStorage.getItem('total'))
        
        localStorage.setItem('total', totalValue)
        */
          
        

        var imagePath = localStorage.getItem(items[i]);
        // Check if imagePath is not null before creating the img element
        if (imagePath !== null) 
        {
            imgElement.src = imagePath;
    
            imgElement.onload = function () 
            {
                imgElement.onerror = function () 
                {
                    this.remove(); // Remove the img element if the image fails to load
                };
            }
    
    
            
            // Check if the div exists before appending the image
            if (existingDiv) 
            {
                console.log("This is : "+divelement.innerHTML);
                divelement.style.display = 'flex';
                divelement.style.justifyContent = 'space-around';
                para.style.paddingTop="150px";
                delicon.style.paddingTop="150px";
                imgElement.style.paddingBottom="40px";
                imgElement.style.paddingRight="150px";

                if(i > 3)
                {
                    imgElement.style.marginLeft="30px";
                    imgElement.style.marginTop="-20px";
                    imgElement.style.height = '260' + 'px';
                    imgElement.style.width = '150' + 'px';
                }
                existingDiv.appendChild(divelement);//adding div to existing div in cartphp
                console.log(existingDiv);
                divelement.appendChild(imgElement);
                divelement.appendChild(para);
                divelement.appendChild(delicon);

                
                (function (currentGameId) 
                {
                    delicon.addEventListener('click', function () 
                    {
                        var parentDiv = this.parentElement;
                        var addedStatus = currentGameId + 'a';
                        
                        parentDiv.remove();
                        console.log(currentGameId);

                        
                        localStorage.removeItem(currentGameId);
                        localStorage.removeItem(addedStatus);

                        console.log('Removed div with gameId: ' + currentGameId);
                    });
                })(items[i]);
            } 
        }
    }  
}



function setPriceAndQuantity(itemId, itemName, price, paraElement)
{
    var endTotal = document.createElement('p');
    endTotal.id = 'amount';

    var getQuantity = itemId + "Quantity";
    var quantity = localStorage.getItem(getQuantity);

    //console.log(quantity)
    //console.log(getQuantity)

    let item = ['assissin', 'fc5', 'jedi', 'wwz'];
    for(var i = 0; i < 3; i++)
        if(itemId == item[i])
            quantity = 1;
    

    var totalPrice = price * quantity;
    endTotal.innerHTML = totalPrice;

    //totalAmount += totalPrice;

    paraElement.style.display = 'flex'
    paraElement.innerHTML = itemName + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$';
    paraElement.appendChild(endTotal);

    //calculateTotal();
}
