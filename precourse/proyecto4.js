/*Haz el juego del Pasapalabra, el programa deberá lanzar la definición de una palabra y el usuario deberá adivinar que palabra estamos tratando.
Tu juego debería hacer una pregunta por cada letra del alfabeto, al final del juego, y habiendo respondido todas las letras, deberá indicarle al usuario cuantas letras ha fallado y cuantas ha acertado. 
Si el usuario responde con "pasapalabra" el juego deberá estar preparado para entender que en ese momento, el usuario no responderá esa pregunta, y no estará acertada ni fallada, 
la dejará para la siguiente ronda. El juego deberá, cuando finalize, mostrar un ranking de usuarios con el nombre y ordenados por cantidad de letras acertadas.*/


function pasapalabra() {

	var rankingUsers = [];

	newGame();
	
	function newGame() {
		var passWord = "pasapalabra";
		var questions = [
		    { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
		    { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
		    { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
		    { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
		    { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
		    { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
		    { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
		    { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
		    { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
		    { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
		    { letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
		    { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
		    { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
		    { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
		    { letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
		    { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
		    { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
		    { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
		    { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
		    { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
		    { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
		    { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
		    { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
		    { letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
		    { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
		    { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
		    { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
		]

		var user = prompt("Hola! Cuál es tu nombre de usuario?");
		var hits = 0;
		var mistakes = 0;

		alert("Hola " + user + " empezamos!");

		checkAnswers()
		endGame();
		

		function checkAnswers() {

			rounds = 10; 
								//con esta formula le pongo un límite al juego, para que siga haciendo lo de abajo mientras haya rondas aún
			while (rounds > 0) {
					rounds -=1;

					if (rounds < 0) {
						endGame();
					}

					questions.forEach(function(obj) { //mientras el status sea 0 y se cumpla lo de arriba, se leen las preguntas
					
						if (obj.status == 0) {
							questions();
						} //if obj.status
						function questions() {
							var answer = prompt(obj.question, passWord).toLowerCase(); //salen las preguntas con "pasapalabra" como respuesta predeterminada
								
								if (answer == obj.answer) { //condicional que determina si la respuesta es correcta status cmabia a 1, por lo que en la siguiente ronda no se repite
									obj.status = 1;
									hits +=1;
									alert("Correcto!");
								} else if (answer == passWord) { //si la respuesta es igual a pasapalabra, no cambia el status, por lo que se repetirá en la siguiente ronda
									alert("Pasas palabra! Siguiente pregunta");
								} else if (answer != obj.answer) { //mismo que cuando se acierta la pregunta
									obj.status = 1;
									mistakes +=1;
									alert("No es correcto! La respuesta es "+ obj.answer)
								}
						}				
					}) //questionsForEach
			}
		}


		function endGame() {
		rankingUsers.push({name: user, score: hits});
		console.log("Has obtenido " + hits + " aciertos y "+ mistakes + " errores" );
		console.log("Esta es la clasificación con las máximas puntuaciones ");
		console.log(rankingUsers.sort(function (a, b){return (b.score - a.score)}));
		playAgain();
		}
		
		function playAgain() {
			var again = prompt("¿Quieres jugar de nuevo? S/N").toUpperCase();
			if (again == "S") {
				newGame()
			} else {
				alert("Adios!");
			}
		}

	}//newGame	

}

pasapalabra()