let lastModified = document.lastModified;
let paragraph = document.getElementById("lastModified");

if (paragraph) {
    paragraph.textContent = `Last Modified: ${lastModified}`;
}