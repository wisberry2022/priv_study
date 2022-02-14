function addNum(x, y, z) {
  return x + y + z;
}

function addNum2(x, y, z) {
  if ( x == undefined )
    x = 0;
  if ( y == undefined )
    y = 0;
  if ( z == undefined )
    z = 0;
  return x + y + z;
};

function addNum3() {
  var sum = 0;
  for( var i = 0; i < arguments.length; i++ ) {
    sum += arguments[i];
  }
  return sum;
}

function addNum4() {
  for( var i =0; i < arguments.length; i++ ) {
    console.log(arguments[i]);
  }
}

function mul(a, b) {
  b = ( typeof b !== 'undefined' ) ? b : 1;
  return a*b;
}

function mul2(a, b = 1) {
  return a * b;
}

function sub() {
  var firstNum = arguments[0];
  for ( var i = 0; i < arguments.length-1; i++ ) {
    firstNum -= arguments[i+1];
  }
  return firstNum;
}

function sub2(firstNum, ...restArgs) {
  for(var i = 0; i < restArgs.length; i++) {
    firstNum -= restArgs[i];
  }
  return firstNum;
}

console.log(sub(10,2,3));
console.log(sub(10,1,5,8));
