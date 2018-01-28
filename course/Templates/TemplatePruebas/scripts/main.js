
var c = function (num) {
    if (num === 0) return;
    console.log(num);
    c(num-1);
}

console.log(c(10))