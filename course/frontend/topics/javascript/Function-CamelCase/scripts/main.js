
/*  function to convert camelCase text into normal case and spaces (e.g. "helloWorld" -> "hello world"). */

/* function toLowerSpaceCase(string) {
    var array = string.split('');
    array[0] = array[0].toUpperCase();
    for (var i = 1; i < array.length; i++) {
        if (array[i] <= 'Z' && array[i] >= 'A') {
            array[i] = ' ' + array[i].toLowerCase();
        } else if (array[i] < Infinity && array[i] > -Infinity) {
            array[i] = ' ' + array[i].toLowerCase();
        } 
    }
    return array.join('');
}
toLowerSpaceCase("thisIsThe1stFunction") */



function splitCamelCase(str) {
    var array = str.split('');
    array[0] = array[0].toUpperCase();
    var exp = /[A-Z0-9=*()/&$%·"!-:;<>{}^*]/g;
    var find = str.match(exp);

    for (var i = 1; i < array.length; i++) {
        for (var j = 0; j < find.length; j++) {
            if (array[i] == find[j]) {
                array[i] = ' ' + array[i].toLowerCase();
            } 
        }
        
    }
    
    return array.join('');
}
console.log(toLowerSpaceCase("thisIsThe1stFunction"))
console.log(toLowerSpaceCase("hOlA"))
console.log(toLowerSpaceCase("h1opOlAr3rTyE7afg9"))
console.log(toLowerSpaceCase("holaQueTalEs=ACosas"))
console.log(toLowerSpaceCase("hol*Qeu%hol`fgg·2fy/rggs&4fsfsFsd=ACosas"))
console.log(toLowerSpaceCase("11111111"))
