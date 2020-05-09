function myFunction() {
	var x = document.getElementById("mynavigationBar");
	if (x.className === "navigationBar") {
		x.className += " responsive";
	} else {
		x.className = "navigationBar";
	}
}

const app = document.getElementById('feed');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://www.instagram.com/nfl/?__a=1', true);
request.onload = function () {

// Accessing feed data here
	var data = JSON.parse(this.response);
	if (request.status >= 200 && request.status < 400) {
		
	} else {
		const errorMessage = document.createElement('marquee');
		errorMessage.textContent = `Error. Something went wrong.`;
		app.appendChild(errorMessage);
	}
}

request.send();