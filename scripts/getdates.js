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

// TODO: page visits

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