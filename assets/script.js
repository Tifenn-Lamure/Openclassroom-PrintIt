var FlecheGauche = document.querySelector(".arrow_left");
var FlecheDroite = document.querySelector(".arrow_right");

var slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

FlecheGauche.addEventListener("click", function() {
	console.log('flèche gauche');
});

FlecheDroite.addEventListener("click", function() {
	console.log('flèche droite');
});

var Points = document.querySelector(".dots");

var div = `
	<div class="dot"></div>
	`;
var pointsDiv = `
	<div class="dot dot_selected"></div>
	`;
for(var i=1; i < slides.length; i++) {
	pointsDiv = pointsDiv + div;
}

Points.innerHTML = pointsDiv;