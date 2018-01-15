/*var nums = new Array(15).fill('x').join('')
var line1 = nums.substr(0,5)
var line2 = nums.substr(5,10)
var line3 = nums.substr(10,15)

if(line1.match('xxxxx') || line2.match('xxxxx') || line3.match('xxxxx')){
	console.log('line!')
}*/

/*Realiza un programa que simule un Bingo. Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse. 
Durante el primer turno se mostrará un cartón con 15 números (excluyendo el 0 siempre), 
para pasar al siguiente turno el usuario deberá confirmar mediante confirm() visualizándose otro número, 
si coincide con alguno de los existentes en el cartón, cambiará por una "X" o un 0. 
El cartón se mostrará, al final de cada turno, con los cambios efectuados, indicándole al usuario qué número se ha encontrado. 
El programa deberá preguntar al usuario al inicio de cada turno si desea continuar, en caso de que se continúe, seguirá el mismo patrón que hasta el momento.

Por supuesto, cuando todos los números de una misma linea estén en "X", mostrará un mensaje "LINEA!",
pero la ejecución seguirá, el juego solo acabará cuando todos los números estén a "X".

Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón.
Por último, deberá preguntar si desea volver a jugar.

Secuence:
>>> bingo()
<<< prompt('Tell me, who are you?')
>>> Hello *name*, ready to play? This is your card:
...
<<< confirm('Next turn, you confirm?') // true / false
>>> We find 1 match! This is the status of your card now:
...
...
>>> Congrats! You finish the Bingo game in X turns! Do you want to play again?
<<< confirm('Play again?') // true / false*/



// To do: - Stop game when NO(now it crash), stop saying Line after first one, fix undefined if ball != number in card, improve messages after rounds. 




function bingo() {     


	
	function shuffle(array) {  //This function is going to mix whatever we indicate. in this case, the bingo balls
  	var currentIndex = array.length, temporaryValue, randomIndex;
  	while (0 !== currentIndex) {  
    	randomIndex = Math.floor(Math.random() * currentIndex); 
    	currentIndex -= 1;
    	temporaryValue = array[currentIndex]; 
    	array[currentIndex] = array[randomIndex];
    	array[randomIndex] = temporaryValue;
  	}
  	return array;
	}


    //function that create an array of N numbers in order (lenght = N)
	var numbersBingo = Array.apply(null, {length: 49}).map(function(value, index){
  		return index + 1;
	});
	var numbersBingo = shuffle(numbersBingo);  //shuffle function to mix randomly the numbers from numbersBingo.
	var playerCard = numbersBingo.slice(0,15);  //slice it into a new array calle playerCard showing just the first 15 number in a random order. This will be the user bingo card						
	
	var user = prompt("Hello! What's your name?");

	newGame();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	function newGame() {

		var rounds = 0;
		var numbersGame = shuffle(numbersBingo);  //shuffle numbersBingo again to create the pool for the new game.
		
		var lineAlready = 0; // Indicate when a line has been made already. If this =1, the game wont check for line

		console.log("Hello "+ user +"! Here you can see your bingo card for today. Good luck!");
		
		showBingoCard();
		
		nextRound();


		function nextRound() {  //to continue the game

			
			console.log("The next ball is number => "+numbersGame[0]);

				rounds += 1; //add up rounds 
				
				checkForNumbers();  // check if the numbers from the pool are in your player card


				if (lineAlready == 0) {  //this check for line. If a line is been made (vare lineAlready), it should ignore it
				checkForLine();
				} 

				checkForBingo(); // if all the numbers are "X" the game ends
 

				continueGame(); //if the game hasn't finished, then ask the user if he wants to keep playing
			 
				
		}

		function continueGame() {  // Asking the user if wants to continue.

			var keepPlaying = prompt("Would you like to continue? Y/N").toUpperCase();
				if (keepPlaying == "Y") {
					nextRound();

				} else if (keepPlaying == "N") {
					console.log("Hope to see you again");
				} else {
					continueGame();
				}
		}


		function checkForNumbers(){ //compare the number coming out the pool with your player card
			
			var ball = numbersGame[0]; //Ball in position 0 will be next number

			for (prop in playerCard) {

				if (playerCard[prop]===ball){ //if the ball coming out the poll = any number in your card, assign an "X" instead of the number
					var x = playerCard.indexOf(ball);
					playerCard[x] = "X";
					console.log("You have the number " + ball+"!. Here is how your card looks like  ");
					showBingoCard();
				}				
			}		
			numbersGame.shift(); //get rid of the number in position 0 in the pool numbersGame	
		}


		function checkForLine() {  //split the card in three lines and check for line
			
			var line1 = playerCard.slice(0,5);
			var line2 = playerCard.slice(5,10);
			var line3 = playerCard.slice(10,15);

			if (line1.join("") === "XXXXX" || line2.join("") === "XXXXX"  || line3.join("") === "XXXXX") {
					lineAlready += 1;  //once one line is made, this indicate it doesn't have to check for lines again
					alert("LINE!");
				}
				

		}


		function checkForBingo() {

			if (playerCard.join("") === "XXXXXXXXXXXXXXX") {

				alert("BINGO!");
				
				var startAgain = prompt("Congratulations, you`ve completed the game in "+ rounds +" rounds!. Dou you want to play again? Y/N").toUpperCase();
					
					if (startAgain == "Y") {
					bingo();
					} else {	
					alert("OK then, Bye!");
					return gameOver;  // Not sure how to end the game, so I've assigned an undefined var
					}
			}

		}

		function showBingoCard() {  // this is a more friendly way to show the array playerCard. It shows the card in thre arrays, emulating three lines of numbers. 

			console.log(playerCard.slice(0,5));
			console.log(playerCard.slice(5,10));
			console.log(playerCard.slice(10,15));
		}


	} //newGame
	
		
} //bingo

bingo()














/*for (prop in playerCard) {


				if (playerCard[prop]===ball){ //if the ball coming out the poll = any number in your card, assign an "X" instead of the number
					var x = playerCard.indexOf(ball);
					playerCard[x] = "X";
					console.log("You have the number " + ball+"!. Here is how your card looks like  ");
					showBingoCard();
					numbersGame.shift(); //get rid of the number in position 0 in the pool numbersGame
					rounds += 1; //add up rounds 
					continueGame(); 

					if (playerCard[prop]!==ball) {
						numbersGame.shift();   //get rid of the number in position 0 in the pool numbersGame
						rounds += 1; 	//add up rounds 
						nextRound();
					}
				}	
			}*/













/*function line() {
				var line1 = playerCard.slice(0,5);
				var line2 = playerCard.slice(5,10);
				var line3 = playerCard.slice(10,15);
				console.log(line1, line2, line3)
			}
			line()



var line1 = playerCard.slice(0,5);
var line2 = playerCard.slice(5,10);
var line3 = playerCard.slice(10,15);

if(line1 = ["X","X","X","X","X"] || line2 = ["X","X","X","X","X"] || line3 = ["X","X","X","X","X"]){
alert("LINE!");
numbersGame.shift();
nextRound();
}
if(line1 = ["X","X","X","X","X"] && line2 = ["X","X","X","X","X"] && line3 = ["X","X","X","X","X"]){
alert("BINGO!");
var startAgain = prompt("Congratulations! You've won! Do you want to play again? Y/N").toUpperCase();
if (startAgain == "Y") {
	bingo();

} else if (startAgain == "N") {
	console.log("Maybe next time!");
} else {
	console.log("AHHHHH");
}*/










































