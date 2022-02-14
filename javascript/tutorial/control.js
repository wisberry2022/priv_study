var x = 10, y = 20;

if ( x == y ) {
  console.log("x와 y는 같습니다.");
}
if (x < y) {
  console.log("x가 y보다 작습니다.");
}
if (x > y)
  console.log("x가 y보다 큽니다.");

if ( x == y ) {
  console.log("x와 y는 같습니다.");
} else {
  if ( x > y )
    console.log("x가 더 큽니다!");
  else
    console.log("y가 더 큽니다!");
}

if ( x == y ) {
  console.log("x와 y는 같습니다");
} else if ( x < y ) {
  console.log("x가 y보다 작습니다.");
} else {
  console.log("x가 y보다 큽니다.");
}
