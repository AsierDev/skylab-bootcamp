function camelCaseToLowerCaseWithSpaces(str) {
    var array = str.split('');
    array[0] = array[0].toUpperCase();
    var exp = /[A-Z0-9=*()/&$%·"!-:;<>{}^*]/g;
    var find = str.match(exp);
    console.log(find)

    for (var i = 1; i < array.length; i++) {
        for (var j = 0; j < find.length; j++) {
            if (array[i] == find[j]) {
                array[i] = ' ' + array[i].toLowerCase();
            }
        }

    }

    return array.join('');
}