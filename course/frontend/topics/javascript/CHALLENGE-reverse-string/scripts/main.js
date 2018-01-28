
/* 
### reverse-string

Write a recursive function that reverse a string.

```
input -> reverseString('hello') output-> olleh

*/

function reverseString(str) {
    
    if (str === "") {
        return ''
    } else {

        return reverseString(str.slice(1)) + str.charAt(0);
    }
}
console.log(reverseString("hello"))


