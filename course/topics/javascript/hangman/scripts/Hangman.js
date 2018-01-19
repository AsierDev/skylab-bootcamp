function Hangman(word, attemps) {
    var w = word.split('');
    var z = Array(w.length).fill("_");
    var endGame = false;

    function win(charOrWord) {
        if (charOrWord == w.join('') || z.toString() == w.toString()) {
            return true;
        }
    }

    function gameOver(charOrWord) {
        if (attemps < 1) {
            return true;
        } else if (charOrWord.length > 1 && charOrWord != word) {
            return true;
        }
    }

    this.try = function (charOrWord) {
        if (endGame === false) {
            var check = false;
            for (var i = 0; i < w.length; i++) {
                if (charOrWord === w[i]) {
                    z[i] = w[i].toUpperCase();
                    check = true;
                }
            }
            if (check == true) {
                check = false;
                if (win(charOrWord)) {
                    endGame = true;
                    return 'You have guessed the word, well done!';
                } else {
                    return attemps + " " + z.join(' ');
                }
            } else if (win(charOrWord)) {
                endGame = true;
                return 'You have guessed the word, well done!';
            } else {
                attemps--;
                if (gameOver(charOrWord)) {
                    if (charOrWord.length > 1) {
                        endGame = true;
                        return 'Sorry, you have not guessed... the correct word is HELLO.';
                    } else {
                        endGame = true;
                        return 'Sorry, you have not guessed... the correct word is HELLO.';
                    }
                }
                return attemps + " " + z.join(' ');
            }
        } else {
            return 'GAME OVER.'
        }
    }
}

Hangman.prototype.try = function (charOrWord) {
    // TODO
};