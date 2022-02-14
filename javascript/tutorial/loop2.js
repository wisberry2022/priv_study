gugudan:
for (var i = 2; i <= 9; i++) {
  dan:
  for ( var j = 1; j <= 9; j++ ) {
    if ((i*j) % 2 == 0)
      continue dan;
    console.log(i + " * " + j + " = " + ( i*j ) + "<br>");
  }
}


var lectures = ["html", "css", "자바스크립트", "php"];
var topic = "자바스크립트";

for ( var i = 0; i < lectures.length; i++) {
  if ( lectures[i] == topic ) {
    console.log(topic + " 과목은 " + ( i + 1 ) + " 번째 과목입니다.");
    break;
  }
}

gugudan:
for ( var i = 2; i <= 9; i++ ) {
  dan:
  for ( var j = 1; j <= 9; j++ ) {
    if ( i > 3 )
      break gugudan;
    console.log(i + " * " + j + " = " + ( i*j ) + "<br>");
  }
}
