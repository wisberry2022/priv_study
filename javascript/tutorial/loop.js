var i = 1;

while ( i < 10 ) {
  console.log(i + "<br>");
  i++;
}

var i = 1, j = 1;

while ( i > 3 ) {
  console.log("i : " + (i++) + "<br>");
}
do {
  console.log("j : " + (j++) + "<br>");
} while ( j > 3 );

for (var i = 1; i < 10; i++) {
  console.log(i + "<br>");
}

console.log("for-in 구문");
var String = 'element';

for (exam in String) {
  console.log(exam);
}

var arr = [3,4,5];
for ( var i = 0; i < arr.length; i++ ) {
  console.log(i+ " ");
}

var obj = { name : "이순신", age : 20 };
for ( var i in obj ) {
  console.log(i + "<br>");
}

for ( var exam of String ) {
  console.log(exam);
}

for ( var i = 0; i < arr.length; i++ ) {
  console.log(arr[i] + " ");
}

for ( var value of arr ) {
  console.log(value + " ");
}

var arr2 = new Set([1,1,2,2,3,3]);
for ( var value of arr2 ) {
  console.log(value + " ");
}
