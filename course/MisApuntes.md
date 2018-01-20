# **JAVASCRIPT**

## **var** 
 Definir una variable sin *var* la almacena en el scope global. Por ejemplo si la definimos sin *var* dentro de una fucnión, quedaría declarada globalmente. Se aconseja declararlas con *var*.

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
```javascipt
var count = 5;
while(--count) {console.log(count)};
// output -> 4,3,2,1

Mientras count sea true (distinto a cero), realiza la cuenta atrás
```
***(es igual que hacer lo siguiente)***
```javascipt
var count = 5;
while(count > 0) {
    count--;
    console.log(count)
};
// output -> 4,3,2,1

```

## **prototype polyfill :** 
Sirve para cambiar las "funciones por defecto, ej: forEach" funciones que no existan, por ejemplo en navegadores viejos.

```javascript
Array.prototype.forEach = function(func) {
    for (var i 0= 0; i < this.length; i++) 
        func(this[i])
}
```

## Constructores de objetos
Buscar más sobre prototype y herencias entre objetos.

## Diferencias entre call() apply() y bind()

[Explicación](https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind)

## bind() 

Lo usamos para _atar o unir_ una función a cierto contexto (_var normalmente_). Necesita ser invocada posteriormente.

```javascript
this.x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var getX = module.getX;
getX(); // 9, porque en este caso, "this" apunta al objeto global

// Crear una nueva función con 'this' asociado al objeto original 'module'
var boundGetX = getX.bind(module);
boundGetX(); // 81

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var person = {  
  name: "James Smith",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}

person.hello("world");  // output: "James Smith says hello world"
person.hello.call({ name: "Jim Smith" }, "world"); // output: "Jim Smith says hello world"

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

````




