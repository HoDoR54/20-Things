// using class
class PersonClass {
  talk() {
    return "Talking class";
  }
}

const me = new PersonClass();
console.log(me.talk());

// function inheritance

function personFunc() {}
personFunc.prototype.talk = () => {
  return "Talking function";
};
console.log(personFunc.prototype.talk());

const you = new personFunc();
console.log(you.talk());

// pure object

const personObj = {
  talk() {
    return "Talking object";
  },
};

const Steve = Object.create(personObj);
console.log(Steve.talk());
