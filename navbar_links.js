// Create container div
var containerDiv = document.createElement("div");
containerDiv.classList.add("main-content");

// Create navbar div
var navbarDiv = document.createElement("nav");
navbarDiv.classList.add("navbar");
navbarDiv.classList.add("navbar-expand-lg");
navbarDiv.classList.add("navbar-light");
navbarDiv.classList.add("bg-light");

// Create collapsibleNavbar div
var collapsibleNavbarDiv = document.createElement("div");
collapsibleNavbarDiv.classList.add("collapse");
collapsibleNavbarDiv.classList.add("navbar-collapse");
collapsibleNavbarDiv.id = "collapsibleNavbar";

// Create ul element
var ulElement = document.createElement("ul");
ulElement.classList.add("navbar-nav");

// Create list items
var navItems = [
    "Home",
    "Shop",
    "Top Chair",
    "Chair",
    "Brands",
    "Contact"
];

navItems.forEach(function(item) {
    var liElement = document.createElement("li");
    liElement.classList.add("nav-item");

    var aElement = document.createElement("a");
    aElement.classList.add("nav-link");
    aElement.href = "#";
    aElement.textContent = item;

    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
});

collapsibleNavbarDiv.appendChild(ulElement);
navbarDiv.appendChild(collapsibleNavbarDiv);
containerDiv.appendChild(navbarDiv);

// Create content div
var contentDiv = document.createElement("div");
contentDiv.classList.add("content");

var h1Element = document.createElement("h1");
h1Element.textContent = "Make Your Home Amazing place.";

var pElement = document.createElement("p");
pElement.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus modi illum cumque velit consectetur?";

var divBtn1 = document.createElement("div");
divBtn1.id = "btn1";
var buttonElement = document.createElement("button");
buttonElement.textContent = "Shop Now";
divBtn1.appendChild(buttonElement);

contentDiv.appendChild(h1Element);
contentDiv.appendChild(pElement);
contentDiv.appendChild(divBtn1);

containerDiv.appendChild(contentDiv);

// Append container div to the body
document.body.appendChild(containerDiv);
