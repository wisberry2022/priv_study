var num = 10;

switch ( typeof num ) {
  case "number":
    console.log("변수 num의 타입은 숫자입니다.");
    break;
  case "string":
    console.log("변수 num의 타입은 문자열입니다.");
    break;
  case "object":
    console.log("변수 num의 타입은 객체입니다.");
    break;
  default:
    console.log("변수 num의 타입을 잘 모르겟다...");
    break;
}

var day = new Date().getDay();

switch(day) {
  case 1:
  case 2:
  case 3:
  case 4:
  default:
    console.log("아직도 주말은 멀었네요... 힘내자구요!");
    break;
  case 5:
    console.log("오늘은 불금이네요!");
    break;
  case 6:
  case 0:
    console.log("즐거운 주말에도 열심히 공부하는 당신~ 최고에요!!!");
    break;
}
