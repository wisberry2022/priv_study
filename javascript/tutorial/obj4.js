function Dog(color, name, age, family) {
  this.color = color;
  this.name = name;
  this.age = age;
  this.family = family;
  this.breed = function() {
    return this.color + " " + this.family;
  }
}

var myDog = new Dog("검정색", "곰", 3, "불독");
myDog.hasOwnProperty("color");
myDog.hasOwnProperty("breed");
myDog.hasOwnProperty("class");

Object.defineProperty(myDog, 'color', { enumerable : false });

console.log(myDog.propertyIsEnumerable("color") + "<br>");
console.log(myDog.propertyIsEnumerable("name") + "<br>");
console.log(myDog.propertyIsEnumerable("age"));

var day = new Date();

console.log(Date.prototype.isPrototypeOf(day));
console.log(Date.prototype.isPrototypeOf(new String()));

var day = new Date();
console.log(Object.isExtensible(day) + "<br>");

var myDay = Object.preventExtensions(day);
console.log(Object.isExtensible(day));
