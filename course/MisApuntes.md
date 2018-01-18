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

## scope this bind call apply
Buscar sobre esto [por ejemplo](https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind)


