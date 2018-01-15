//Declara tu nombre y muéstralo por consola:
var name = "Asier";
console.log(name)

 //Declara tu edad y muéstralo por consola:
 var age = 35;
 console.log(age)

 // Declara tu nombre, tu apellido y tu edad en un array en diferentes posiciones y muéstrala por consola:
 var info = ["Asier","Perez",35];
 console.log(info)

 // Declara tu nombre y tu edad dentro de un objeto y muéstralo por consola:
 var data = {name: "Asier", age: 35};
 console.log(data)

 //e) Ahora utiliza el array que has creado anteriormente para recorrerlo y mostrar una a una todas las posiciones del array.
for(var i = 0; i<info.length;i++) {
	console.log(info[i]);
}

//f) Crea una estructura condicional que imprima el número mayor entre dos números.
var a = 25;
var b = 12;
if (a < b) {
	console.log(b);
} else {
	console.log(a);
}

//f1) Crea otra condicion else if para contemplar la posibilidad de que los dos números sean iguales:
var a = 25;
var b = 12;
if (a < b) {
	console.log(b);
} else if (a > b) {
	console.log(a);
} else {
	console.log("The numbers are equal");
}

//g) Crea una array de 5 numeros, y recorrela, mostrando además un mensaje cuando, esté a la mitad, muestre un mensaje 'We are in the middle of loop'.
var fiveNumbers = [8,3,7,17,23]
for (var i=0; i<fiveNumbers.length; i++) {
	if (fiveNumbers[i] == 7) {
		console.log(fiveNumbers[i],"We are in the middle of the loop");
		continue;
		}
		console.log(fiveNumbers[i])
	}
 
//g1) Declara tu nombre y tu edad dos variables y crea un condicional para, en caso de no coincidir con tus datos, mostrar un error
var myName = "Asier";
var myAge = 35;
var userName = prompt("Enter your name");
var userAge = prompt("Enter your age");
if (userName != myName && userAge != myAge) {
	alert("This is not you");
} else {
	alert("Hi! Welcome back!")
}

//g2) Crea una array, introduce los datos anteriores y unos cuantos más de forma que al recorrer la array, muestre un mensaje cuando encuentre tus datos.
var myName = "Asier";
var myAge = 35;
var myData = ["La Rioja", 35, "Celta de Vigo", "Cerveza", "Asier", "Barcelona", "Rock"]
for (var i = 0; i<myData.length; i++) {
	if (myData[i] == myName || myData[i] == myAge) {
		console.log("We've found your data!, it is " + myData[i]);
		continue;
	}
	console.log(myData[i]);
}