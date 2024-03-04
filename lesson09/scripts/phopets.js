const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const h2 = document.createElement("h2");
        const firstP = document.createElement("p");
        const secondP = document.createElement("p");
        firstP.textContent = `${prophet.birthdate}`;
        secondP.textContent = `${prophet.birthplace}`;
        const img = document.createElement("img");
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        img.setAttribute("src", prophet.imageurl);
        img.setAttribute("alt", `${prophet.name} ${prophet.lastname} Image`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "340");
        img.setAttribute("height", "440");

        card.appendChild(h2);
        card.appendChild(img);
        card.appendChild(firstP);
        card.appendChild(secondP);
        cards.appendChild(card);
        cards.setAttribute("class", "grid");


    });
}

