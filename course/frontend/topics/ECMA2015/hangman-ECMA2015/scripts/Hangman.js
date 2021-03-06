class Hangman {
    
    constructor(word,attempts) {

        const w = word.split('');
        let underscore = new Array(w.length);
        let endGame = false;

        for (let i = 0; i < underscore.length; i++)
            underscore[i] = '_';

        let win = charOrWord => {
            if (charOrWord === word || underscore.join('') === word.toUpperCase())
                return true;
        }

        let gameOver = charOrWord => {
            if (attempts === 0) {
                return true;
            } else if (charOrWord.length > 1 && charOrWord != word) {
                return true;
            }

        }

        this.try = function (charOrWord) {
            if (endGame === false) {
                let check = false;
                for (let i = 0; i < w.length; i++) {
                    if (charOrWord === w[i]) {
                        underscore[i] = w[i].toUpperCase();
                        check = true;
                    }
                }
                if (check === true) {
                    check = false;
                    if (win(charOrWord)) {
                        endGame = true;
                        return 'You have guessed the word, well done!';
                    } else {
                        return `${attempts} ${underscore.join(' ')}`;
                        // return attempts +' '+ underscore.join(' ');
                    }
                } else if (win(charOrWord)) {
                    endGame = true;
                    return 'You have guessed the word, well done!';
                } else {
                    attempts--;
                    if (gameOver(charOrWord)) {
                        if (charOrWord.length > 1) {
                            endGame = true;
                            return `Sorry, you have not guessed... the correct worrrrrd is ${word}.`;
                        } else {
                            endGame = true;
                            return `Sorry, you have not guessed... the correct worrrrrd is ${word}.`;
                        }
                    } else {
                        return `${attempts} ${underscore.join(' ')}`;
                    }

                }
            } else {
                return 'GAME OVER.'
            }


        }



    }

}



/* function Hangman(word, attempts) {

    let w = word.split('');
    let underscore = new Array(w.length);
    let endGame = false;

    for (let i = 0; i < underscore.length; i++)
        underscore[i] = '_';

    

    function win(charOrWord) {
        if (charOrWord === word || underscore.join('') === word.toUpperCase())
            return true;
    }

    function gameOver(charOrWord) {
        if (attempts === 0) {
            return true;
        } else if (charOrWord.length > 1 && charOrWord != word) {
            return true;
        }

    }

    this.try = function (charOrWord) {
        if (endGame === false) {
            let check = false;
            for (let i = 0; i < w.length; i++) {
                if (charOrWord === w[i]) {
                    underscore[i] = w[i].toUpperCase();
                    check = true;
                }
            }
            if (check === true) {
                check = false;
                if (win(charOrWord)) {
                    endGame = true;
                    return 'You have guessed the word, well done!';
                } else {
                    return `${attempts} ${underscore.join(' ')}`;
                    // return attempts +' '+ underscore.join(' ');
                }
            } else if (win(charOrWord)) {
                endGame = true;
                return 'You have guessed the word, well done!';
            } else {
                attempts--;
                if (gameOver(charOrWord)) {
                    if (charOrWord.length > 1) {
                        endGame = true;
                        return `Sorry, you have not guessed... the correct worrrrrd is ${word}.`;
                    } else {
                        endGame = true;
                        return `Sorry, you have not guessed... the correct worrrrrd is ${word}.`;
                    }
                } else {
                    return `${attempts} ${underscore.join(' ')}`;
                }

            }
        } else {
            return 'GAME OVER.'
        }


    }
} */


let game = new Hangman('hello', 10);
console.log(game.try('i'));
console.log(game.try('t'));
/* console.log(game.try('e'));
console.log(game.try('z'));
console.log(game.try('z'));
console.log(game.try('z'));
console.log(game.try('z'));
console.log(game.try('vaca'));
console.log(game.try('z'));
console.log(game.try('z'));


console.log(game.try('perro'));
console.log(game.try('r'));
console.log(game.try('e'));
console.log(game.try('o')); */