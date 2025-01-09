// // using class
// class PersonClass {
//   talk() {
//     return "Talking class";
//   }
// }

// const me = new PersonClass();
// console.log(me.talk());

// // using a function

// function personFunc() {}
// personFunc.prototype.talk = () => {
//   return "Talking function";
// };
// const you = new personFunc();
// console.log(you.talk());

// // using a pure object

// const personObj = {
//   talk() {
//     return "Talking object";
//   },
// };

// const Steve = Object.create(personObj);
// console.log(Steve.talk());

// class inheritance
class Animal {
  speak() {
    return "An animal sound";
  }
}

class Dog extends Animal {
  speak() {
    return "Woof Woof Woof";
  }
}

class Cat extends Animal {
  speak() {
    return "Meow Meow";
  }
}
