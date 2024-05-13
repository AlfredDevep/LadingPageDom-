
// Function to create elements
function createElement(elementType, className = '', attributes = {}) {
    const element = document.createElement(elementType);
    if (className) {
        element.className = className;
    }
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    return element;
}

// Create container div
const container = createElement('div', 'container');

// Create services offer title
const title = createElement('h3', 'text-center');
title.textContent = 'SERVICES WE OFFER';
title.style.paddingTop = '30px';
container.appendChild(title);

// Create row div
const row = createElement('div', 'row');
row.style.marginTop = '50px';

// Services data
const services = [
    {
        imageSrc: './image/c1.png',
        title: 'CUSTOM MENUS',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam vitae facere eius modi iure possimus, soluta ea inventore. Omnis!'
    },
    {
        imageSrc: './image/c2.png',
        title: 'SMARTEST WAY',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam vitae facere eius modi iure possimus, soluta ea inventore. Omnis!'
    },
    {
        imageSrc: './image/c3.png',
        title: 'USER FRIENDLEY',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam vitae facere eius modi iure possimus, soluta ea inventore. Omnis!'
    }
];

// Create card for each service
services.forEach(service => {
    const col = createElement('div', 'col-md-4 py-3 py-md-0');
    const card = createElement('div', 'card');
    const image = createElement('img', 'card-img-top');
    image.src = service.imageSrc;
    image.alt = '';
    const cardBody = createElement('div', 'card-body');
    const cardTitle = createElement('h5', 'card-title text-center');
    cardTitle.textContent = service.title;
    const description = createElement('p', 'text-center');
    description.textContent = service.description;
    const btnDiv = createElement('div', 'text-center');
    const button = createElement('button', 'btn btn-primary');
    button.textContent = 'View More';
    btnDiv.appendChild(button);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(description);
    cardBody.appendChild(btnDiv);
    card.appendChild(image);
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);
});

container.appendChild(row);
document.body.appendChild(container);
