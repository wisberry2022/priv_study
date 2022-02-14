function Dog(color, name, age) {
  this.color = color;
  this.name = name;
  this.age = age;
}

var myDog = new Dog("흰색", "마루", 1);
delete myDog.age;

function Dog2(color, name, age) {
  this.color = color;
  this.name = name;
  this.age = age;
}

var myDog2 = new Dog2('흰색', '마루', 1);

Object.defineProperty( myDog2, 'color', {enumerable : false} );
console.log(Object.keys(myDog2) + "<br>");
console.log(Object.getOwnPropertyNames(myDog2));

function Dog3(color, name, age) {
  this.color = color;
  this.name = name;
  this.age = age;
}

var myDog3 = new Dog3("흰색", "마루", 1);
var hisDog3 = new Dog3("흰색", "마루", 1);
console.log((myDog3 == hisDog3) + "<br>");
console.log((myDog3 == hisDog3) + "<br>");

var herDog3 = hisDog3;
console.log((hisDog3 == herDog3) + "<br>");
console.log((hisDog3 == herDog3) + "<br>");
