
	/*Cuando se muestre la carta, se preguntará al usuario si realmente quiere ese cartón o generar otro, si realmente quiere ese cartón, deberá responder "yes" para proceder
	Establece un sistema de puntos, en cuantos más turnos se complete el cartón, menos puntos (el sistema de puntos intégralo como quieras), por el contrario, a menos turnos, más puntos.
	Antes de empezar el juego, muestra el sistema de puntos al usuario.
	Ranking de usuarios (ordenado por puntos).*/
	var rankingUsers = [];

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
		var numbersBingo = Array.apply(null, {length: 29}).map(function(value, index){
	  		return index + 1;
		});
		var numbersBingo = shuffle(numbersBingo);  //shuffle function to mix randomly the numbers from numbersBingo.
		var playerCard = numbersBingo.slice(0,15);  //slice it into a new array calle playerCard showing just the first 15 number in a random order. This will be the user bingo card						
		

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		function newGame() {

			var user = prompt("Hello! What's your name?");
			alert(user + " The points system when you complete this game is:\n Less than 26 rounds: 20 points per round. \n Between 26 and 35 rounds: 8 points per round. \n More than 35 rounds: 2 points per round.")

			var rounds = 0;
			var numbersGame = shuffle(numbersBingo);  //shuffle numbersBingo again to create the pool for the new game.
			
			var lineAlready = 0; // Indicate when a line has been made already. If this =1, the game wont check for line

			
			showBingoCard();
			


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

				var keepPlaying = prompt("Would you like to continue? Y/N", "Y").toUpperCase();
					if (keepPlaying == "Y") {
						nextRound();

					} else if (keepPlaying == "N") {
						console.log("Hope to see you again");
						return end;
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
						console.log(playerCard.slice(0,5));
						console.log(playerCard.slice(5,10));
						console.log(playerCard.slice(10,15));
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
					points();
					
					var startAgain = prompt( "Do you want to play again? Y/N").toUpperCase();
						
						if (startAgain == "Y") {
						bingo();
						} else {	
						alert("Thank you for playing, now you can check the ranking.");
						ranking();
						return bye;
						}
				}

			}

			function showBingoCard() {  // this is a more friendly way to show the array playerCard. It shows the card in thre arrays, emulating three lines of numbers. 

				console.log("Hello "+ user +"! Here you can see your bingo card for today. Good luck!");

				console.log(playerCard.slice(0,5));
				console.log(playerCard.slice(5,10));
				console.log(playerCard.slice(10,15));

				var keepCard = prompt("Do you like this Card? Y/N").toUpperCase();

				if (keepCard === "Y") {	
					
					nextRound();

				} else { 

					showBingoCard();

				}
			}

			function points() {  // This is the score system

				if (rounds <= 25) {
					var x = rounds * 20;
					rankingUsers.push({name:user, score: x}) 
					alert(user + " Congratulations, you've completed the game in "+ rounds +" rounds!," + " so your final score is "+ x + " points." )
				} else if (rounds > 25 && rounds < 35) {
					var x = rounds * 8;
					rankingUsers.push({name:user, score: x}) 
					alert(user + " Congratulations, you've completed the game in "+ rounds +" rounds!," + " so your final score is "+ x + " points." )
				} else {
					var x = rounds * 2;
					rankingUsers.push({name:user, score: x}) 
					alert(user + " Congratulations, you've completed the game in "+ rounds +" rounds!," + " so your final score is "+ x + " points." )
				}

			}

			function ranking() {  //sort the ranking and print it
					
				rankingUsers.sort(function (a, b){return (b.score - a.score)});

				rankingUsers.forEach(function(obj) {
					console.log((rankingUsers.indexOf(obj)+1) + "º "+obj.name + " => "+ obj.score + " points ");
				})		
				
			}


		} //newGame
		
		newGame();
			
	} //bingo

	bingo()