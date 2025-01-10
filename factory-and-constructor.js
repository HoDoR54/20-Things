// factory function and constructor function generally work the same

// factory function takes parameters and requires to return a object meanually

function factoryFunc(name, id) {
  return {
    greet() {
      return `Hello, my name is ${name}.`;
    },
    formallyGreet() {
      return `Hello, my name is ${name}, and my student id is ${id}.`;
    },
  };
}

const student = factoryFunc("Hpone Tauk Nyi", "211853"); // factory function will take the specifications and return an object to the variable
console.log(student);

// constructor function does exactly what factory function does but implicitly

function ConstructorFunc(name, id) {
  // use camel casing for constructor functions
  this.name = name;
  this.id = id;
  this.greet = () => {
    return `Hello, my name is ${this.name}`;
  };
  this.formallyGreet = () => {
    return `Hello, my name is ${this.name}, and my id is ${this.id}`;
  };
}

const student2 = new ConstructorFunc("Hpone Tauk Nyi", "211853"); // 'new' keyword is used to get access to the constructor function
console.log(student2);
