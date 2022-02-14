var x = 10, y = 20;

function sub() {
  return x - y;
}

console.log(sub() + "<br>");

function parentFunc() {
  var x = 1, y = 2;
  function add() {
    return x + y;
  }
  return add();
}

console.log(parentFunc());

var globalNum = 10;

function printNum() {
  console.log(globalNum);
  var globalNum = 20;
  console.log(globalNum);
}

printNum();
