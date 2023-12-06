/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList= [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let articleElement= document.createElement("article");
        let templeName = document.createElement("h3");
        templeName.innerText = temple.templeName;

        let templeImg = document.createElement("img");
        templeImg.setAttribute('src',temple.imageUrl);
        templeImg.setAttribute("alt", temple.location);

        articleElement.appendChild(templeName);
        articleElement.appendChild(templeImg);
        templesElement.appendChild(articleElement);

    });
};


/* async getTemples Function using fetch()*/
const getTemples = async () =>{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        templeList= await response.json();
        console.log(templeList); // Log inside the async function
        displayTemples(templeList); 
      }
};
getTemples();
  

/* reset Function */

const reset = () => {
    templesElement.innerHTML = ""; 
};



/* sortBy Function */

const sortBy = (temples) => {
    reset();
    let filter = document.querySelector("#sortBy").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
    }
}


/* Event Listener */
document.querySelector("#sortBy").addEventListener("change",() => sortBy(templeList));