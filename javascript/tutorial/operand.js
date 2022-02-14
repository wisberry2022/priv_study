var x = 3, y = 5;
var a = "abc", b = "bcd";

console.log((x > y) + "<br>");
console.log((a <= b) + "<br>");
console.log(x < a);

var x = true, y = false;

console.log(x && y);
console.log(x || y);
console.log(!x);
console.log(!y);

var a1 = 2, a2 = 3;

console.log(a1 & a2);

var x1 = 10, x2 = 30;

var result = (x1 > x2) ? x1+20 : x2+20;

console.log(result);

var str = new String("이것은 문자열입니다!");

console.log(str instanceof Object);
console.log(str instanceof String);
console.log(str instanceof Array);
