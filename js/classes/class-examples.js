export const classExamples = [
  {
    id: "animal",
    name: "Base Class: Animal",
    code: `class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      return \`\${this.name} makes a noise.\`;
    }
  }`,
    usage: `const a = new Animal("Creature");\na.speak();`,
    run: () => {
      class Animal {
        constructor(name) {
          this.name = name;
        }
        speak() {
          return `${this.name} makes a noise.`;
        }
      }
      return new Animal("Creature").speak();
    },
  },
  {
    id: "dog",
    name: "Inheritance: Dog extends Animal",
    code: `class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
    speak() {
      return \`\${this.name} the \${this.breed} barks.\`;
    }
  }`,
    usage: `const d = new Dog("Rex", "Labrador");\nd.speak();`,
    run: () => {
      class Animal {
        constructor(name) {
          this.name = name;
        }
        speak() {
          return `${this.name} makes a noise.`;
        }
      }
      class Dog extends Animal {
        constructor(name, breed) {
          super(name);
          this.breed = breed;
        }
        speak() {
          return `${this.name} the ${this.breed} barks.`;
        }
      }
      return new Dog("Rex", "Labrador").speak();
    },
  },
  {
    id: "cat",
    name: "Subclass: Cat overrides speak()",
    code: `class Cat extends Animal {
    speak() {
      return \`\${this.name} meows.\`;
    }
  }`,
    usage: `const c = new Cat("Whiskers");\nc.speak();`,
    run: () => {
      class Animal {
        constructor(name) {
          this.name = name;
        }
        speak() {
          return `${this.name} makes a noise.`;
        }
      }
      class Cat extends Animal {
        speak() {
          return `${this.name} meows.`;
        }
      }
      return new Cat("Whiskers").speak();
    },
  },
  {
    id: "static",
    name: "Static Method",
    code: `class MyClass {
    static greet() {
      return "Hello from static!";
    }
  }`,
    usage: `MyClass.greet();`,
    run: () => {
      class MyClass {
        static greet() {
          return "Hello from static!";
        }
      }
      return MyClass.greet();
    },
  },
  {
    id: "es5-constructor",
    name: "ES5 Constructor Function",
    code: `function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function () {
    return "Hi, I'm " + this.name;
  };`,
    usage: `const p = new Person("ProtoMan");\np.greet();`,
    run: () => {
      function Person(name) {
        this.name = name;
      }
      Person.prototype.greet = function () {
        return "Hi, I'm " + this.name;
      };
      return new Person("ProtoMan").greet();
    },
  },
  {
    id: "private-field",
    name: "Private Class Field (#secret)",
    code: `class Secret {
    #secret = "shhh...";
    reveal() {
      return this.#secret;
    }
  }`,
    usage: `new Secret().reveal();`,
    run: () => {
      class Secret {
        #secret = "shhh...";
        reveal() {
          return this.#secret;
        }
      }
      return new Secret().reveal();
    },
  },
  {
    id: "abstract",
    name: "Abstract-like Base Class",
    code: `class Shape {
    getArea() {
      throw new Error("getArea() must be implemented");
    }
  }
  
  class Square extends Shape {
    constructor(size) {
      super();
      this.size = size;
    }
    getArea() {
      return this.size * this.size;
    }
  }`,
    usage: `new Square(4).getArea();`,
    run: () => {
      class Shape {
        getArea() {
          throw new Error("getArea() must be implemented");
        }
      }
      class Square extends Shape {
        constructor(size) {
          super();
          this.size = size;
        }
        getArea() {
          return this.size * this.size;
        }
      }
      return new Square(4).getArea();
    },
  },
];
