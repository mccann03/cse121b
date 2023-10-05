/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Dylan McCann",
    photo: "/images/MyPicture.png",
    favoriteFoods: [
        'chocolate',
        'watermelon',
        'eggnog'
    ],
    hobbies: [
        'reading',
        'gaming',
        'building models',
        'playing guitar'],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Portland, Oregon',
        length: '1 year'
    },
    {
        place: 'Vancouver, Washington',
        length: '20 years'
    },
    {
        place: 'Rexburg, Idaho',
        length: '18 months'
    }
);

/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;

/* Name */
document.querySelector('#photo').src = myProfile.photo;

/* Photo with attributes */
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dl = document.createElement('dt');
    dl = place;
    document.querySelector('#places-lived').append(dl);
});

myProfile.placesLived.forEach(length => {
    let dl = document.createElement('dd');
    dl = length;
    document.querySelector('#places-lived').append(dl);
});


