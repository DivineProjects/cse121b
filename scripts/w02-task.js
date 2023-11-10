/* W02-Task - Profile Home Page */
/*let name= document.querySelector()
/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName= "Divine Jigu";
let currentYear= new Date();
let profilePicture="images/jigu.jpg";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement= document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */

/*Assign the nameElement's innerHTML property the fullName variable value.*/
nameElement.innerHTML= `<strong>${fullName}</strong>`;

/*Use the textContent property to set the value of the element to the value of the variable currentYear.*/
yearElement.textContent= currentYear.getFullYear();

/* set the src property of the image element */
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt",`Profile image of ${fullName}`);


/* Step 5 - Array */
/* add favorite food */ 
let favoriteFoods= ['Fruit Salad','Macaroni & Cheese','Pork Burger'];

foodElement.innerHTML = `${favoriteFoods}<br>`;

/* add another favorite food*/
let anotherFavorFood= "Fried Chicken";
favoriteFoods.push(anotherFavorFood);
foodElement.innerHTML += `${anotherFavorFood}<br>`;

/* Remove the first element in the favorite food array. append the array output */
favoriteFoods.shift();
foodElement.innerHTML += `${favoriteFoods}<br>`;

/* Remove the last element in the favorite food array.
    Append the array output  */
favoriteFoods.pop();
foodElement.innerHTML += `${favoriteFoods}<br>`;


