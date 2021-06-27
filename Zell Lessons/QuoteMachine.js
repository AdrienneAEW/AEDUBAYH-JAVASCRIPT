fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "2b0d3cb2b7mshdd00cd5194d6733p182ce8jsn5ae7ff06b77a",
		"x-rapidapi-host": "quotes15.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});