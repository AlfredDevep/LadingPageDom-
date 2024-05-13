// Create container
const containers = document.createElement('div');
containers.classList.add('container');

// Create heading
const heading = document.createElement('h1');
heading.classList.add('text-center');
heading.style.marginTop = '20px';
heading.style.marginBottom = '20px';
heading.textContent = 'ABOUT';
containers.appendChild(heading);

// Create row
const rows = document.createElement('div');
rows.classList.add('row');
rows.style.marginTop = '50px';

// Create left column
const leftCol = document.createElement('div');
leftCol.classList.add('col-md-6', 'py-3', 'py-md-0');

// Create card inside left column
const leftCard = document.createElement('div');
leftCard.classList.add('card');

// Create image inside card
const image = document.createElement('img');
image.src = './image/about.png';
image.alt = '';
leftCard.appendChild(image);

leftCol.appendChild(leftCard);

// Create right column
const rightCol = document.createElement('div');
rightCol.classList.add('col-md-6', 'py-3', 'py-md-0');

// Create text paragraph inside right column
const text = document.createElement('p');
text.innerHTML = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, saepe possimus quo, quasi animi natus nulla beatae neque soluta pariatur id ducimus eum, sed quis enim minima? Fugiat delectus quo optio nemo voluptatem ullam officiis neque exercitationem tenetur eum corporis quas in esse blanditiis, quasi animi nam eos! Tempora deleniti eligendi magni ex voluptatum ut dicta nemo et consequuntur distinctio quae atque porro inventore assumenda, nihil odio iusto accusamus libero error nam aut, at praesentium cum reiciendis. Possimus consequatur obcaecati at illum in dolores earum vero ipsum. Ipsam vitae adipisci corrupti totam vel consequuntur fugiat. Perferendis fuga doloremque tempora, in eos, voluptates iure, optio qui modi ex ea saepe. Eum perspiciatis, voluptates fugiat nesciunt corrupti minima aliquam repellat, ea quasi natus, recusandae aut nobis modi. Commodi, alias reiciendis reprehenderit hic soluta consectetur corporis accusantium placeat, totam minima nostrum magnam dolorum aut dolore, sapiente ea. Magni est quo ipsam nisi iste.`;
rightCol.appendChild(text);

// Create "Read More" button inside right column
const btnDiv = document.createElement('div');
btnDiv.id = 'btn4';
const btn = document.createElement('button');
btn.textContent = 'Read More...';
btnDiv.appendChild(btn);
rightCol.appendChild(btnDiv);

// Append columns to row
rows.appendChild(leftCol);
rows.appendChild(rightCol);

// Append row to container
containers.appendChild(rows);

// Append container to the body
document.body.appendChild(containers);
