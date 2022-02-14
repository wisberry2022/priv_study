var Person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    console.log( this.name[0] + this.age + this.gender + this.interests[0] );
  },
  greeting: function() {
    console.log("Hi! im" + this.name[0] + '.');
  }
}

var bob = Object.create(Person);

console.log(bob);
