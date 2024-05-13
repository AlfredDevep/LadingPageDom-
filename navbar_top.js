// Create container div
var containerDiv = document.createElement("div");
containerDiv.classList.add("container");

// Create navbar-top div
var navbarTopDiv = document.createElement("div");
navbarTopDiv.classList.add("navbar-top");

// Create social-link div
var socialLinkDiv = document.createElement("div");
socialLinkDiv.classList.add("social-link");

// Create twitter icon
var twitterIcon = document.createElement("i");
var twitterImg = document.createElement("img");
twitterImg.src = "./image/twitter.png";
twitterImg.alt = "";
twitterImg.width = "30";
twitterIcon.appendChild(twitterImg);
socialLinkDiv.appendChild(twitterIcon);

// Create facebook icon
var facebookIcon = document.createElement("i");
var facebookImg = document.createElement("img");
facebookImg.src = "./image/facebook.png";
facebookImg.alt = "";
facebookImg.width = "30";
facebookIcon.appendChild(facebookImg);
socialLinkDiv.appendChild(facebookIcon);

// Create google plus icon
var googlePlusIcon = document.createElement("i");
var googlePlusImg = document.createElement("img");
googlePlusImg.src = "./image/google-plus.png";
googlePlusImg.alt = "";
googlePlusImg.width = "30";
googlePlusIcon.appendChild(googlePlusImg);
socialLinkDiv.appendChild(googlePlusIcon);

// Append social-link div to navbar-top div
navbarTopDiv.appendChild(socialLinkDiv);

// Create logo div
var logoDiv = document.createElement("div");
logoDiv.classList.add("logo");
var logoText = document.createElement("h3");
logoText.textContent = "FURNITURE";
logoDiv.appendChild(logoText);

// Append logo div to navbar-top div
navbarTopDiv.appendChild(logoDiv);

// Create icons div
var iconsDiv = document.createElement("div");
iconsDiv.classList.add("icons");

// Create search icon
var searchIcon = document.createElement("i");
var searchImg = document.createElement("img");
searchImg.src = "./image/search.png";
searchImg.alt = "";
searchImg.width = "20";
searchIcon.appendChild(searchImg);
iconsDiv.appendChild(searchIcon);

// Create heart icon
var heartIcon = document.createElement("i");
var heartImg = document.createElement("img");
heartImg.src = "./image/heart.png";
heartImg.alt = "";
heartImg.width = "20";
heartIcon.appendChild(heartImg);
iconsDiv.appendChild(heartIcon);

// Create shopping cart icon
var cartIcon = document.createElement("i");
var cartImg = document.createElement("img");
cartImg.src = "./image/shopping-cart.png";
cartImg.alt = "";
cartImg.width = "25";
cartIcon.appendChild(cartImg);
iconsDiv.appendChild(cartIcon);

// Append icons div to navbar-top div
navbarTopDiv.appendChild(iconsDiv);

// Append navbar-top div to container div
containerDiv.appendChild(navbarTopDiv);

// Append container div to the body
document.body.appendChild(containerDiv);
