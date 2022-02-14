var cat = "나비";

var kitty = { name: "나비", family: "코리안 숏 헤어", age: 1, weight: 0.1 };


var person = {
  name: "홍길동",
  birthday: "030219",
  pId: "1234567",
  fullId: function() {
    return this.birthday + this.pId;
  }
};

console.log(person.name);
console.log(person["name"]);

var data = person.fullId();
console.log(data);
console.log(person.fullId);
