
/* remove-repeat-chars

Write a recursive function that remove the repeat characters.
input -> removeRepeatChars('aabcbcb') output -> abc

*/


 /* function removeRepeatChars(str) {

    var string = str.split('').sort();
    console.log(string)
    var newString = [];

    for (var i = 0; i < string.length; i++) {

        if (string[i] !== string[i + 1]) {
            newString.push(string[i]);
        };
    };

    return newString.join('');

}
console.log(removeRepeatChars('aabcbcb'))
console.log(removeRepeatChars('hhhddddhhhhdddhhhhddd'))
console.log(removeRepeatChars('jajajaja!'))
console.log(removeRepeatChars('perroverde'))  */


function removeRepeatChars(str) {
    
    var string = str.split('').sort();
    var newString = [];
    var i = 0;
    
    (function remove(str) {

        while (string.length > 0) {

            if (string[i] !== string[i+1]) {
                newString.push(string[i]);
                string.shift();
                i++;
                remove(string);
                
            } else {
                string.shift()
                remove(string);
            }
        }
    })

    remove(string);
    return newString.join('');   
}
console.log(removeRepeatChars('aabcbcb'))
console.log(removeRepeatChars('hhhddddhhhhdddhhhhddd'))
console.log(removeRepeatChars('jajajaja!'))
console.log(removeRepeatChars('perroverde')) 