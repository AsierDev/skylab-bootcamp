/* map

Write a high order function that take the array of months and create a new array that contains the same months but with the first letter in upper case. */

function mapMonths() {
    var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    var newMonths = months.map(function(x) {
        return x[0].toUpperCase()+x.slice(1);
    })
    return newMonths;
}
console.log("Meses con primera letra a mayusculas => "+mapMonths());

/* filter

Write a high order function that take the array of months and create a new array that contains only the months that begin with j. */

function filter() {
    var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    var newMonths = months.filter(function(x) {
        if (x.indexOf("j") == 0) {
            return x;
        }
    })
    return newMonths;
}

console.log("Meses que comienzan con j => "+filter())


/* reduce

Write a high order function that counts all the vowels of the following text. */


function reduce() {

    var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.';

    var arrayIpsum = loremIpsum.split("");
    var vowels = "aeiouAEIOU";
    var countVowels = arrayIpsum.reduce(function (acc, current) {
        if (vowels.split("").indexOf(current) !== -1) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);
    return countVowels;
}
console.log(reduce());

