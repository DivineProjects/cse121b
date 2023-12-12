/* W06: Project */

/* Declare and initialize global variables */
const catElement = document.querySelector("#cats");
let catList= [];

/* async displayTemples Function */
const displayCats = (cats, urlTag="") => {
    reset();

    // loops through and 
    // displays images of cats
    cats.forEach(cat => {
        // declare variables
        let articleElement= document.createElement("article");
        let urls= `https://cataas.com/cat?${cat._id}`;
        let catImg = document.createElement("img");
        catImg.setAttribute('src',urls);

        // change the H2 tag
        if (urlTag == ''){
            document.querySelector("h2").innerText = 'All';
        }
        else
        {
            document.querySelector("h2").innerText = urlTag;
        };

        // create div elements for displaying images
        articleElement.appendChild(catImg);
        catElement.appendChild(articleElement);
    });
};

/* async getCats Function using fetch()*/
const getCat = async () =>{
    const response = await fetch("https://cataas.com/api/cats");
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        catList= await response.json();
        displayCats(catList); 
      }
};

/* reset Function */

const reset = () => {
    catElement.innerHTML = ""; 
};

/* async getTags Function using fetch()*/
const getTags = async (urlTag) =>{
    const response = await fetch(`https://cataas.com/api/cats?tags=${urlTag}`);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        catList= await response.json();
        displayCats(catList, urlTag); 
      }
};

/* Initiate website */
getCat();

/* get filtered Tagged images using event listerners */
const buttons= (tag) => {
    document.querySelector(`#${tag}Button`).addEventListener("click",() => getTags(tag));
}


document.querySelector("#cute").addEventListener("click",() => getTags('cute'));
document.querySelector("#funny").addEventListener("click",() => getTags('funny'));
document.querySelector("#sleepy").addEventListener("click",() => getTags('sleepy'));
document.querySelector("#all").addEventListener("click",() => getCat());