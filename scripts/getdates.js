let lastModified = document.lastModified;
let paragraph = document.getElementById("lastModified");

if (paragraph) {
    paragraph.textContent = `Last Modified: ${lastModified}`;
}

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


/**
 * Page visits 
 */

let visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;
console.log(`numVisits: ${numVisits}`);

if (numVisits !== 0) {
    if (numVisits === 1) {
        visitsDisplay.textContent = `You've been here once!`;
    } else {
        visitsDisplay.textContent = `You've been here ${numVisits} times`;
    }
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits", numVisits);


//****************************************************************** */


// weather API

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// nyc below
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=40.76&lon=-73.97&units=imperial&appid=6d7ca3e10d96adca7d3636cb6d24fdcf`;

// Trier, Germany
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=6d7ca3e10d96adca7d3636cb6d24fdcf`;

async function apitFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (err) {
        console.log(err);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = ` ${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", `${desc} icon`);
    captionDesc.textContent = `${desc}`;
}

apitFetch();