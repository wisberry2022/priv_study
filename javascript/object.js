var Person = new Object();

Person.name = ["Bob","John","William"];
Person.age = 21;
Person.hometown = 'Busan';

console.log(Person);

for ( var atom in Person ) {
  console.log(Person[atom]);
  if ( typeof Person[atom] == 'object') {
    for ( var i = 0; i < Person[atom].length; i++) {
      console.log(Person[atom][i]);
    }
  }
}

var Person2 = {
  name : 'Bob',
  age : 21,
  hometown : 'California',
  introduce : function () {
    console.log('안녕하세요 제 이름은' + this.name + '입니다! 나이는' + this.age + '살입니다! 고향은 ' + this.hometown + '입니다!');
  }
}

console.log(Person2);
Person2.introduce();
