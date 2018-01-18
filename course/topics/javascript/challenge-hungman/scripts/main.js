
function Hangman(word, attemps) {

    var w = word.split('');
    var z = Array(w.length).fill("_");

    console.log(w, z)

    function win(letter) {
        if (letter == w.join('') || z.toString() == w.toString()) {
            return true;
        }
    }

    function gameOver(letter) {
        if (attemps < 1) {
            return true;
        } else if (letter.length > 1 && letter != word) {
            return true;
        }
    }

    this.try = function (letter) {

        var check = false;
        for (var i = 0; i < w.length; i++) {
            if (letter === w[i]) {
                z[i] = w[i];
                check = true;
            }
        }
        if (check == true) {
            if (win(letter)) {
                check = false;
                return "You won!, The answer correct was => " + word;
            } else {
                return "Bien! La letra " + letter + " existe! \nTe quedan =>" + attemps + " intentos \n" + z.join(' ');
            }
        } else if (win(letter)) {
            return "You won!, The answer correct was => " + word;
        } else {
            attemps--;
            if (gameOver(letter)) {
                if (letter.length > 1) {
                    return "Game Over, has fallado! La palabra correcta era => " + word;
                } else {
                    return "Mala suerte! la letra " + letter + " tampoco estaba! \nLa palabra era => " + word;
                }
            }
            return "Te quedan =>" + attemps + " intentos \nLa letra " + letter + " no existe \n" + z.join(' ');
        }

    }

}

var game = new Hangman("perro", 10)


//game.try("p")
/* console.log(game.try("t"))
console.log(game.try("t"))
console.log(game.try("g"))
console.log(game.try("j"))   
console.log(game.try("e"))
console.log(game.try("t")) 
console.log(game.try("t")) 
console.log(game.try("t")) 
console.log(game.try("t"))
console.log(game.try("t"))
console.log(game.try("t")) 
console.log(game.try("p"))
console.log(game.try("r"))
console.log(game.try("o"))
console.log(game.try("e")) */



console.log(game.try("perro")) 