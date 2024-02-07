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
    if (modeButton.textContent === "Dark") {
        toggleDarkMode(footer);
        sections.forEach(section => toggleDarkMode(section));
        toggleDarkMode(header);
        // specific elements
        toggleDarkMode(nyc);

        main.style.background = "#1d2d46";
        main.style.color = "#ffffff";
        modeButton.textContent = "Light";
    } else {
        main.style.color = "#ffffff";
        main.style.background = "#1d2d46";
        toggleLightMode(footer);
        toggleLightMode(header);
        sections.forEach(section => toggleLightMode(section));
        modeButton.textContent = "Dark";
    }

    function toggleDarkMode(element) {
        element.setAttribute("class", "dark-mode");
    }
    function toggleLightMode(el) {
        el.setAttribute('class', 'light-mode');
    }
});

