export const thisExamples = [
  {
    id: "global",
    name: "Global context (non-strict mode)",
    description:
      "In non-strict mode, 'this' inside a function refers to the global object (e.g., 'window' in browsers).",
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
    description:
      "In strict mode, 'this' is undefined inside a regular function if not bound.",
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
    description:
      "When a method is called on an object, 'this' refers to that object.",
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
    description:
      "Arrow functions do not have their own 'this'; they inherit it from the parent scope.",
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
    description:
      "Functions can be bound to a specific 'this' value using bind().",
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
    description:
      "In a class, methods have 'this' automatically bound to the class instance.",
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
