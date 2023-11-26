/* LESSON 3 - Programming Tasks */


/* FUNCTIONS */

// check if a value is a float
function isFloat(value) {
    if (
      typeof value === 'number' &&
      !Number.isNaN(value) && value == ""
    ) {
      return true;
    }
    
    return false;
  }

/* Function Definition - Add Numbers */
function add(number1,number2){
    if(isFloat(number1) == true || isFloat(number2) == true){
        alert("Number must be filled out");
        
        return "";
    }
    else{
        return number1 +  number2;
    }
}

function addNumbers(){
    let addNumber1= Number(document.querySelector('#add1').value); 
    let addNumber2= Number(document.querySelector("#add2").value);
    
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click",addNumbers);

/* Function Expression - Subtract Numbers */

function subtract(number1, number2) {
    if(isFloat(number1) == true || isFloat(number2) == true){
        alert("Number must be filled out");

        return "";
    }
    else{
        return number1 - number2;
    }
}

function subtractNumbers(){
    let subNumber1 = Number(document.querySelector("#subtract1").value);
    let subNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subNumber1,subNumber2);
}
document.querySelector("#subtractNumbers").addEventListener("click",subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply(number1, number2) {
    if(isFloat(number1) == true || isFloat(number2) == true){
        alert("Number must be filled out");
        return "";
    }
    else{
        return number1 * number2;
    }
}

function multiplyNumbers(){
    let multNumber1 = Number(document.querySelector("#factor1").value);
    let multNumber2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(multNumber1,multNumber2);
}
document.querySelector("#multiplyNumbers").addEventListener("click",multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    if(isFloat(number1) == true || isFloat(number2) == true){
        alert("Number must be filled out");

        return "";
    }
    else{
        return number1 / number2;
    }
}

function divideNumbers(){
    let divNumber1 = Number(document.querySelector("#dividend").value);
    let divNumber2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(divNumber1,divNumber2);
}
document.querySelector("#divideNumbers").addEventListener("click",divideNumbers);



/* Decision Structure */

function total(){
    let numericValue = Number(document.querySelector("#subtotal").value);
    const total= document.querySelector("#total");
    var checkInput = document.querySelector("#member").checked;

    if (checkInput == true){
        total.innerHTML = `$ ${(numericValue - (numericValue*15/100)).toFixed(2)}`;
    }
    else
    {
        total.innerHTML = `$ ${numericValue.toFixed(2)}`;
    }
    
}



document.querySelector("#getTotal").addEventListener("click",total);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").innerHTML = numbersArray;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(number => number %2 === 1);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(value => value %2 ===0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
const sumOf = numbersArray.map(number => number * 2);
document.querySelector("#sumOfMultiplied").innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);