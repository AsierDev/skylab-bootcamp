//a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.

function myName(name){
    console.log('hello ' + name);
}
myName("Asier")

//b) Intenta retornar los valores en lugar de usar console.log

function myName(name){
    return 'hello ' + name;
}
myName("Asier")

//c) Ahora, añade tu edad y concaténala al return
	
function myName(name,age){
	return 'hello ' + name+", you are "+ age+" years old."
}
 myName("Asier",35)

//d) Iguala tu función a una variable y ejecútala
function myName(sName){
	return sName;
	var name = myName();
}
 //myName("Asier")

 //e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados
function myAge(nAge) {
	return nAge;
	var age = myAge();
}
console.log(myName("Asier"), myAge(35))

//e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.
function myName(sName){
	return sName;
	var name = myName();
}
function myAge(nAge) {
	return nAge;
	var age = myAge();
}
console.log((myName("Asier")+" edad "+(myAge(35)+Math.random()*10).toFixed()).toString())

//f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.

var name = "Asier";
var age = 35;

function myName(sName){
	return sName;
}
function myAge(nAge) {
	return nAge;
}
myName(name) + myAge(age)

//g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas
function myData() {
	var name = "Asier";
	var age = 35;
	return name + age;
}
myData()

//h) Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()
//i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50
//j) Al return de la función name(), concaténale otro mensaje
//k) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable


function myData(name) {
	var name = myName();
	var age = randomAge();
	function myName() {
		return name + " aka AsierDev";
	}

	function randomAge(){
		var randNumber = Math.floor((Math.random()*50+1));
		if (randNumber<20){
			return " are you sure  " + randNumber + " is your right age?";	
		} else if(randNumber>=20 && randNumber<50){
			return "you are "+ randNumber + " old now ";
		}
	}
	return "The function myName returns "+ name  +" y la segunda funcion, randomAge, returns "+ age
}
myData("Asier")

//l) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada

function myData(me) {
	var name = myName();
	var age = randomAge();
	function myName() {
		if (me == "Asier"){
			return me + " aka AsierDev";
		} else {
			return "Oi! You are not ASIER!";
		}
	}

	function randomAge(){
		var randNumber = Math.floor((Math.random()*50+1));
		if (randNumber<20){
			return " are you sure " + randNumber + "is your right age?";	
		} else if(randNumber>=20 && randNumber<50){
			return "you are "+ randNumber + " old now ";
		}
	}
	if (name == "Asier aka AsierDev"){
		return "The function myName returns "+ name  +" and the second function, randomAge, returns "+ age
	} else {
		return name;
	}	

}
myData("Asier")

//m) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. Retorna a la funcion padre y concaténalo en el return padre.


function randomAge(){
		var randNumber = Math.floor((Math.random()*50+1));
		if (randNumber<20){
			return " are you sure " + randNumber + " is your right age?";	
		} else if(randNumber>=20 && randNumber<50){
			return "you are "+ randNumber + " old now ";
		}
}

function myData(me) {
	randomAge();
	var name = myName();
	function myName() {
		if (me == "Asier"){
			return me + " aka AsierDev";
		} else {
			return "Oi! You are not ASIER!";
		}
	}
	if (name == "Asier aka AsierDev"){
		return "The function myName returns "+ name  +" and the second function, randomAge, returns "+ randomAge();
	} else {
		return name;
	}		
}
	

myData("Asier")

//n) Refactorizemos nuestro código dejando todas las funciones separadas del padre, éste último se encargará de llamarlas todas y mostrar sus resultados.

function randomAge(){
		var randNumber = Math.floor((Math.random()*50+1));
		if (randNumber<20){
			return " are you sure " + randNumber + " is your right age?";	
		} else if(randNumber>=20 && randNumber<50){
			return "you are "+ randNumber + " old now ";
		}
}

var whatName = (prompt("What's your name?")).toString();
function myName() {
		if (whatName == "Asier"){
			return whatName + " aka AsierDev";
		} else {
			return "Oi! You are not ASIER";
		}
	}
function nameRight() {
	if (myName() == "Asier aka AsierDev"){
		return "The function myName returns "+ myName()  +" and the second function, randomAge, returns "+ randomAge();
	} else {
		return myName();
	}		
}

function myData() {
	randomAge();
	myName();
	nameRight();
	return nameRight();
	//console.log(whatName);
}

myData()

//ñ) Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre, muestra los resultados de esta array como siempre.

function randomAge(){
		var randNumber = Math.floor((Math.random()*50+1));
		if (randNumber<20){
			return " are you sure " + randNumber + " is your right age?";	
		} else if(randNumber>=20 && randNumber<50){
			return "you are "+ randNumber + " old now ";
		}
}

var whatName = (prompt("What's your name?")).toString();
function myName() {
		if (whatName == "Asier"){
			return whatName + " aka AsierDev";
		} else {
			return "Oi! You are not ASIER";
		}
	}
function nameRight() {
	if (myName() == "Asier aka AsierDev"){
		return "The function myName returns "+ myName()  +" and the second function, randomAge, returns "+ randomAge();
	} else {
		return myName();
	}		
}

function myData() {
	var allInOne = [];
	allInOne.push(myName(),randomAge(),nameRight());
	return allInOne
}

myData()

//o) Crea una funcion que llame a nuestra funcion father(), ésta, a parte de llamarla, deberá hacer otro push "hello from the dark side..." a la array que crea father(). Muestra toda la array completa.

function randomAge(){
		var randNumber = Math.floor((Math.random()*50+1));
		if (randNumber<20){
			return " are you sure " + randNumber + " is your right age?";	
		} else if(randNumber>=20 && randNumber<50){
			return "you are "+ randNumber + " old now ";
		}
}

var whatName = (prompt("What's your name?")).toString();
function myName() {
		if (whatName == "Asier"){
			return whatName + " aka AsierDev";
		} else {
			return "Oi! You are not ASIER";
		}
	}
function nameRight() {
	if (myName() == "Asier aka AsierDev"){
		return "The function myName returns "+ myName()  +" and the second function, randomAge, returns "+ randomAge();
	} else {
		return myName();
	}		
}

function myData() {
	var allInOne = [];
	allInOne.push(myName(),randomAge(),nameRight());
	return allInOne
}

function granFather() {
	var granpa = []; 
	granpa.push(myData(),"Hello from the other side");
	return granpa;
}
granFather();


//p) 🔞 👊🏼 Llama a ésta nueva función dos veces, muestra sus resultados por pantalla y compara sus randomNums, mostrando un mensaje indicando cual es mayor. El nombre pasado por parámetro también deberá ser random entre una array de nombres, con lo cual, también deberás refactorizar las funciones hijas.

function randomAge(){
		var randNumber = Math.floor((Math.random()*50+1));
		return randNumber;
}

function myName() {
		var names = ["Hulk","Iron Man", "Thor", "Captain America"];
		var randNumber = Math.floor((Math.random()*4+1));
		switch (randNumber) {
			case 1:
				return names[0];
				break;
			case 2:
				return names[1];
				break;
			case 3:
				return names[2];
				break;
			case 4:
				return names[03];
				break;		

		}

	}

function father() {
	var allInOne = [];
	allInOne.push(myName(),randomAge());
	return allInOne
}

function granFather() {
	father();
	var compare1 = father();
	var compare2 = father(); 
	
	console.log(compare1,compare2)
	if (compare1[1] > compare2[1]) {
		return "el primero gana";
	} else {
		return "el segundo gana"
	}
	
}
granFather();

//p1) En lugar de retornar los valores como una array, prepara tus funciones para que devuelvan los resultados como OBJECTS. Muestra por pantalla los objetos sin estilizar el output.

function randomAge(){
		var randNumber = Math.floor((Math.random()*50+1));
		if (randNumber<20){
			var rightAge = {
				number: randNumber,
				sentence: " years is his right age?"
			}
			return rightAge;	
		} else if(randNumber>=20 && randNumber<50){
			var rightAge = {
				number: randNumber, 
				sentence: "years is how old is now"
			}	
			return rightAge;
		}
}

var whatName = (prompt("What's your name?")).toString();
function myName() {
		if (whatName == "Asier"){
			var theName = {
				name: whatName,
				description: " aka AsierDev"
			}
			return theName;
		} else {
			var theName = {
				description: "Oi! Who is ", 
				name: whatName
			}
			return theName;
		}
	}

function myData() {
	var allInOne = [];
	allInOne.push(myName(),randomAge());
	return allInOne
}

function granFather() {
	var granpa = myData();
	granpa.darkside ="Welcome to the dark side";
	return granpa
}
granFather();

//p2) Muestra los resultados de los OBJECTS recorriendolos y mostrando los valores de una forma amigable.

function randomAge(){
		var randNumber = Math.floor((Math.random()*50+1));
		if (randNumber<20){
			var rightAge = {
				data: randNumber,
				description: " years is your right age?"
			}
			return rightAge;	
		} else if(randNumber>=20 && randNumber<50){
			var rightAge = {
				data: randNumber, 
				description: " years is your age"
			}	
			return rightAge;
		}
}

var whatName = (prompt("What's your name?")).toString();
function myName() {
		if (whatName == "Asier"){
			var theName = {
				data: whatName,
				description: " aka AsierDev"
			}
			return theName;
		} else {
			var theName = {
				description: " you are not the right person ", 
				data: whatName
			}
			return theName;
		}
	}

function myData() {
	var allInOne = [];
	allInOne.push(myName(),randomAge());
	return allInOne
}

function granFather() {
	var granpa = myData();
	console.log(granpa);
	granpa.forEach(function(obj){
		console.log(obj.data  + obj.description)
	})

}
granFather();