
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// nyc below
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=40.76&lon=-73.97&appid=6d7ca3e10d96adca7d3636cb6d24fdcf`;

// Trier, Germany
const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=6d7ca3e10d96adca7d3636cb6d24fdcf`;

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