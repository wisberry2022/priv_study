var arr0 = new Array();
arr0[99] = "JavaScript";

console.log(arr0.length);
console.log(arr0);

var arr = new Array(3);
for ( var row = 0; row < 3; row++ ) {
  arr[row] = new Array();
  for ( var column = 0; column < 4; column++) {
    arr[row][column] = "[" + row + "," + column + "]";
    console.log(arr[row][column] + " ");
  }
}

console.log(arr);

var arr = [];
arr["하나"] = 1;
arr["참"] = true;
arr["자바스크립트"] = "JavaScript";

console.log(arr["하나"]);
console.log(arr.length);
console.log(arr[0]);
console.log(arr);

var str = "안녕하세요!";
console.log(str.charAt(2));
console.log(str[2]);
console.log(str);

var str2 = str.split();
console.log(str2);

var arr3 = [1,2,3,4];
console.log(typeof(arr3));

function isArray(a) {
  return a.constructor.toString().indexOf("Array") > -1;
}

console.log(arr3.constructor);
console.log(arr3.constructor.toString());
console.log(arr3.constructor.toString().indexOf("Array"));
console.log(isArray(arr3));
