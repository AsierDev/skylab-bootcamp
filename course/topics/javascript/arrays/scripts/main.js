/* isArray

Write a JavaScript function to check whether an input is an array or not. */
function isArray(arr) {
    return Array.isArray(arr);
}
console.log("[1,2,3] es true => " + isArray([1, 2, 3]))
console.log("'hola' es false => " + isArray("hola"))

/* joinElements

Write a simple JavaScript program to join all elements of the following array into a string. */

function joinElements(a) {
    return a.join(',');
}
console.log('joinElements(["p","e","r","r","o"]) => ' + joinElements(["p", "e", "r", "r", "o"]));

/* array_Clone

Write a JavaScript function to clone an array.
 */

function arrayClone(a) {
    var b = a;
    return b;
}

console.log("deberia dar [1, 2, 4, 0] =>" + arrayClone([1, 2, 4, 0]))
console.log("deberia dar [1, 2, [4, 0]] =>" + arrayClone([1, 2, [4, 0]]))


/* findDifferences

Write a JavaScript function to find the difference of two arrays. */



/* Sum and Product

Write a JavaScript program to compute the sum and product of an array of integers. */



/* addItems
Write a JavaScript program to add items in an blank array and display the items.
 */

var arr = [];
function addItems(n) {
    arr.push(n);
}
addItems(8);
addItems(6);
addItems(5);
console.log(arr)

/*
generateArrayLength
 Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position.
 */
function generateArrayLength(a, b) {
    var arr = []
    arr.push(a);
    var count = a;
    for (var i = 0; i < b - 1; i++) {
        count++;
        arr.push(count);
    }
    return arr
}
console.log(generateArrayLength(-6, 4))

/* 
last

Write a JavaScript function to get the last element of an array.Passing a parameter 'n' will return the last 'n' elements of the array. 
*/

function last(arr, n) {
    if (n == undefined) {
        return arr.pop();
    } else {
        return arr.slice(-n)
    }
}
console.log("esto dará -2 => " + last([7, 9, 0, -2]));
console.log("esto dará [9,0,-2] => " + last([7, 9, 0, -2], 3));
console.log("esto dará [7,9,0,-2] => " + last([7, 9, 0, -2], 6));

/* sortItems

Write a JavaScript program to sort the items of an array. */

function sortItems(arr) {
    return arr.sort();
}
console.log("Sample Output : -4,-3,1,2,3,5,6,7,8 =>" + sortItems([-3, 8, 7, 6, 5, -4, 3, 2, 1]));


/* getRandom

Write a JavaScript function to get a random item from an array. */

function getRandom(arr) {
    var x = Math.floor(Math.random() * arr.length);
    return arr[x];
}
console.log("Numero aleatorio de [2,5,8,-6,-9,7] => " + getRandom([2, 5, 8, -6, -9, 7]));

/* findDuplicates

Write a JavaScript program to find duplicate values in a JavaScript array. */

function findDuplicates(arr) {
    var duplicates = [];
    arr.sort(function (a, b) { return a - b });
    console.log("array ordenada " + arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            if (duplicates.indexOf(arr[i]) == -1) {
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}
console.log("Encontrar duplicado de [2,5,8,3,2,5,6,8,2] return [2, 5, 8] => " + findDuplicates([2, 5, 8, 3, 2, 5, 6, 8, 2]))

/* mergeArrays

Write a JavaScript function to merge two arrays and removes all duplicates elements. */

function mergeArrays(arr1, arr2) {
    var duplicates = [];
    var noDuplicates = [];
    var arr = arr1.concat(arr2);
    arr.sort(function (a, b) { return a - b });
    console.log("array ordenada " + arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i + 1]) {
            duplicates.push(arr[i]);
        }
    }
    return duplicates;
}
console.log("Encontrar duplicado de [1, 2, 3] y [2, 30, 1] return [3, 2, 30, 1] => " + mergeArrays([1, 2, 3], [2, 30, 1]))


/* separateEven

Write a JavaScript program which accept a number as input and insert dashes(-) between each two even numbers.For example if you accept 025468 the output should be 0 - 254 - 6 - 8.
 */

function separateEven(n) {
    var arr = n.toString().split('')
    var sep = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 && arr[i + 1] %2 == 0 ) {
           sep.push(arr[i]);
           sep.push("-");
        } else {
            sep.push(arr[i])
        }
    } 
    var x = sep.join("").toString();
    return x;
}  
console.log("de esto 025468 ha de dar 254-68=> "+separateEven(025468));
console.log("de esto 7494868 ha de dar 7494-8-6-8=> " + separateEven(7494868));   















