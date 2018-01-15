//a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), además, cada elemento de la pareja deberá estar multiplicada por 2.

function pairs(nums) {
	for(var i = 0; i < nums.length - 1; i++) {
		console.log(i+1 + "ª pareja => " + nums[i]*2+ " - " + nums[i+1]*2 )
	}
} 

pairs([1,2,3,4,5,6,7,8,9])


//a1) La funcion debería aceptar la array a tratar como argumento.

var numbers = [1,2,3,4,5,6,7,8,9]
function pairs(nums) {
	for(var i = 0; i < nums.length - 1; i++) {
		console.log(i+1 + "ª pareja => " + nums[i]*2+ " - " + nums[i+1]*2 )
	}
} 

pairs(numbers)


//a2) Pasa también el numero a multiplicar a la función como argumento

var numbers = [1,2,3,4,5,6,7,8,9]
function pairs(nums,multBy) {
	for(var i = 0; i < nums.length - 1; i++) {
		console.log(i+1 + "ª pareja => " + nums[i]*multBy+ " - " + nums[i+1]*multBy )
	}
} 

pairs(numbers,12)


//a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.

var numbers = [1,2,3,4,5,6,7,8,9]
function pairs(nums,multBy,showPairs) {
	for(var i = 0; i < showPairs; i++) {
		console.log(i+1 + "ª pareja => " + nums[i]*multBy+ " - " + nums[i+1]*multBy )
	}
} 

pairs(numbers,12,3)


//b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci?

function fibo(long) {
	var n1 = 1;
	var n2 = 0;
	var n3 = 0;
	for (var i = 0; i < long; i++) {
		n3 = n1 + n2;
		n1 = n2 ;
		n2 = n3;	
		console.log(n3);
	}
}
fibo(15)

//b2) Puedes añadir además, la posición de cada resultado?

function fibo(long) {
	var n1 = 1;
	var n2 = 0;
	var n3 = 0;
	for (var i = 0; i < long; i++) {
		n3 = n1 + n2;
		n1 = n2 ;
		n2 = n3;	
		console.log(i+1 + "ª position => " +n3);
	}
}
fibo(15)


//b3) Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.
//b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.

function fibo(long) {
	var n1 = 1;
	var n2 = 0;
	var n3 = 0;
	var serie = [];
	for (var i = 0; i < long; i++) {
		n3 = n1 + n2;
		n1 = n2 ;
		n2 = n3;
		serie.push(n3)	
	}
		console.log(serie);
}
fibo(prompt("Choose how many numbers"))


//b5) Ahora, muestra los resultados en forma piramidal:

function fibo(long) {
	var n1 = 1;
	var n2 = 0;
	var n3 = 0;
	var serie = [];
	var backwards = serie;
	for (var i = 0; i < long; i++) {
		n3 = n1 + n2;
		n1 = n2 ;
		n2 = n3;
		serie.push(n3)	
		console.log(serie);
	}
	for (var j = long; j > 1; j--) {
		bacwards = serie.pop();
		console.log(backwards)
	}
}
fibo(7)


//c) Simple Scripting program. Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, creandio un nuevo código

var code = 7312;
function codeScript(code) {
	var newNumber = code.toString(10).split("").map(Number);
	var from = newNumber[0];
	var to = newNumber[3];
	newNumber.shift();
	newNumber.push(from);
	newNumber = Number(newNumber.join(""));
	return newNumber
}
codeScript(code)


//c2) Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función)

function codeScript(code1,code2) {
	var newNumber1 = code1.toString(10).split("").map(Number);
	var from = newNumber1[0];
	var to = newNumber1[3];
	newNumber1.shift();
	newNumber1.push(from);
	newNumber1 = Number(newNumber1.join(""));
	var newNumber2 = code2.toString(10).split("").map(Number);
	var from = newNumber2[0];
	var to = newNumber2[3];
	newNumber2.shift();
	newNumber2.push(from);
	newNumber2 = Number(newNumber2.join(""));

	console.log(newNumber1,newNumber2)
	
}
codeScript(2345,9876)

//c3) Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos, multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10. (Si es superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores)

function codeScript(code1,code2) {
	var newNumber1 = code1.toString(10).split("").map(Number);
	var from = newNumber1[0];
	var to = newNumber1[3];
	var numberMult1 = [];


	newNumber1.shift();
	newNumber1.push(from);
	newNumber1.forEach(function(num) {
		numberMult1.push(num * 2);
	})

	newNumber1 = Number(newNumber1.join(""));

	var newNumber2 = code2.toString(10).split("").map(Number);
	var from = newNumber2[0];
	var to = newNumber2[3];
	var numberMult2 = [];

	newNumber2.shift();
	newNumber2.push(from);
	newNumber2.forEach(function(num) {
		numberMult2.push(num * 2);
	})

	newNumber2 = Number(newNumber2.join(""));

	console.log("The codes are "+ newNumber1 + " and " + newNumber2);
	console.log("The new codes after multiplying are " + numberMult1.join("") + " and " + numberMult2.join(""))

}
codeScript(2343,3421)	

//c4) Ahora, implementa en otra funcion aparte el decrypter(), que recibirá como argumento un código encriptado (y correspondientemente multiplicado en el apartado c3) y nos devuelva el código desencriptado.
//c5) Añade las dos funciones a la misma función padre, de forma que encripte y desencripte a la vez cuando termine de ejecutarse.


function codeScript(code1,code2) {
	var newNumber1 = code1.toString(10).split("").map(Number);
	var from = newNumber1[0];
	var to = newNumber1[3];
	var numberMult1 = [];


	newNumber1.shift();
	newNumber1.push(from);
	newNumber1.forEach(function(num) {
		numberMult1.push(num * 2);
	})

	newNumber1 = Number(newNumber1.join(""));

	var newNumber2 = code2.toString(10).split("").map(Number);
	var from = newNumber2[0];
	var to = newNumber2[3];
	var numberMult2 = [];

	newNumber2.shift();
	newNumber2.push(from);
	newNumber2.forEach(function(num) {
		numberMult2.push(num * 2);
	})

	newNumber2 = Number(newNumber2.join(""));

	console.log("The codes are "+ newNumber1 + " and " + newNumber2);
	console.log("The new codes after multiplying are " + numberMult1.join("") + " and " + numberMult2.join(""))

	function decrypter(num1,num2) {
		decrypt1 = [];
		decrypt2 = [];

		num1.forEach(function(num) {
			decrypt1.push(num / 2);
		});

		num2.forEach(function(num) {
			decrypt2.push(num / 2);
		});

		console.log("This are the decrypted numbers => " + decrypt1.join("") + " and " +  decrypt2.join("") )

	}

	decrypter(numberMult1,numberMult2);

}
codeScript(2343,3421)	




//c6) El usuario podrá solo introducir letras, cada número del 0 al 9 corresponderá a varias letras. Podéis seguir este esquema.


function codeScript(code) {
	var newNumber = code.toString(10).split("").map(Number);
	var from = newNumber[0];
	var to = newNumber[3];
	newNumber.shift();
	newNumber.push(from);
	newNumber = Number(newNumber.join(""));
	return newNumber
}
codeScript(code)




//d) Crea un programa que use la encriptacion Romana, como es? Si tenemos la palabra SKYLAB, la palabra encriptada será SLKAYB. Si divides la palabra original en 2 grupos obtienes:


function encrypt(str) {
	var part1 = [];
	var part2 = [];
	var  newWord = [];

	for (var i = 0; i<str.length; i++) {
		if (i < str.length/2) {
			part1.push(str[i]);
		} 
		else {
			part2.push(str[i]);
		} 
	}
	for (var i=0; i < part1.length; i++) {
		newWord.push(part1[i]);
		newWord.push(part2[i]);
	}
	console.log(newWord.join(""))
}

encrypt("skylab")

//d2) Programa el desencriptador, pasa como parámetro SLKAYB y que devuelva SKYLAB.

function wordDecrypt(str) {
	var part1 = [];
	var part2 = [];
	var newWord = [];

	for (var i = 0; i<str.length; i++) {
		if (i % 2 != 0) {
			part1.push(str[i]);
		} 
		else {
			part2.push(str[i]);
		} 
	}
	
	newWord.push(part2.join(""));
	newWord.push(part1.join(""));
	
	console.log(newWord.join(""))
}

wordDecrypt("slkayb")


//d3) Agrupa la función Encrypt y decrypt en una unica función, de forma que introduzcas como parámetro SKYLAB y devuelva SKYLAB (con todas las transformaciones internas hechas y mostrando, entre medias, la transformación)

function romanTool(str) {

	var code = str
	console.log("input "+code)

	function encrypt(code) {
	var part1 = [];
	var part2 = [];
	var  newWord = [];

	for (var i = 0; i<str.length; i++) {
		if (i < str.length/2) {
			part1.push(str[i]);
		} 
		else {
			part2.push(str[i]);
		} 
	}
	for (var i=0; i < part1.length; i++) {
		newWord.push(part1[i]);
		newWord.push(part2[i]);
	}
	console.log(newWord.join(""))
}
	encrypt(code);


	function wordDecrypt(code) {
		var part1 = [];
		var part2 = [];
		var newWord = [];

		for (var i = 0; i<str.length; i++) {
			if (i % 2 != 0) {
				part1.push(str[i]);
			} 
			else {
				part2.push(str[i]);
			} 
		}
		
		for (var i=0; i < part1.length; i++) {
		newWord.push(part2[i]);
		newWord.push(part1[i]);
		}
		
		console.log(newWord.join(""))
	}
	wordDecrypt(code)	

}
romanTool("skylab")


//d4) Lo tienes? Prueba ahora con SKYLABCODERS. Cambia la función para que pueda aceptar palabras más largas.


function romanTool(str) {

	var code = str
	console.log("input "+code)

	function encrypt(code) {
	var part1 = [];
	var part2 = [];
	var  newWord = [];

	for (var i = 0; i<str.length; i++) {
		if (i < str.length/2) {
			part1.push(str[i]);
		} 
		else {
			part2.push(str[i]);
		} 
	}
	for (var i=0; i < part1.length; i++) {
		newWord.push(part1[i]);
		newWord.push(part2[i]);
	}
	console.log(newWord.join(""))
}
	encrypt(code);


	function wordDecrypt(code) {
		var part1 = [];
		var part2 = [];
		var newWord = [];

		for (var i = 0; i<str.length; i++) {
			if (i % 2 != 0) {
				part1.push(str[i]);
			} 
			else {
				part2.push(str[i]);
			} 
		}
		
		for (var i=0; i < part1.length; i++) {
		newWord.push(part2[i]);
		newWord.push(part1[i]);
		}
		
		console.log(newWord.join(""))
	}
	wordDecrypt(code)	

}
romanTool("skylabcoders")


//e) Crea un programa al que le introduces un número como parámetro del 0 al 100 y devuelve el número transformado a alfabeto normal, es decir:

function words(num) {
	var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']


	if (num < 10) {
		console.log(units[num]);
	} else if ((num > 9) && (num < 20)) {
		console.log(teens[num-10])
	} else if (num >= 20 && num < 100) {
		var number = num; //29
		var a = Math.floor(number/10); //2
		var b = num-a*10; //29-20=> 9
			console.log(tens[a]+units[b])

	}
}

words(29)

//e2) Ahora, el output debería ser capaz de, aparte de devolver el número traducido, devolver también los números por los que está formado:

function words(num) {
	var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']


	if (num < 10) {
		console.log(units[num] + " => "+num);
	} else if ((num > 9) && (num < 20)) {
		console.log(teens[num-10] + " => "+num)
	} else if (num >= 20 && num < 100) {
		var number = num; //72
		var a = Math.floor(number/10); //7
		var b = num-a*10; // 2
		var c = a*10 //70
			console.log(tens[a]+units[b] + " => "+ num +" => " + c + " + " + b)

	}
}

words(72)


//e3) Cambia tu programa para que acepte cualquier número entre 0 y 1000.

function words(num) {
	var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	var hundreds = ["hundred"]

	if (num < 10) {
		console.log(units[num] + " => "+num);
	} else if ((num > 9) && (num < 20)) {
		console.log(teens[num-10] + " => "+num)
	} else if (num >= 20 && num < 100) {
		var number = num; //72
		var a = Math.floor(number/10); //7
		var b = num-a*10; // 2
		var c = a*10 //70
		console.log(tens[a]+units[b] + " => "+ num +" => " + c + " + " + b)

	} else if (num > 99 && num < 1000) {
		var number = num; //123
		var a = Math.floor(number/100); // units 1
		var b = num-a*100; // 
		var c = Math.floor(b/10); //tens 1
		var d = b-c*10; // units 2
		var e = a*100
		var f = c*10

		if (b < 10) {
			console.log(units[a]+ " " +hundreds[0]+ " and " +units[d] + " => "+ num + " => " + e + " + " + d )
		} else if ((b > 9) && (b < 20)) {
			console.log(units[a]+ " " +hundreds[0]+ " and " +teens[d] + " => "+ num + " => " + e + " + " + f + " + " + d )
		} else if (b >= 20 && b < 100) {
			console.log(units[a]+ " " +hundreds[0]+ " and " +tens[c] + " "+ units[d]+ " => "+ num + " => " + e + " + " + f + " + " + d )
		}
		
		

	}
}

words(782)


//f) Recibiendo el siguiente texto por parámetro a tu función... : Prepara dicha función para que modifique y devuelva el texto bajo estas reglas: Signos de puntuación: -	"." => "," - "," => "" Palabras: - "dolor" => "potato" - "lorem" => "tomato" - "labor" => "cucumber" - "consequatur" => "garlic" - "ipsum" => "onion"

var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."

function transform(text) {
	//var newText = text.split("")
	var comas = text.replace(/,/g,'""');
	var dolor = comas.replace(/dolor /gi,"potato");
	var lorem = dolor.replace(/lorem/gi,"tomato");
	var labor = lorem.replace(/labor/gi, "cucumber");
	var consequatur = labor.replace(/consequatur/gi, "garlic");
	var ipsum = consequatur.replace(/ipsim/gi, "onion");
	var dots = ipsum.replace(/\./gi, ",")
	
	console.log(dots)
}
transform(text)


//f1) Añade una funcionalidad que cuente cuantos cambios/coincidencias ha encontrado de cada palabra, y te los muestre de una forma amigable para el usuario

var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."

function transform(text) {
	var newText = text.split(" ")
	var comas = text.replace(/,/g,'""');
	var dolor = comas.replace(/dolor /gi,"potato");
	var lorem = dolor.replace(/lorem/gi,"tomato");
	var labor = lorem.replace(/labor/gi, "cucumber");
	var consequatur = labor.replace(/consequatur/gi, "garlic");
	var ipsum = consequatur.replace(/ipsim/gi, "onion");
	var dots = ipsum.replace(/\./gi, ",")

	var changes = 0;
	newText.forEach(function(obj) {
		if (obj == "," || obj == "\." || obj == "dolor " || obj == "lorem" || obj == "labor" || obj == consequatur || obj == "ipsum") {
			changes += 1;
		}
	})
	
	console.log(dots)
	//console.log("There are " + changes + " corrections")
}
transform(text)
