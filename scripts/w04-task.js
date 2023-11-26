/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile= {
    name: "Divine Jigu",
    photo: "images/jigu.jpg",
    favoriteFoods: ["Grapes", "Mangoes", "Apple", "Macaroni and Cheese"],
    hobbies: ["Soccer", "Basketball", "Hicking", "Cricket", "Movies"],
    placesLived: [],
    
};

document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place: "Bulawayo",
    length: "3 years"
});
myProfile.placesLived.push({
    place: "Johanesburg",
    length: "2 years"
});


/* DOM Manipulation - Output */
document.querySelector("#name").textContent = myProfile.name;
document.querySelector("#photo").innerHTML = `<img id="photo" src="${myProfile.photo}" alt="${myProfile.name}">`;








/* Name */

/* Photo with attributes */


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let lifo= document.createElement('li');
    lifo.textContent = food;
    document.querySelector('#favorite-foods').appendChild(lifo);
  });

/* Hobbies List */
myProfile.hobbies.forEach(hobby =>{
    let lu= document.createElement('li');
    lu.textContent = hobby;
    document.querySelector("#hobbies").appendChild(lu);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(lived =>{
    let dtList= document.createElement("dt");
    let ddList= document.createElement("dd");
    dtList.textContent= lived.place;
    document.querySelector("#places-lived").appendChild(dtList);
    ddList.textContent= lived.length;
    document.querySelector("#places-lived").appendChild(ddList);
})
