// string
const name = "Mike";
const age = 30;

const name1 = "Mike";
const name2 = 'Mike';
const name3 = `Mike`;

const message = "I'm a boy.";
const message2 = 'I\'m a boy.'; // \ 뒤 문자는 특수문자로 인식

const message3 = `My name is ${name}`; // ${} 형태를 통해 string 내부에 변수 삽입 가능
console.log(message3);

const message4 = `나는 ${30+1}살 입니다.`; // ${}를 사용하고 싶다면 일반 따옴표가 아니라 ``를 사용하여야 한다.
console.log(message4);

console.log(name1 + name2); // 합쳐진다.

// number
const PI = 3.14;

console.log(1+2);
console.log(10-3);

const name5 = "Mike";
const y = name2/2;

console.log(y); // NaN = Not a Number (숫자가 아닌 값이 출력될 때)

// boolean
const a = true;
const b = false;


const name10 = 'Mike';
const r_age = 40;

console.log(name == 'Mike');
console.log(age > 50);

//null & undefined

// let age;
let use = null;

//console.log(age100) age 변수에 값이 없어 오류 발생
console.log(use);

//typeof 연산자 : 변수의 자료형 확인 가능

console.log(typeof 3);
console.log(typeof name10);