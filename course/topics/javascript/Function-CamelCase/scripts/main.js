
/*  function to convert camelCase text into normal case and spaces (e.g. "helloWorld" -> "hello world"). */

function toLowerSpaceCase(string) {
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
toLowerSpaceCase("thisIsThe1stFunction")