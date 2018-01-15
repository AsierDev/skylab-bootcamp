//a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
for (prop in avenger){
	console.log(prop);
}

//b) Ahora, crea una función que liste solo los valores de las propiedades.
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
for (prop in avenger){
	console.log(avenger[prop]);
}

//c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
avenger.class = "XI";
console.log(avenger.class);

//d) Ahora, elimina la propiedad ID y asegura los cambios.
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1, 
};
delete avenger.id;
console.log(avenger.id);

//e) Añade una nueva propiedad, por ejemplo city y dale un valor.
var avenger = { 
    name : "Tony", 
    class : "VII", 
};
avenger.city = "NY";

//e1) Asegura los cambios solo imprimiendo esa nueva propiedad.
console.log(Object.keys(avenger)[2]+ " => " + avenger.city)

//f) Lista el numero de propiedades que contiene el objeto.

var avenger = {
	name: "Tony", 
	class: "VII", 
	city: "NY",
}
console.log("There are " + Object.keys(avenger).length + " info fields");

// g) Cambia la propiedad name por fullName.
var avenger = {
	name: "Tony", 
	class: "VII", 
	city: "NY",
}
avenger.fullName = "Tony Stark";
delete avenger.name;

// g1) Asegura los cambios.
console.log(avenger.fullName)

//h) Lista todas las propiedades del objeto a través de un console.log()
console.log("Hi there, I'm "+avenger.fullName+" I live in "+avenger.city+" and I'm "+Object.keys(avenger)[0]+ " => " + avenger.class)

//h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...
avenger.country = "U.S.A";
avenger.job = "Millionaire";
avenger.studies = "streetwise";

//h2) Asegura los cambios volviendo a listar los valores del objeto
console.log(avenger)

//i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, creando una instancia del objeto con las propiedades de nuestro objeto creado. 
function avenger (fullName,city, job, studies) {
	this.fullName = fullName;
	this.city = city;
	this.job = job;
	this.studies = studies;
  	this.description = function() {
		console.log(this.fullName + ", " + this.city + ", " + this.job +", "+ this.studies);
	}
}
var ironMan = new avenger ("Tony Stark", "NY", "Millionaire","engineer");
console.log(ironMan)

//j) Crea otro objeto y imprime sus propiedades por pantalla.
var thor = new avenger ("Thor Odinson", "Asgard", "god of thunder", "no studies");
console.log(thor)

 //k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia.
function avenger (fullName,city, job, studies) {
	this.fullName = fullName;
	this.city = city;
	this.job = job;
	this.studies = studies;
  	this.description = function() {
		console.log(this.fullName + ", " + this.city + ", " + this.job +", "+ this.studies);
	}
}
thor.description() 

//l) Ahora, crea una función que solo liste los nombres de los objetos instanciados

function avenger (fullName,city, job, studies, markAv) {
	this.fullName = fullName;
	this.city = city;
	this.job = job;
	this.studies = studies;
	this.markAv = markAv;
  	this.description = function() {
		console.log(this.fullName + ", " + this.city + ", " + this.job +", "+ this.studies);
	}
	avengers.push({fullName,city,job,studies,markAv});
	onlyName.push(fullName);

}
var sameCity = [0];
var avengers = [];
var onlyName = [];
var ironMan = new avenger ("Tony Stark", "NY", "Millionaire","engineer",10);
var thor = new avenger ("Thor Odinson", "Asgard", "god of thunder", "no studies", 5);
var hulk = new avenger ("Bruce Banner", "NY", "scientist", "science", 3);
var captainAmerica = new avenger ("Steve Rogers", "NY", "soldier", "no studies", 9);
var blackWidow = new avenger ("Natasha Romanova", "Stalingrad", "spy", "Martial Arts",8);
var hawkEye = new avenger ("Clint Barton","Iowa", "archer", "Martial Arts", 7);

/*console.log(onlyName)
console.log(avengers)*/

//m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.
function filterAvengers(location) {
	var sameCity = [0];	
	avengers.forEach(function(obj){
		if (obj.city == location) {
			sameCity[0]++ ;
			sameCity.push(obj.fullName)	
			}		
		})
		console.log("There are "+sameCity[0]+" avengers living in "+location+":"+sameCity.splice(1))
	}

filterAvengers("NY")


//n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.

function avenger (fullName,city, job, studies, markAv) {
	this.fullName = fullName;
	this.city = city;
	this.job = job;
	this.studies = studies;
	this.markAv = markAv;
  	this.description = function() {
		console.log(this.fullName + ", " + this.city + ", " + this.job +", "+ this.studies);
	}
	avengers.push({fullName,city,job,studies,markAv});
	onlyName.push(fullName);
}
var sameCity = [0];
var avengers = [];
var onlyName = [];
var ironMan = new avenger ("Tony Stark", "NY", "Millionaire","engineer",9);
var thor = new avenger ("Thor Odinson", "Asgard", "god of thunder", "no studies", 7);
var hulk = new avenger ("Bruce Banner", "NY", "scientist", "science", 7);
var captainAmerica = new avenger ("Steve Rogers", "NY", "soldier", "no studies", 9);
var blackWidow = new avenger ("Natasha Romanova", "Stalingrad", "spy", "Martial Arts",8);
var hawkEye = new avenger ("Clint Barton","Iowa", "archer", "Martial Arts", 7);
var yoMismo = new avenger ("Asier Pérez", "Arnedo", "Developer", "SkylabCoders",10)

function filterAvengers(location) {
	var sameCity = [0];	
	avengers.forEach(function(obj){
		if (obj.city == location) {
			sameCity[0]++ ;
			sameCity.push(obj.fullName)	
			}		
		})
		console.log("There are "+sameCity[0]+" avengers living in "+location+":"+sameCity.splice(1))
	}

var avg = 0;
avengers.forEach(function(av){
	avg += av.markAv;

})
console.log((avg/Object.keys(avengers).length).toFixed(2))

//ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id, por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.

function avenger (id,fullName,city, job, studies, markAv) {
	this.id = id;
	this.fullName = fullName;
	this.city = city;
	this.job = job;
	this.studies = studies;
	this.markAv = markAv;
  	this.description = function() {
		console.log(this.fullName + ", " + this.city + ", " + this.job +", "+ this.studies);
	}
	avengers.push({id,fullName,city,job,studies,markAv});
}

var avengers = [];
var ironMan = new avenger (1,"Tony Stark", "NY", "Millionaire","engineer",9);
var thor = new avenger (2,"Thor Odinson", "Asgard", "god of thunder", "no studies", 7);
var hulk = new avenger (3,"Bruce Banner", "NY", "scientist", "science", 7);
var captainAmerica = new avenger (4,"Steve Rogers", "NY", "soldier", "no studies", 9);
var blackWidow = new avenger (5,"Natasha Romanova", "Stalingrad", "spy", "Martial Arts",8);
var hawkEye = new avenger (6,"Clint Barton","Iowa", "archer", "Martial Arts", 7);
var yoMismo = new avenger (7,"Asier Pérez", "Arnedo", "Developer", "SkylabCoders",10);

function compareAvengers() {
	var highAv = [];
	avengers.forEach(function(obj) {
		highAv.push(obj.markAv);
	})
		console.log(highAv);	
		
		if(highAv[0]>highAv[1]) {
			console.log("Iron Man vs Thor => Iron Man is better");
		} 	else {
			console.log("Iron Man vs Thor => Thor is better")
			}
		if(highAv[2]>highAv[3]) {
			console.log("Hulk vs Captain America => Hulk is better");
		} 	else {
			console.log("Hulk vs Captain America => Captain America is better")
			}
		if(highAv[4]>highAv[5]) {
			console.log("Black Widow vs Hawk Eye => Black Widow is better");
		} 	else {
			console.log("Black Widow vs Hawk Eye => Hawk Eye is better")
			}		
}
compareAvengers();

//ñ1) Intenta crear las parejas de forma aleatoria.
function avenger (id,fullName,city, job, studies, markAv) {
	this.id = id;
	this.fullName = fullName;
	this.city = city;
	this.job = job;
	this.studies = studies;
	this.markAv = markAv;
  	this.description = function() {
		console.log(this.fullName + ", " + this.city + ", " + this.job +", "+ this.studies);
	}
	avengers.push({id,fullName,markAv});
}

var avengers = []
var ironMan = new avenger (1,"Tony Stark", "NY", "Millionaire","engineer",9);
var thor = new avenger (2,"Thor Odinson", "Asgard", "god of thunder", "no studies", 7);
var hulk = new avenger (3,"Bruce Banner", "NY", "scientist", "science", 7);
var captainAmerica = new avenger (4,"Steve Rogers", "NY", "soldier", "no studies", 9);
var blackWidow = new avenger (5,"Natasha Romanova", "Stalingrad", "spy", "Martial Arts",8);
var hawkEye = new avenger (6,"Clint Barton","Iowa", "archer", "Martial Arts", 7);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

avengers = shuffle(avengers)
console.log(avengers)

for(var i = 0; i < avengers.length; i=i+2){
	console.log( avengers[i].fullName + ' VS ' + avengers[i+1].fullName)
	if(avengers[i].markAv > avengers[i+1].markAv){
		console.log('the winner is ' + avengers[i].fullName)
	}else{
		console.log('the winner is ' + avengers[i+1].fullName)
	}
}



/*function avenger (id,fullName,city, job, studies, markAv) {
	this.id = id;
	this.fullName = fullName;
	this.city = city;
	this.job = job;
	this.studies = studies;
	this.markAv = markAv;
  	this.description = function() {
		console.log(this.fullName + ", " + this.city + ", " + this.job +", "+ this.studies);
	}
	avengers.push({id,fullName,markAv});
}

var avengers = [];
var ironMan = new avenger (1,"Tony Stark", "NY", "Millionaire","engineer",9);
var thor = new avenger (2,"Thor Odinson", "Asgard", "god of thunder", "no studies", 7);
var hulk = new avenger (3,"Bruce Banner", "NY", "scientist", "science", 7);
var captainAmerica = new avenger (4,"Steve Rogers", "NY", "soldier", "no studies", 9);
var blackWidow = new avenger (5,"Natasha Romanova", "Stalingrad", "spy", "Martial Arts",8);
var hawkEye = new avenger (6,"Clint Barton","Iowa", "archer", "Martial Arts", 7);

function compareAvengers() {	
	var av1 = Math.floor(Math.random()*6)+1;
	var av2 = Math.floor(Math.random()*6)+1;
	var avenger1 = [];
	var avenger2 = [];
	console.log("ID number "+av1);
	console.log("ID number "+av2);

		if (av1 == 1) {
			avenger1.push(avengers[0].fullName,avengers[0].markAv);
		}else if (av1==2) {
			avenger1.push(avengers[1].fullName,avengers[1].markAv);
		}else if (av1==3) {
			avenger1.push(avengers[2].fullName,avengers[2].markAv);
		}else if (av1==4) {
			avenger1.push(avengers[4].fullName,avengers[4].markAv);
		}else if (av1==5) {
			avenger1.push(avengers[4].fullName,avengers[4].markAv);
		}else if (av1==6) {
			avenger1.push(avengers[5].fullName,avengers[5].markAv);
		}
		if (av2==1) {
			avenger2.push(avengers[0].fullName,avengers[0].markAv);
		}else if (av2==2) {
			avenger2.push(avengers[1].fullName,avengers[1].markAv);
		}else if (av2==3) {
			avenger2.push(avengers[2].fullName,avengers[2].markAv);
		}else if (av2==4) {
			avenger2.push(avengers[4].fullName,avengers[4].markAv);
		}else if (av2==5) {
			avenger2.push(avengers[4].fullName,avengers[4].markAv);
		}else if (av2==6) {
			avenger2.push(avengers[5].fullName,avengers[5].markAv);
		}
		console.log(avenger1, avenger2);	

		if(avenger1[1]>avenger2[1]) {
			console.log(avenger1[0]+" vs "+avenger2[0]+" => "+avenger1[0]+ " is better")
		} else if (avenger1[1]==avenger2[1]) {
			console.log(avenger1[0]+" vs "+avenger2[0]+" => Is a draw")	
		} else {
			console.log(avenger1[0]+" vs "+avenger2[0]+" => "+avenger2[0]+ " is better")
		}
}		
compareAvengers()*/
	