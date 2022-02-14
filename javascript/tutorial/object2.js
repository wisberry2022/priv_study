var kitty = {
  name: "나비",
  family: "코리안 숏 헤어",
  age: 1,
  weight: 0.1
};

console.log(kitty.name + kitty.family);

var day = new Date();
console.log(day.getFullYear());

var obj = Object.create(null, {
  x: { value: 100, enumerable: true },
  y: { value: 200, enumerable: true }
});

console.log(obj.x);
console.log(obj.y);
Object.getPrototypeOf(obj);
