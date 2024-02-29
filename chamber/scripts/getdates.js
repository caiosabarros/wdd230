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

const modeButton = document.getElementById("mode");
const main = document.querySelector("main");
const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");
const header = document.querySelector("header");
const nyc = document.getElementById("nyc");


// dark mode below
modeButton.addEventListener("click", () => {

    if (modeButton.textContent === "Light") {
        toggleLightMode(footer);
        toggleLightMode(header);
        sections.forEach(section => toggleLightMode(section));
        main.style.color = "#ffffff";
        main.style.background = "#1d2d46";
        modeButton.textContent = "Dark";
    } else {
        toggleDarkMode(footer);
        toggleDarkMode(header);
        sections.forEach(section => toggleDarkMode(section));
        // specific elements
        toggleDarkMode(nyc);

        main.style.background = "#1d2d46";
        main.style.color = "#ffffff";
        modeButton.textContent = "Light";
    }

    function toggleDarkMode(element) {
        element.setAttribute("class", "dark-mode");
    }
    function toggleLightMode(el) {
        el.setAttribute('class', 'light-mode');
    }
});

/**
 * Page visits 
 */

// get element 
let lastVisitDisplay = document.querySelector(".track");
// get the last visit 
let lastVisit = Number(window.localStorage.getItem("lastVisit")) || 0;

if (lastVisit === 0) {
    lastVisitDisplay.textContent = `Welcome! Let us know if you have any questions.`;
} else {
    // get the current timestamp user has visited.
    const today = Date.now();
    const days = Number((lastVisit - today) / 84600000);
    if (days < 1) {
        lastVisitDisplay.textContent = `Back so soon! Awesome!`;
    } else {
        lastVisitDisplay.textContent = `You last visited ${days.toFixed(0)} days ago.`;
    }
}

localStorage.setItem("lastVisit", Date.now());
/**
 * const today = Date.now();
const christmasDate = new Date(Date.UTC(theDateToday.getFullYear(), 11, 25));
// check if is the waing days of December, if so ... change to next year.
if (theDateToday.getMonth() == 11 && theDateToday.getDate() > 25) {
    christmasDate.setFullYear(christmasDate.getFullYear() + 1);
}
// find difference between epoch times in ms and convert to days
let daysleft = (christmasDate.getTime() - Date.now()) / msToDays;
 */

/* ---------- FORMS -------------*/

document.addEventListener('DOMContentLoaded', currentTimestamp);

function currentTimestamp() {
    const input = document.getElementById("timestamp");
    input.value = Date.now();
}

