

//დავალება 1:

const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    
    btn.style.display = 'none';

    const magic = document.getElementById("magic");
    
    magic.style.display = 'block';
})

//დავალება 2:

const img = document.createElement('img');
img.src ="https://fastly.picsum.photos/id/405/1400/800.jpg?hmac=4CRI7OpfDWtP4EydVd4Z-1NKSGhBmpZq8OaEXVu3be8";
document.body.appendChild(img);
img.alt = "image_from_web";
img.className= "webImage";
img.style.width = "100%";

//დავალება 3-4:

const characters = [
	{
		first_name: "Harry",
		last_name: "Potter",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/harry.jpg",
		actor: "Daniel Radcliffe",
	},
	{
		first_name: "Hermione",
		last_name: "Granger",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
		actor: "Emma Watson",
	},
	{
		first_name: "Ron",
		last_name: "Weasley",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/ron.jpg",
		actor: "Rupert Grint",
	},
	{
		first_name: "Draco",
		last_name: "Malfoy",
		house: "Slytherin",
		image: "http://hp-api.herokuapp.com/images/draco.jpg",
		actor: "Tom Felton",
	},
];

const charDiv = document.querySelector("#characters-list");

function renderCharacters() {
	const html = characters.map((el) => {
		return `<div class="darkblue">

			<p class="actor">${el.first_name}</p>
			<p class="actor">${el.last_name}</p>
			<p class="actor">${el.house}</p>
			<img class="actor">${el.image}</img>
		</div>`;
	});

	console.log(html.join(""));
	charDiv.innerHTML = html.join("");
}

renderCharacters();
