const test = document.getElementById('test');

test.innerText = "My name is Erastus"

// creating a new element
const newItem = document.createElement("h1");
const headingTitle = document.createTextNode("My name is Erastus and heading is ");

newItem.appendChild(headingTitle);

const printtodom = document.getElementById('newElement');
printtodom.appendChild(newItem);

// creating favourite dish list
const newDish = document.createElement("h2");
const dishHeading = document.createTextNode("My name is Erastus and my favourite dish is Biryani");

newDish.appendChild(dishHeading);

const printtodish = document.getElementById('newDish');
printtodish.appendChild(newDish);

// creating color list
const newColor = document.createElement("h3")
const colorType = document.createTextNode("My favourite Color is Blue");

newColor.appendChild(colorType);

const printtocolor = document.getElementById("newColor");
printtocolor.appendChild(newColor);

// creating pet list
const newPet = document.createElement("h3")
const petType = document.createTextNode("My favourite Pet is Simba");

newPet.appendChild(petType);

const printtopet = document.getElementById("newPet");
printtopet.appendChild(newPet);