var obj = new Object();
var arr = new Array();
var date = new Date();

function Dog(color, name, age) {
  this.color = color;
  this.name = name;
  this.age = age;
}

var myDog = new Dog("흰색", "마루", 1);
console.log(myDog.name, myDog.color, myDog.age);

var myDog2 = new Dog("흰색", "마루", 1);
myDog2.family = "시베리안 허스키";
myDog2.breed = function() {
  return this.color + " " + this.family;
}

console.log(myDog2.breed());

function Dog2(color, name, age) {
  this.color = color;
  this.name = name;
  this.age = age;
  this.family = "시베리안 허스키";
  this.breed = function() {
    return this.color + " " + this.family;
  };
}

var myDog = new Dog2("흰색", "마루", 1);
var hisDog = new Dog2("갈색", "콩이", 3);
console.log(myDog.family, hisDog.family);

function Dog3(color, name, age) {
  this.color = color;
  this.name = name;
  this.age = age;
}

Dog3.prototype.family = "시베리안 허스키";
Dog3.prototype.breed = function() {
  return this.color + " " + this.family;
};

var myDog3 = new Dog3("흰색", "마루", 1);
var hisDog3 = new Dog3("갈색", "콩이", 3);

console.log(myDog3.family, hisDog3.family);
console.log(myDog3.breed());
console.log(hisDog3.breed());
