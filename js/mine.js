
var pNameInput = document.getElementById("pNameId");
var pPriceInput = document.getElementById("pPriceId");
var pCatInput = document.getElementById("pCatId");
var pDescInput = document.getElementById("pDescId");

allProducts = [];

if( localStorage.getItem("myOnlieStore") != null)
{

    allProducts = JSON.parse( localStorage.getItem("myOnlineStore"));
    displayProducts(); // Loop array --> allProducts


}


function addProduct()
{

var pNamevalue =  pNameInput.value;
 var pPricevalue = pPriceInput.value;
 var pCatvalue = pCatInput.value;
 var pDescvalue = pDescInput.value;


var oneProduct ={ name: pNamevalue ,price:pPricevalue ,cat:pCatvalue ,desc:pDescvalue  }

console.log(oneProduct);
//===========================================
allProducts.push(oneProduct);
localStorage.setItem("myOnlineStore" ,JSON.stringify(allProducts));

//==============display=============
displayProducts();

clearInputs();

}

function clearInputs(){

    pNameInput.value = "";
    pPriceInput.value = "";   
    pCatInput.value = "";
    pDescInput.value = "";

}


//=================== display =========================

function displayProducts()
{

    var hasalah = ` `;

    for(var i=0 ; i< allProducts.length ; i++)
    {
        hasalah += ` <tr> 
        
        <td>`+allProducts[i].name+`</td>
        <td>`+allProducts[i].price+`</td>
        <td>`+allProducts[i].cat+`</td>
        <td>`+allProducts[i].desc+`</td>
        <td><button onclick ="UpdateProduct(`+i+`)" class="btn btn-info">Update</button></td>
        <td><button onclick ="deleteProduct(`+i+`)" class="btn btn-info">Delete</button></td>
                
        </tr>`
    }

    document.getElementById("tbody").innerHTML = hasalah;

}


//======================== deleteProduct ========================

function deleteProduct( proIndex )

{

    allProducts.splice(proIndex , 1);
    displayProducts();

    localStorage.setItem("myOnlineStore" , JSON.stringify(allProducts));

}

//============== search ================

function searchProduct(userWord)
{


    var hasalah = ``;

    for( var i = 0 ; i< allProducts.length ; i++)
    {
        if(allProducts[i].name.toLowerCase().includes(userWord.toLowerCase));

 
        {
            hasalah += ` <tr> 
            <td>`+ i +`</td>            
            <td>`+allProducts[i].name+`</td>
            <td>`+allProducts[i].price+`</td>
            <td>`+allProducts[i].cat+`</td>
            <td>`+allProducts[i].desc+`</td>
                    
            </tr>`
        }   

    }

    document.getElementById("tbody").innerHTML = hasalah;

}