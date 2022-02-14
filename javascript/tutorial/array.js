var arrLit = [1, true, "JavaScript"];
var arrObj = Array(1, true, "JavaScript");
var arrNewObj = new Array(1, true, "JavaScript");

console.log(arrLit + "<br>");
console.log(arrObj + "<br>");
console.log(arrNewObj);

var arr = ["JavaScript"];
var element = arr[0];

arr[1] = 10;
arr[2] = element;

console.log("배열 arr의 요소에는 [" + arr + "]가 있습니다. <br>");
console.log("배열 arr의 길이는" + arr.length + "입니다. <br>");

delete arr[2];

console.log("배열 arr의 요소에는 [" + arr + "]가 있습니다. <br>");
console.log("배열 arr의 길이는" + arr.length + "입니다. <br>");

var arr3 = [1,2,3];

console.log(arr3);

arr3.push('strip');
console.log(arr3);

console.log(arr3.length);
arr3[arr3.length] = 45;
console.log(arr3);

arr3[0] = 'e';
console.log(arr3);

var arr4 = [1, true, "JavaScript"];

var result = "<table><tr>";
for ( var idx in arr4 ) {
  result += "<td>" + arr4[idx] + "</td>";
}
result += "</tr></table>";

console.log(result);
