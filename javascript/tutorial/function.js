function addNum(x, y) {
  return x + y;
}

console.log(addNum(3,4));

function multiNum(x, y) {
  return x * y;
}

//var num = multiNum(3,4);
//console.log(num);

function sqr(x) {
  return x * x;
}

var sqrNum = sqr;
console.log(sqr(4) + "<br>");
console.log(sqrNum(4));

function localNum() {
  var num = 10;
  console.log(typeof(num));
}

localNum();
console.log(typeof(num));

var num2 = 10;

function globalNum() {
  console.log(num2);
  num2 = 30;
}

globalNum();
console.log(num2);

var num3 = 20;
function globalNum2() {
  var num3 = 40;
  console.log(num3);
  console.log(window.num3);
}

globalNum2();
