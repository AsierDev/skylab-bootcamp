//Write a JavaScript program that accept two integers and display the larger.

function larger(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
larger(7, 8)

function larger(n1,n2) {
    return n1 > n2 ? n1 : n2
}
larger(70, 58)

//Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.

var n = [3, -7, 2];
function cond() {
    var subtotal = [];
    var total;
    for (var i = 0; i < n.length; i++) {
        subtotal.push(n[i]);
        total = subtotal[0] * subtotal[1] * subtotal[2]
    }
    if (total < 0) {
        alert("the sign is -");
    } else {
        alert("es positivo");
    }
}
cond(n);

// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
 
function sortNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3 && num2 > num3)
        return num1 + " " + num2 + " " + num3;
    else if (num2 > num1 && num2 > num3 && num1 > num3)
        return num2 + " " + num1 + " " + num3;
    else if (num3 > num1 && num3 > num2 && num1 > num2)
        return num3 + " " + num1 + " " + num2;
    else if (num1 > num2 && num1 > num3 && num2 < num3)
        return num1 + " " + num3 + " " + num2;
}
console.log(sortNumber(0,-1,4))


var numbers = [3, 5, 1, 2, -4]
function bubble_Sort(a) {
    var swapp;
    var n = a.length - 1;
    var x = a;
    do {
        swapp = false;
        for (var i = 0; i < n; i++) {
            if (x[i] < x[i + 1]) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);
    return x;
}
bubble_Sort(numbers)

// Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.

function largestNumbers(a, b, c, d, e) {
    if (a > b && a > c && a > d && a > e) {
        console.log(a)
    } else if (b > a && b > c && b > d && b > e) {
        console.log(b);
    } else if (c > a && c > b && c > d && c > e) {
        console.log(c);
    } else if (d > a && d > b && d > c && d > e) {
        console.log(d);
    } else {
        console.log(d)
    }
}
largestNumbers(-5, -2, -6, 0, -1)



// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

function oddOrEven() {
    var c = 16;
    for (var i = 0; i < c; i++) {
        if (i % 2 == 0) {
            console.log(i + " is even");
        } else {
            console.log(i + " is odd");
        }
    }
}
oddOrEven()

// Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i + " is FizzBuzz");
        } else if (i % 5 == 0) {
            console.log(i + " is Buzz");
        } else if (i % 3 == 0) {
            console.log(i + " is Fizz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();

// Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor

function contructPattern() {
    var n1 = [];
    var serie = [];
    for (var i = 0; i < 5; i++) {
        n1 = "*";
        serie.push(n1)
        console.log(serie.toString());
    }
}
contructPattern()
// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

function under() {
    var tot3 = 0;
    var tot5 = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 == 0) {
            tot3 += i;
        } else if (i % 5 == 0) {
            tot5 += i;
        }
    }
    return tot3 + tot5;
}

console.log("total is => " + under());