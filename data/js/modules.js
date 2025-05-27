export const modulesExamples = [
  {
    id: 'named-export',
    name: 'Named Export & Import',
    description: 'Demonstrates how named exports can be imported with exact names.',
    code: `// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// app.js
import { add, subtract } from './math.js';`,
    usage: `add(3, 2); // ➡️ 5`,
    run: () => {
      const add = (a, b) => a + b;
      return add(3, 2);
    }
  },
  {
    id: 'default-export',
    name: 'Default Export',
    description: 'Shows how default exports can be imported with any name.',
    code: `// logger.js
export default function log(msg) {
  console.log("LOG:", msg);
}

// app.js
import log from './logger.js';`,
    usage: `log("Hello!");`,
    run: () => {
      const log = (msg) => `LOG: ${msg}`;
      return log('Hello!');
    }
  },
  {
    id: 'import-alias',
    name: 'Import with Alias',
    description: 'Import a named export using an alias with the `as` keyword.',
    code: `// utils.js
export function greet(name) {
  return 'Hi ' + name;
}

// app.js
import { greet as sayHello } from './utils.js';`,
    usage: `sayHello("Jane");`,
    run: () => {
      const sayHello = (name) => 'Hi ' + name;
      return sayHello('Jane');
    }
  }
];
