
var num1;
var ops;
var num2;


var refresh = document.getElementById('digits').innerHTML;
var screen = document.getElementById("digits"); 

document.getElementById("zero").onclick = function() {numberZero()};
document.getElementById("one").onclick = function() {numberOne()};
document.getElementById("two").onclick = function() {numberTwo()};
document.getElementById("three").onclick = function() {numberThree()};
document.getElementById("four").onclick = function() {numberFour()};
document.getElementById("five").onclick = function() {numberFive()};
document.getElementById("six").onclick = function() {numberSix()};
document.getElementById("seven").onclick = function() {numberSeven()};
document.getElementById("eight").onclick = function() {numberEight()};
document.getElementById("nine").onclick = function() {numberNine()};
document.getElementById("plus").onclick = function() {plus()};
document.getElementById("min").onclick = function() {minus()};
document.getElementById("mult").onclick = function() {mult()};
document.getElementById("div").onclick = function() {div()};
document.getElementById("equal").onclick = function() {equal()};
//document.getElementById("clear").onclick = function() {clear()};


function numberZero() {
    screen.innerHTML = screen.innerHTML + "0"
}
function numberOne() {
    screen.innerHTML = screen.innerHTML + "1"
}
function numberTwo() {
    screen.innerHTML = screen.innerHTML + "2"
}
function numberThree() {
    screen.innerHTML = screen.innerHTML + "3"
}
function numberFour() {
    screen.innerHTML = screen.innerHTML + "4"
}
function numberFive() {
    screen.innerHTML = screen.innerHTML + "5"
}
function numberSix() {
    screen.innerHTML = screen.innerHTML + "6"
}
function numberSeven() {
    screen.innerHTML = screen.innerHTML + "7"
}
function numberEight() {
    screen.innerHTML = screen.innerHTML + "8"
}
function numberNine() {
    screen.innerHTML = screen.innerHTML + "9"
}

function minus() {
    num1 = Number(screen.innerHTML);
    ops = "-";
    screen.innerHTML = refresh;
}

function plus() {
    num1 = Number(screen.innerHTML);
    ops = "+";   
    screen.innerHTML = refresh;
}
function mult() {
    num1 = Number(screen.innerHTML);
    ops = "*";   
    screen.innerHTML = refresh;
}
function div() {
    num1 = Number(screen.innerHTML);
    ops = "/";
    screen.innerHTML = refresh;
}

function equal() {
    num2 = Number(screen.innerHTML);
    total = 0;
    switch (ops) {
        case "+":
            total = num1 + num2;
            break;
        case "-":
            total = num1 - num2;
            break;
        case "*":
            total = num1 * num2;
            break;
        case "/":
            total = num1 / num2;
            break;
    }
    screen.innerHTML = total;

}











/*function calculator(n1,n2){
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
                            //alert("You need to introduce a number!");
                        } else {
                            var results = [sum(),rest(),mult(),div()];
                            console.log("The result of "+n1+" + "+n2+" is "+results[0].toFixed(3)," | "+"The result of "+n1+" - "+n2+" is "+results[1].toFixed(3)," | "+"The result of "+n1+" x "+n2+" is "+results[2].toFixed(3)," | "+"The result of "+n1+" / "+n2+" is "+results[3].toFixed(3))
                        }
            }
}

function askNumbers(){
	//var n1 = prompt("Enter first number");
	//var n2 = prompt("Enter second number");
	calculator(n1,n2)
}

askNumbers()*/