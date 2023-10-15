/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('div');
var templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(display => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.innerHTML = templeName;
        let img = document.createElement('img');
        img.src = imageURL;
        img.alt = location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    })
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }
}
/* reset Function */
const reset = function () {
    let clear = document.querySelector('templesElement');
    clear.removeChild(document.querySelector('article'));
}

/* sortBy Function */
const sortBy = function (temples) {
    reset();
    var filter = document.querySelector('#sortBy');
    switch (filter) {
        case "utah":
            displayTemples(temples);
            location = "utah";
            break;
        case "nonutah":
            displayTemples(temples);
            location != "utah";
            break;
        case "older":
            displayTemples(temples);
            dedicated < new Date(1950, 0, 1);
            break;
        case "all":
            displayTemples(temples);
            break;

    }
}

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy (templeList)})
getTemples();