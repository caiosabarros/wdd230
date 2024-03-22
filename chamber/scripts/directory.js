const members = "data/members.json";
const baseUrl = "https://caiosabarros.github.io/wdd230/chamber"


//----GRID/LIST LAYOUT----------------------------------------

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

//---------DISPLAY JSON DATA---------------
async function getCompanies() {
	const companies = await fetch(members);
	const data = await companies.json();
	displayMembers(data.members);
}

function displayMembers(members) {
	const list = document.getElementById("article");
	members.forEach(member => {
		// create section
		const section = document.createElement("section");
		// create sub elements of section
		const img = document.createElement("img");
		const h3 = document.createElement("h3");
		const addressP = document.createElement("p");
		const phoneP = document.createElement("p");
		const levelP = document.createElement("p");
		const emailP = document.createElement("p");
		const anchorSite = document.createElement("a");
		// add attributes to the sub elements
		img.setAttribute("src", member.info[0].image);
		img.setAttribute("alt", `${member.info[0].name} logo`);
		h3.textContent = `${member.info[0].name}`;
		h3.style.color = "white";
		addressP.textContent = `${member.info[0].address}`;
		addressP.style.color = "white";
		phoneP.textContent = `${member.info[0].phone}`;
		phoneP.style.color = "white";
		levelP.textContent = `Membership Level: ${member.info[0].level}`;
		levelP.style.color = "white";
		emailP.textContent = `${member.info[0].email}`;
		emailP.style.color = "white";
		anchorSite.setAttribute("href", `${member.info[0].url}`);
		anchorSite.textContent = `${member.company}'s site`;
		// append the sub elements of section to section
		section.appendChild(img);
		section.appendChild(h3);
		section.appendChild(addressP);
		section.appendChild(phoneP);
		section.appendChild(levelP);
		section.appendChild(emailP);

		// append section to `list`
		list.appendChild(section);
	});
}

// TODO: Light/dark modes
// TODO: list button when clicked makes thing overflow other elements

getCompanies();
