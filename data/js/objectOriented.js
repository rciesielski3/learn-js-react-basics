export const objectOrientedExamples = [
  {
    id: 'object-literal',
    name: 'Object Literal',
    description: 'Define a simple object with properties and methods using literal syntax.',
    code: `const person = {
  name: "Alice",
  greet() {
    return "Hello, " + this.name;
  }
};`,
    usage: `person.greet() → "Hello, Alice"`,
    run: () => {
      const person = {
        name: 'Alice',
        greet() {
          return 'Hello, ' + this.name;
        }
      };
      return person.greet();
    }
  },
  {
    id: 'constructor-func',
    name: 'Constructor Function',
    description:
      'Functions used with `new` create reusable object blueprints before classes existed.',
    code: `function Person(name) {
  this.name = name;
  this.greet = function () {
    return "Hi, I'm " + this.name;
  };
}

const user = new Person("Bob");`,
    usage: `user.greet() → "Hi, I'm Bob"`,
    run: () => {
      function Person(name) {
        this.name = name;
        this.greet = function () {
          return "Hi, I'm " + this.name;
        };
      }
      const user = new Person('Bob');
      return user.greet();
    }
  },
  {
    id: 'class-syntax',
    name: 'Class Syntax',
    description: 'Modern way to define object blueprints using ES6 `class` keyword.',
    code: `class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + " makes a sound.";
  }
}

const cat = new Animal("Whiskers");`,
    usage: `cat.speak() → "Whiskers makes a sound."`,
    run: () => {
      class Animal {
        constructor(name) {
          this.name = name;
        }
        speak() {
          return this.name + ' makes a sound.';
        }
      }
      return new Animal('Whiskers').speak();
    }
  },
  {
    id: 'inheritance',
    name: 'Class Inheritance',
    description: 'Use `extends` to inherit properties and methods from a base class.',
    code: `class Vehicle {
  constructor(type) {
    this.type = type;
  }
  move() {
    return this.type + " moves.";
  }
}

class Car extends Vehicle {
  constructor(brand) {
    super("Car");
    this.brand = brand;
  }
  drive() {
    return this.brand + " drives fast.";
  }
}

const bmw = new Car("BMW");`,
    usage: `bmw.drive() → "BMW drives fast."`,
    run: () => {
      class Vehicle {
        constructor(type) {
          this.type = type;
        }
        move() {
          return this.type + ' moves.';
        }
      }

      class Car extends Vehicle {
        constructor(brand) {
          super('Car');
          this.brand = brand;
        }
        drive() {
          return this.brand + ' drives fast.';
        }
      }

      return new Car('BMW').drive();
    }
  }
];
