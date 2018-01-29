/* ### counter-digit

Write a recursive function to count the times that a digit its repeat in a number.

```
input -> digitCount(2536228324, 2);
output-> 2 its 4 times
``` 
*/

//  function digitCount( digit, number ) {
//     var dig = digit.toString();
//     var num = number.toString(); 
//     var acc = 0;
    
//     for (var i =0; i < dig.length; i++) {
//         if (dig[i] === num) {
//             acc++;
//         }
//     }
//    return number + " is in "+ digit + " "+ acc + " times"
// }
// console.log(digitCount(2536228324, 2))

 

 //////////////////////////////////////////////////////////////////////

//  function digitCount(digit, number) {
//     var dig = digit.toString().split("");
//     var num = number.toString();
//     // var acc = 0;

//    var count = dig.reduce(function(acc, current) {
//         if (num.indexOf(current) !== -1) {
//             return acc + 1;
//         } else {
//             return acc;
//         }
//    },0)

//    return count;
// }
// console.log(digitCount(2536228324, 2))


/////////////////////////////////////////////////////////////////////////


function digitCount(digit, num) {

    var acc = 0;
    
    function count(digit, num) {
        var dig = digit.toString();
        
        if (dig.length > 0) {
    
            if (dig.charAt(0) === num.toString()) {
                acc++;
                dig = dig.substr(1);
                count(dig,num)
            } else {
                dig = dig.substr(1);
                count(dig,num)
            }
        };
    }
    count(digit, num);

    return acc
}


console.log(digitCount(2536228324, 2)) 