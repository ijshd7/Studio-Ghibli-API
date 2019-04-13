// Fetching data 

fetch('https://ghibliapi.herokuapp.com/films')
	.then(response => {
		return response.json()
	})
	.then(data => {
		for (var i = 0; i < data.length; i++) {
		// Create a div with a card class
		const card = document.createElement('div')
		card.setAttribute('class', 'card')

		// Create an h1 and set the text content to the film's title
		const h1 = document.createElement('h1')
		h1.textContent = data[i].title

		// Create a p and set the text content to the film's description
		const p = document.createElement('p')
		data[i].description = data[i].description.substring(0, 300) //Limits to 300 characters
		p.textContent = `${data[i].description}...` // End with an ellipses

		// Append the cards to the container element
		container.appendChild(card)

		// Each card will contain an h1 and a p
		card.appendChild(h1)
		card.appendChild(p)
		}

		// for (var i = 0; i < data.length; i++) {
		// 	console.log(data[i].title + ' is a movie about ' + data[i].description)
		// }
	})
	.catch(err => {
		const errorMessage = document.createElement('error')
		errorMessage.textContent = `Oh no, it's not working!`
		app.appendChild(errorMessage);
	});

// Access our div with id of root
const app = document.getElementById('root')

// Create logo (obtained via Tania Rascia)
const logo = document.createElement('img')

// Set logo's source
logo.src = 'logo.png';

// Create another div, and set its class attribute to container
const container = document.createElement('div');
container.setAttribute('class', 'container');

// Use appendChild method to append the logo image and container div to the app root
app.appendChild(logo);
app.appendChild(container);

