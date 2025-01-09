// const me = {};
// console.log(me.__proto__);

// const people = ["Hpone Tauk Nyi", "Z"];
// const person = "Hpone Tauk Nyi";
// const age = 12;
// console.log(age.__proto__);
// console.log(person.__proto__);
// console.log(people.__proto__);

function Person(name) {
  this.name = name;
} // create a constructor function as a Person instance

Person.prototype.talk = () => {
  return "Talking";
}; // add an method to the Person prototype (this method will be shared by all the instances)

const me = new Person("Hpone Tauk Nyi"); // add a new person
// console.log(me.talk());
console.log(`${me.name} is ${me.talk()}`);
console.log(Person.prototype); // Logs the Person prototype (which includes the 'talk' method)
console.log(me.prototype); // undefined
console.log(me.__proto__); // the same as Person.prototype

console.log(Person.prototype === me.__proto__); //  true

Person.prototype.walk = () => {
  return "Walking";
}; // again add a new method to the protoype

console.log(me.walk()); // me, a person, gets access to walking method

me.__proto__.dance = () => {
  return "Dancing";
}; // adding a method from me.proto will affect the constructor's prototype because a prototype is shared throguh all the instances
console.log(me.__proto__);
console.log(Person.prototype); // both will result the same

class SuperPerson extends Person {
  // Create a child class 'SuperPerson' that extends the 'Person' class.
  fly() {
    return "Flying";
  } // add a new method to SuperPerson (does not affect the parent)
  talk() {
    return super.talk() + " with superpowers";
  } // overrides the original talk method (only for superpersons)
}

const you = new SuperPerson();
console.log(you.talk());
