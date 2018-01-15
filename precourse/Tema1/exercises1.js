/* STRINGS
a) Puedes contar cuantas letras tiene tu nombre?*/
var myName = "Asier";
console.log("My name has " + myName.length + " letters");

//b) Añade tu apellido e indica en que posición se encuentra
myName = "Asier";
mySurname = "Perez";
var fullName = myName + " " + mySurname; 
console.log("My last name stars on position " + fullName.indexOf(mySurname))

//c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.
var myFullName = "Asier Perez";
var justName = myFullName.slice(0,5);
console.log("My name is "+ justName)

//d) Ahora, solo tu apellido.
var myFullName = "Asier Perez";
var justSurName = myFullName.slice(6);
console.log("My last name is "+ justSurName)

//d1) Iguala el resultado a una variable nueva e imprímela por pantalla.
myName = "Asier";
mySurname = "Perez";
var concatString = myName.concat(" ", mySurname);
console.log("My name is " + myName + ", " + concatString)

//e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.
myName = "Asier";
mySurname = "Perez";
var concatString = myName.concat(" ", mySurname);
var formalName = concatString.replace(myName, "Mr");
console.log("Welcome " + formalName)

//f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.
mySurname = "Perez";
console.log("My last name is " + mySurname.toUpperCase())

//g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.
myName = "Asier";
var something = myName + " is going to a bootcamp";
console.log(something)

//h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?
myName = "Asier";
mySurname = "Perez";
var firstLetters = myName.charAt(0) +"."+ mySurname.charAt(0);
console.log("My first letters of my Name and surname are " + firstLetters)



/*ARRAYS
a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"*/
var myName = ["Asier","Perez"];
var newOne = [myName[0]+ myName[1]];
var otherOne = newOne[0].split("");
console.log(otherOne.join("/"))

	//Manera mucho más optimizada de hacerlo
var myName = ["Asier","Perez"].join('').split('').join('/');
console.log(myName)


//b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"
var myName = ["Asier","Perez"];
var newOne = myName[1].split("");
console.log(newOne.join("|"))

//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for) 
var fullName = ["Asier","Perez"];
var myName = fullName[0].split('');
var surname = fullName[1].split('');
for (var i = 0; i <myName.length; i++) {
	console.log(i+1, myName[i])
}

//d)Como en el ejercicio anterior, pero seleccionando tu apellido 
var fullName = ["Asier","Perez"];
var myName = fullName[0].split('');
var surname = fullName[1].split('');
for (var i = 0; i <surname.length; i++) {
	console.log(i+1+myName.length, surname[i])
}	

//e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings
var fullName = ["Asier","Perez"];
console.log(fullName[0].charAt(0),fullName[1].charAt(0))

//f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.
var fullName = ["Asier","Perez", 35];
console.log("My name is " + fullName[0] + " and I'm " + fullName[2] + " years old")
		/*var fullName = ["Asier","Perez", 35];
		console.log("My name is",fullName[0], "and I'm",  fullName[2], "years old")*/

//g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.
var fullName = ["Asier","Perez", 35];
function myCityAdd() {
	var city = prompt("Enter your city");
	fullName.push(city);
	console.log('City added to the Array! ' + fullName);
} 
myCityAdd(); 

//h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.
function myCityDeleted() {
	fullName.splice(3);
	console.log('City deleted from the Array! ' + fullName);
}
myCityDeleted ()

//j) Ahora, elimina el nombre y asegura los cambios Resources:
function deleteName() {
	fullName.shift();
	console.log('The Name is out of the Array! ' + fullName);
}
deleteName() 

//k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición?
function addNameAgain() {
	fullName.splice(0,0, "Asier");
	console.log('The Name has been added again! ' + fullName)
}
addNameAgain()


//l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.
var numbers = [1,2,3,4,5,6,7,8,9,10];
var multByTwo = numbers.map(function(x) {
	return x * 2;
});
console.log(multByTwo)

//l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.

function multByNum(num){
	var numbers = [1,2,3,4,5,6,7,8,9,10];
	var arrayMult = numbers.map(function(mult){
		return num * mult;
	})	
	console.log(arrayMult);	
	}
	multByNum(5)


//m) Podrías mostrarlos en el orden inverso?

function multByNum(num){
	var numbers = [1,2,3,4,5,6,7,8,9,10];
	var arrayMult = numbers.map(function(mult){
		return num * mult;
	})
	var arrayInv = arrayMult.sort(function(a,b){
		return b-a
	})
		console.log(arrayInv);
	}
	multByNum(5)


//n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?
function letterCount(string, letter, caseSensitive) {
	var myName = ["Asier","Perez"].join('').split('');
    var count = 0;
    if ( !caseSensitive) {
        string = string.toUpperCase();
        letter = letter.toUpperCase();
    }
    for (var i=0, l=string.length; i<string.length; i += 1) {
        if (string[i] === letter) {
            count += 1;
        }
    }
    return count;
}
console.log(letterCount(myName, 'e', true));

//n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras




/*NUMBERS
a) Que hora es? Declara la hora como número y devuelvela como String*/
function time() {
	var date = new Date(2017,9,8,10,15,33,0);
	var myNumberStringify = date.getHours().toString()+":"+date.getMinutes().toString();
	console.log("It's " + myNumberStringify + " in the morning");
}
time()

//b) Nono, que hora exactamente? Dime la hora sin minutos
function justHour() {
	var date = new Date(2017,9,8,10,15,33,0);
	var myNumberStringify = date.getHours().toString();
	console.log("It's around " + myNumberStringify + " in the morning")
}
justHour()


//c) Ahora, declara tu hora y muéstrala redondeada.
var date = new Date(2017,9,8,10,34,33,0); 
roundMinutes(date); 

function roundMinutes(date) {
    date.setHours(date.getHours() + Math.round(date.getMinutes()/60));
    date.setMinutes(0);
    return date.getHours()
}


//d) Hagamos una calculadora. Primero, la suma.
//We can do a calculator, so let's do it! first, do a sum with two numbers

var number1 = parseInt(prompt("Enter first number"));
var number2 = parseInt(prompt("Enter second number"));
if (isNaN(number1) || isNaN(number2)) {
	alert("You need to introduce a number!")
}
function sum() {
	return number1+number2;
}
	console.log("The sum of ",number1," + ",number2, " is ", sum())

//d1) Añade la resta...

function rest() {
	return number1-number2;
}
console.log("The sum and substraction of ", number1," and ", number2," is ", sum(), " and ", rest())

//d2) Y la multiplicación

function mult() {
	return number1*number2;
}
console.log("The sum, substraction and multiplication of ", number1," and ", number2," is ", sum(),",", rest(), " and ", mult())

//d3) Por ultimo, la división

function div() {
	return number1/number2;
}
console.log("The sum, substraction, multiplication and division of ", number1," and ", number2," is ", sum(),",", rest(), ",", mult()," and ", div())

//d4) Ahora, intenta multiplicar un número por una string, que devuelve?
"Devuelve 'NaN'"

//e) Podemos controlar este error con un condicional if?
"linea 191 a 193"
