// Create footer element
const footers = document.createElement('footer');
footers.id = 'footer';

// Create h1 element for the title
const titles = document.createElement('h1');
titles.classList.add('text-center');
titles.textContent = 'Furniture';
footers.appendChild(titles);

// Create paragraph element for the description
const descriptions = document.createElement('p');
descriptions.classList.add('text-center');
descriptions.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ab?';
footers.appendChild(descriptions);

// Create div for icons
const iconDiv = document.createElement('div');
iconDiv.classList.add('icons', 'text-center');

// Array of icon class names
const iconClassNames = ['bx bxl-twitter', 'bx bxl-facebook', 'bx bxl-google', 'bx bxl-skype', 'bx bxl-instagram'];

// Create icon elements and append them to the icon div
// Create icon elements and append them to the icon div
// Create icon elements and append them to the icon div
iconClassNames.forEach(className => {
    const icon = document.createElement('i');
    // Split classNames with space into separate classes
    const classes = className.split(' ');
    classes.forEach(cls => {
        icon.classList.add(cls);
    });
    iconDiv.appendChild(icon);
});

footers.appendChild(iconDiv);

// Create copyright div
const copyrightDiv = document.createElement('div');
copyrightDiv.classList.add('copyright', 'text-center');
copyrightDiv.innerHTML = '&copy; Copyright <strong><span>Furniture</span></strong>. All Rights Reserved';
footers.appendChild(copyrightDiv);

// Create credit div
const creditDiv = document.createElement('div');
creditDiv.classList.add('credite', 'text-center');
creditDiv.innerHTML = 'Designed By <a href="#">Criss</a>';
footers.appendChild(creditDiv);

// Append the footer to the body
document.body.appendChild(footers);
