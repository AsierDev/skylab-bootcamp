
/* function text(str) {
    var string = str;
    this.wrap = function(w1, w2) {
        if (w2 == undefined) {
            return w1 + string + w1;
        } else {
            return w1 + string + w1;
        }
    }
} 

console.log(text("hola").wrap("/")) */


var text2 = {
    str: "hello",
    wrap:  function(w) {
        return this.wrap + this.str + this.wrap;        
    }
} 
console.log(text2.wrap("&"))

