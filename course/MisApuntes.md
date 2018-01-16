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