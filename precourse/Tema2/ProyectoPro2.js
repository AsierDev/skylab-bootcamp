
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
		var id = 09;
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


	/*Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER,
	 dependiendo de la elección, el programa se comportará de la siguiente manera:

	Si eres ADMIN, la función debería permitir:

	Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, 
	si se intenta introducir uno más, saltará un alert().
	Poder eliminar vuelos mediante el ID.*/


		function typeOfUser() {		
			var admin = prompt("¿Eres admin? S/N").toUpperCase();

			if (admin === "S") {
					var vuelos = prompt("¿Quieres añadir nuevos vuelos? S/N").toUpperCase();
						if (vuelos === "S") {
							if (flights.length > 14) {
								alert("No puedes crear más de 15 vuelos");
								typeOfUser();
							} else {
							
								id = id + 1;
								var to = prompt("Introduce el destino");
								var from = prompt("Introduce el origen");
								var cost  = Number(prompt("Introduce el precio"));
								var scale = Boolean(prompt("¿Tiene escalas el vuelo? true/false"));  

								flights.push({id,to, from, cost, scale})

								console.log(flights)

								var keepGoing = prompt("¿Quieres realizar otra gestión? S/N").toUpperCase();

								if (keepGoing === "S") {
									typeOfUser();
								} else {
									alert("Adios")
								}


							}
						} else {
							var eliminar = prompt("¿Quieres eliminar algún vuelo? S/N").toUpperCase();
								if (eliminar === "S") {
									console.log(flights)
									var idToDelete = prompt("¿Que ID quieres eliminar?");
									delete flights[idToDelete];
									console.log(flights);
								} else {
									alert("Adios");
								}
						}

				} else {
						//Si eres USER la función debería permitir:
						//Buscar por precio , el usuario debería mostrar los datos de los vuelos 
						//encontrados y, indicando el ID, el programa responderá: "Gracias por su compra, vuelva pronto."
						console.log(flights);
						var price = Number(prompt("Introduce el precio máximo que deseas pagar"));

						for (var i = 0; i < flights.length; i++){
							if (flights[i].cost <= price) {
								console.log("Por "+ flights[i].cost + "€ puedes comprar el vuelo cuyo ID es "+ flights[i].id + " con origen "+flights[i].from+ " y destino "+flights[i].to);
							};
						};

						var selection = Number(prompt("Por favor selecciona un ID de la lista"));

						for (var i = 0; i < flights.length; i++){
							if (selection === flights[i].id) {
								console.log("Su vuelo con destino "+ flights[i].to + " ha sido confirmado.")
								alert("Su compra ha sido confirmada");
							}
						}	
				}
		}	

		typeOfUser()	

	}

	skyAir()