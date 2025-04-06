// 1. Global context (non-strict mode)
export function globalThisExample() {
  return (function () {
    return this;
  })();
}
// Example usage:
// console.log(globalThisExample()); // Output: Window object in browsers or global object in Node.js

// 2. Global context (strict mode)
export function strictGlobalThisExample() {
  return (function () {
    "use strict";
    return this;
  })();
}
// Example usage:
// console.log(strictGlobalThisExample()); // Output: undefined in strict mode

// 3. Object method
export const obj = {
  name: "Rafal",
  greet() {
    return `Hi, ${this.name}`;
  },
};
// Example usage:
// console.log(obj.greet()); // Output: Hi, Rafal

// 4. Arrow function
export const arrowObj = {
  name: "ArrowMan",
  greet: () => `Hi from ${this?.name || "undefined"}`,
};
// Example usage:
// console.log(arrowObj.greet()); // Output: Hi from undefined
// Note: Arrow functions do not have their own `this`, they inherit it from the parent scope.

// 5. Bound function
export function boundGreet() {
  return this.name;
}
export const boundContext = {
  name: "Bounder",
  greet: boundGreet.bind({ name: "Bounder" }),
};
// Example usage:
// console.log(boundContext.greet()); // Output: Bounder
// Note: The `bind` method creates a new function that, when called, has its `this` keyword set to the provided value

// 6. Class method
export class Greeter {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return `Hello from ${this.name}`;
  }
}
// Example usage:
// const greeter = new Greeter("Classy");
// console.log(greeter.sayHello()); // Output: Hello from Classy

export const thisExamples = [
  {
    id: "global",
    name: "Global context (non-strict mode)",
    code: `export function globalThisExample() {
    return (function () {
      return this;
    })();
  }`,
    usage: `console.log(globalThisExample())`,
    run: () => {
      return (function () {
        return this;
      })();
    },
  },
  {
    id: "strict-global",
    name: "Global context (strict mode)",
    code: `export function strictGlobalThisExample() {
    return (function () {
      "use strict";
      return this;
    })();
  }`,
    usage: `console.log(strictGlobalThisExample())`,
    run: () => {
      return (function () {
        "use strict";
        return this;
      })();
    },
  },
  {
    id: "object",
    name: "Object method",
    code: `export const obj = {
    name: "Rafal",
    greet() {
      return \`Hi, \${this.name}\`;
    },
  };`,
    usage: `console.log(obj.greet())`,
    run: () => {
      const obj = {
        name: "Rafal",
        greet() {
          return `Hi, ${this.name}`;
        },
      };
      return obj.greet();
    },
  },
  {
    id: "arrow",
    name: "Arrow function (lexical this)",
    code: `export const arrowObj = {
    name: "ArrowMan",
    greet: () => \`Hi from \${this?.name || "undefined"}\`,
  };`,
    usage: `console.log(arrowObj.greet())`,
    run: () => {
      const arrowObj = {
        name: "ArrowMan",
        greet: () => `Hi from ${this?.name || "undefined"}`,
      };
      return arrowObj.greet();
    },
  },
  {
    id: "bound",
    name: "Bound function",
    code: `export function boundGreet() {
    return this.name;
  }
  export const boundContext = {
    name: "Bounder",
    greet: boundGreet.bind({ name: "Bounder" }),
  };`,
    usage: `console.log(boundContext.greet())`,
    run: () => {
      function boundGreet() {
        return this.name;
      }
      return boundGreet.bind({ name: "Bounder" })();
    },
  },
  {
    id: "class",
    name: "Class method",
    code: `export class Greeter {
    constructor(name) {
      this.name = name;
    }
    sayHello() {
      return \`Hello from \${this.name}\`;
    }
  }`,
    usage: `console.log(new Greeter("Classy").sayHello())`,
    run: () => {
      class Greeter {
        constructor(name) {
          this.name = name;
        }
        sayHello() {
          return `Hello from ${this.name}`;
        }
      }
      return new Greeter("Classy").sayHello();
    },
  },
];
