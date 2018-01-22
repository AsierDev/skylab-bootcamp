# **SkyLab Bootcamp**

## **JAVASCRIPT**

## **var** 
 Definir una variable sin *var* la almacena en el scope global. Por ejemplo si la definimos sin *var* dentro de una función, quedaría declarada globalmente. Se aconseja declararlas con *var*.

 - **Seis tipos de datos que son primitives:**
    - Boolean
    - Null = No tiene valor
    - Undefined = Sin definir todavia
    - Number
    - String
    - Symbol (nuevo en ECMAScript 6)

- **No primitivos** 
    - Object

## **while**

Mientras count sea true (distinto a cero), realiza la cuenta atrás, pero restando primero 1 a la var count.

```javascipt
var count = 5;
while(--count) {console.log(count)};
// output -> 4,3,2,1

///////(es igual que hacer lo siguiente)///////

var count = 5;
while(count > 0) {
    count--;
    console.log(count)
};
// output -> 4,3,2,1

```

## **polyfill**

Sirve para cambiar las "funciones por defecto, ej: forEach" funciones que no existan, por ejemplo en navegadores viejos.

Así por ejemplo, si un navegador no soporta forEach(), podemos implementarlo de la siguiente manera.

```javascript

if (typeof Array.prototype.forEach === 'undefined')
    Array.prototype.forEach = function (func) {
        console.log('this is my implementation of forEach!')
        for (var i = 0; i < this.length; i++)
            func(this[i]);
    };

```

## **Constructores de objetos y prototype**

Every JavaScript object has a prototype. The prototype is also an object. All JavaScript objects inherit their properties and methods from their prototype.

- **Podemos crear objetos mediante constructor o de manera literal**

```javascript

// constructor
  function Car(brand, color, model) {
      this.brand = brand;
      this.color = color;
      this.model = model;
  } 

//literal
Car = {
    brand: 'Seat',
    color: 'black',
    model: 'León' 
}


```

- **Añadimos métodos al objeto. Una vez hecho esto, cualquier nuevo objeto de *"clase Car"* heredará dichas propiedades.**

```javascript

//////// cuando es creado con contructor
Car.prototype.message = function () {
    return 'My ' + this.color +' '+ this.brand +' '+ this.model + ' is great!';
}
var car = new Car('Seat', 'black', 'León');
//output => My black Seat León is great!

////// cuando es creado de manera literal

Car.message = function () {
    return 'My ' + this.color + ' ' + this.brand + ' ' + this.model + ' is great!';
}

var car = new Car('Seat', 'black', 'León');
//output => My black Seat León is great!

```

- **Si queremos crear un objeto que herede las propiedades de *Car* debemos invocar o llamar (call) a sus propiedades**

```javascript 

// Creamos un constructor objeto
 function Car(brand, color, model) {
      this.brand = brand;
      this.color = color;
      this.model = model;
	  this.advert = function () {
    	return this.brand + ' in a nice ' + this.color + ' color ';
		}
  } 

// creamos otro objeto y llamamos al objeto "padre" para heredar sus propiedades y métodos
function Van(brand, color, model, advert) {
    Car.call(this, brand, color, model, brand, advert);
}

// creamos un objeto de "clase" Van 
var furgon = new Van('Mercedes','white','Benz');

// como vemos hereda todos los mètodos
furgon.advert()
"Mercedes in a nice white color "

```

## **Uso de *this***

1 - Si la función se ejecuta como global, "this" será el propio objeto global.

2 - Si la función se ejecuta como método de un objeto, entonces "this" es el objeto que está recibiendo este método. Sin embargo si se usa *this* dentro de una **higher order function**, this apuntará al global también.

- *A higher order function is a function that takes a function as an argument, or returns a function. (map(), forEach(), filter()...)*

```javascript

//this global
console.log(this) //==> Window

// this en higher order function
var a = [1]
a.forEach(function(n) {
	console.log(this);  //==> Window
})

//this inside an object
var obj = {
    foo: function() {
        return this;   
    }
};
obj.foo() === obj; //==>  true

```


## Diferencias entre call() apply() y bind()

[Explicación](https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind)

## bind() 

Lo usamos para _atar o unir_ una función a cierto contexto (this normalmente). Necesita ser invocada posteriormente.

```javascript

function bindObj(arr) {
    this.name = "a";
    this newArr = arr.map(function(v) {
        return this.name + v;
    }.bind(this)); //enlaza esta high order function con el "this" de "bindObj". Con esto evitamos que apunte a window.   
}

/////Sería similar a hacer lo siguiente

function bindObj(arr) {
    var self = this;  // asignamos a la var "self" el "this" de bindObj.
    this.name = "a";
    this newArr = arr.map(function(v) {
        return self.name + v;
    }); 
}


```

## call() y apply()

  Aunque la sintaxis es casi idéntica la diferencia fundamental es que **call()** acepta una lista de argumentos, mientras que **apply()** acepta un simple array con los argumentos

- **El método call()** llama a una función con un valor **_this_** asignado y argumentos provistos de forma individual y la ejecuta (_o llama_) inmediatamente.

```javascript
var person = {  
  name: "James Smith",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}

person.hello("world");  // output: "James Smith says hello world"
person.hello.call({ name: "Jim Smith" }, "world"); // output: "Jim Smith says hello world"

```

- **El método apply()** invoca una determinada función asignando explícitamente el objeto **_this_** y un array o similar (array like object) como parámetros (argumentos) para dicha función.

```javascript

var person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var myObject = {
    firstName:"Mary",
    lastName: "Doe",
}
person.fullName.apply(myObject);  // Will return "Mary Doe"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function personContainer() {
  var person = {  
     name: "James Smith",
     hello: function() {
       console.log(this.name + " says hello " + arguments[1]);
     }
  }
  person.hello.apply(person, arguments);
}
personContainer("world", "mars"); // output: "James Smith says hello mars", note: arguments[0] = "world" , arguments[1] = "mars"   

```

## reduce function
Ampliar info (https://www.youtube.com/watch?v=Wl98eZpkp-c)

```javascript

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
if (name in allNames) {
allNames[name]++;
}
else {
allNames[name] = 1;
}
return allNames;
}, {});
//output ==> { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

/////////////////////////////////////////

```

## HTML & CSS

Buscar inputs "get"

```html

<form action="https://www.google.es/search" method="get">
    <input type="text" placeholder="search something" name="query">
    <button typer="submit">search<button>
</form>

```

