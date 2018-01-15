/*Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola la suma, resta, multiplicación y división 
entre ambos números. El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran). 
El programa debe contemplar y actuar correctamente en el caso de que el usuario introduzca cualquier cosa que no sean números.

Si el usuario introduce un solo numero, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.
Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.
Hint_ => results = [num1 + num2 = resultSum, num1-num2 = resultRest ....]*/

function calculator(n1,n2){
    function sum() {
        return n1+n2;
    }
    function rest() {
        return n1-n2;
    }
    function mult() {
        return n1*n2;
    }
    function div() {
        return n1/n2;
    }
    function square() {
        return Math.sqrt(n1) || Math.sqrt(n2)
    }

        if ((n1==="" || n2==="") && (n1!=isNaN(n1) || n2!=isNaN(n2))) {
            console.log(square().toFixed(3))
        }	
            else {
                    n1 = parseFloat(n1);
                    n2 = parseFloat(n2);
                        if(isNaN(n1) || isNaN(n2)) {
                            alert("You need to introduce a number!");
                        } else {
                            var results = [sum(),rest(),mult(),div()];
                            console.log("The result of "+n1+" + "+n2+" is "+results[0].toFixed(3)," | "+"The result of "+n1+" - "+n2+" is "+results[1].toFixed(3)," | "+"The result of "+n1+" x "+n2+" is "+results[2].toFixed(3)," | "+"The result of "+n1+" / "+n2+" is "+results[3].toFixed(3))
                        }
            }
}

function askNumbers(){
	var n1 = prompt("Enter first number");
	var n2 = prompt("Enter second number");
	calculator(n1,n2)
}

askNumbers()


/*var n1 = prompt("Enter first number");
var n2 = prompt("Enter second number");

function sum() {
return n1+n2;
}
function rest() {
	return n1-n2;
}
function mult() {
	return n1*n2;
}
function div() {
	return n1/n2;
}
function square() {
	return Math.sqrt(n1) || Math.sqrt(n2)
}

	if ((n1==="" || n2==="") && (n1!=isNaN(n1) || n2!=isNaN(n2))) {
		console.log(square().toFixed(3))
	}	
		else {
				n1 = parseFloat(n1);
				n2 = parseFloat(n2);
					
					if(isNaN(n1) || isNaN(n2)) {
						alert("You need to introduce a number!");
					} else {
						var results = [sum(),rest(),mult(),div()];
						console.log("The result of "+n1+" + "+n2+" is "+results[0].toFixed(3)," | "+"The result of "+n1+" - "+n2+" is "+results[1].toFixed(3)," | "+"The result of "+n1+" x "+n2+" is "+results[2].toFixed(3)," | "+"The result of "+n1+" / "+n2+" is "+results[3].toFixed(3))
					}
		}

	*/
