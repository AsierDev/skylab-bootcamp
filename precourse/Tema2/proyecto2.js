/*Programa una inferfaz de usuario para una aerolinea (por terminal...). Esta aerolinea dispondrá de 10 vuelos para el dia de hoy, para empezar, estos vuelos estarán declarados de manera global, cuando se llame a la función:

Se preguntará por el nombre de usuario y dará la bienvenida.
El usuario visualizará todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
A continuación, el usuario verá el coste medio de los vuelos.
También podrá ver cuantos vuelos efectúan escalas.
Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.*/

var flights = [
{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
]

function skyAir() {
	var averageCost = 0;
	var scales = 0;
	var noScales = 0;
	var lastFive = [];
//Se preguntará por el nombre de usuario y dará la bienvenida.	
	var user = prompt("What's your name?");
	alert("Welcome " + user);
	flights.forEach(function(obj) {
//El usuario visualizará todos los vuelos disponibles de una forma amigable:
		if (obj.scale == true) {
			 console.log("El vuelo con origen "+obj.from+" y destino "+obj.to+" realizará escala y tiene un coste de "+obj.cost+"€");
		}	else {
			console.log("El vuelo directo con origen "+obj.from+" y destino "+obj.to+" tiene un coste de "+obj.cost+"€");
		}
		
//A continuación, el usuario verá el coste medio de los vuelos.	
		averageCost += obj.cost / flights.length;
//También podrá ver cuantos vuelos efectúan escalas.
		if (obj.scale == true) {
			scales = scales +1;
		}	else {
			noScales = noScales +1;
		}
//Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.
		lastFive.push(obj.to);
	});	
	console.log("El precio medio de los vuelos es de "+averageCost+"€");
	console.log("Hay "+scales+" vuelos que hacen escala y "+noScales+" que no hacen");
	console.log("Los últimos destinos del día son "+lastFive.slice(-5));
}

skyAir()