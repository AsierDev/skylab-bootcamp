describe('camelCaseToLowerCaseWithSpaces ', function () {

    function camelCaseToLowerCaseWithSpaces(str) {
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


    function WhenInputANormalStringWhitOutUpperCase() {
        expect(camelCaseToLowerCaseWithSpaces('Hola')).toEqual('Hola');
    }
    it(camelCaseToLowerCaseWithSpaces(WhenInputANormalStringWhitOutUpperCase.name), WhenInputANormalStringWhitOutUpperCase)

    function WhenInputAStringWhitRandomUpperCase() {
        expect(camelCaseToLowerCaseWithSpaces('hOlA')).toBe('H ol a');
    }
    it(camelCaseToLowerCaseWithSpaces(WhenInputAStringWhitRandomUpperCase.name), WhenInputAStringWhitRandomUpperCase)

    function WhenInputAStringWhitRandomUpperCaseAndNumers() {
        expect(camelCaseToLowerCaseWithSpaces('h1opOlAr3rTyE7afg9')).toBe('H 1op ol ar 3r ty e 7afg 9');
    }
    it(camelCaseToLowerCaseWithSpaces(WhenInputAStringWhitRandomUpperCaseAndNumers.name), WhenInputAStringWhitRandomUpperCaseAndNumers)

    function WhenInputAStringWhitTheSameNumber() {
        expect(camelCaseToLowerCaseWithSpaces('11111111')).toBe('1 1 1 1 1 1 1 1');
    }
    it(camelCaseToLowerCaseWithSpaces(WhenInputAStringWhitTheSameNumber.name), WhenInputAStringWhitTheSameNumber)

    function WhenInputAStringWhitSimbolEqual() {
        expect(camelCaseToLowerCaseWithSpaces('holaQueTalEs=ACosas')).toBe('Hola que tal es = a cosas');
    }
    it(camelCaseToLowerCaseWithSpaces(WhenInputAStringWhitSimbolEqual.name), WhenInputAStringWhitSimbolEqual)

    function WhenInputAStringWhitRandomSimbol() {
        expect(camelCaseToLowerCaseWithSpaces('hol*Qeu%hol`fgg·2fy/rggs&4fsfsFsd=ACosas')).toBe('Hol * qeu %hol`fgg · 2fy /rggs & 4fsfs fsd = a cosas');
    }
    it(camelCaseToLowerCaseWithSpaces(WhenInputAStringWhitRandomSimbol.name), WhenInputAStringWhitRandomSimbol)

   

})