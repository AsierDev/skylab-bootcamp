
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

var rankingUsers = [];
var correct = 0;
var errors = 0;
var score = document.getElementById("correct");
var index = 0; 
var answers;

document.getElementById("startGame").onclick = function() {showQuestions(), timer() };
document.getElementById("skipWord").onclick = function() {passWord()};
document.getElementById("sendAnswer").onclick = function() {checkAnswers()};
document.getElementById("showQuestions").style.visibility = "hidden";



function showQuestions() {
	var time = document.getElementById("time");
	document.getElementById("showQuestions").style.visibility = "visible";
	document.getElementById("startGame").style.visibility = "hidden";	
	
	if (index < questions.length) {
		if (questions[index].status === 0) {
			answers = document.getElementById("askQuestion");
			answers.innerHTML = questions[index].question;	
		} else if (questions[index].status === 1) {
			index += 1;
			showQuestions()
		} 
		console.log(index + questions[index].question );
	} else {
		index = 0;
		showQuestions();
	}
	
}

function checkAnswers() {
	answers = document.getElementById("answer").value.toLowerCase();
	console.log(correct, errors)
	
	if (answers === questions[index].answer) {
		questions[index].status = 1;
		correct += 1;
		score.innerHTML = correct;
		var x = document.getElementsByClassName("letters");
    	x[index].style.backgroundColor = "darkgreen";
		console.log("OK!");
	} else if (answers !== questions[index].answer) {
		questions[index].status = 1;
		errors += 1;
		var x = document.getElementsByClassName("letters");
    	x[index].style.backgroundColor = "red";
		console.log("NO!");
	} else {
		showQuestions()
	}
	
	if ((correct + errors) === questions.length) {
		endGame();
	} 
	
	showQuestions();


} 


var passWord = function() {
		index +=1;
		showQuestions()
		console.log("index "+index)
	}

function timer() {

	var seconds = 50;
	var s = document.getElementById("time");

	var countDown = setInterval(function() {
		seconds--;
		s.innerHTML = seconds;

		if (seconds === 0) {
			endGame();
			clearInterval(countDown);	
		}

	},1000)	

}	//timer()	


function endGame() {
	answers = document.getElementById("askQuestion");
	answers.innerHTML = "Game Over! Has acertado "+ correct+" letras y has tenido "+ errors+" fallos.";	
	var ask = document.getElementById("showup").innerHTML;
	document.getElementById("playagain").innerHTML = ask;
}

function dontPlayAgain() {
	document.getElementById("playagain").innerHTML = '<h3>¡Gracias por jugar! Esta versión de Pasapalabra ha sido hecha por <a href="https://github.com/AsierDev" target="_blank">AsierDev</a> como parte del precurso para <a href="https://twitter.com/SkylabCoders" target="_blank">SkyLab Coders</a></h3>	'

}
				

//pasapalabra()

/*
//when the form is submitted
$('form').submit(function (evt) {
   evt.preventDefault(); //prevents the default action
}*/