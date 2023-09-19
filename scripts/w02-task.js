/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Dylan McCann";
let currentYear = "2023";
let profilePicture = "images\MyPicture.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img')

    /* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let myFood = ["Chocolate", " Watermelon", " Eggnog"];
foodElement.innerHTML = myFood;
let favoriteFood = "Hamburger";
myFood.push(favoriteFood);
foodElement.innerHTML += `<br> ${favoriteFood}`;
myFood.shift();
foodElement.innerHTML += `<br> ${myFood}`;
myFood.pop();
foodElement.innerHTML += `<br> ${myFood}`;