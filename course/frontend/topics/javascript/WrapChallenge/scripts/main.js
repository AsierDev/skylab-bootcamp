
/*
Crear algo que devuelva un output => text("something").wrap("%").wrap("[","]").wrap("&").etc
output ==> &[%someting%]&
 */


function text(source) {
    var wrap = function (arg1, arg2) {
        if (arg2 === undefined) {
            arg2 = arg1;
        }

        source = arg1 + source + arg2;
        return this;
    };

    var toString = function () {
        return source;
    };

    return {
        wrap: wrap,
        toString: toString
    };
}

console.log(text('something').wrap('$').wrap('[', ']').wrap('{', '}').wrap('<', '>').wrap('#').toString());


///////////////////////////////////////////////////////////////////////////////////////


var text;
(function () {
    function wrap(text, before, after) {
        return (before || '') + text + (after || before || '');
    }

    text = function (_text) {
        var __text = new String(_text);

        __text.wrap = function (before, after) {
            return text(wrap(_text, before, after));
        }

        return __text;
    }
})();
 