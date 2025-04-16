export const jsBasicsExamples = [
  {
    id: "variables",
    name: "Variable Declarations",
    description:
      "Demonstrates the use of var, let, and const to declare variables.",
    code: `// 'var' is function-scoped
  var x = 10;
  
  // 'let' is block-scoped and can be reassigned
  let y = 20;
  
  // 'const' is block-scoped and cannot be reassigned
  const z = 30;`,
    usage: `(() => {
    var x = 10;
    let y = 20;
    const z = 30;
    return x + y + z; // Returns 60
  })()`,
    run: () => {
      var x = 10;
      let y = 20;
      const z = 30;
      return x + y + z;
    },
  },
  {
    id: "data-types",
    name: "Data Types",
    description: "Shows different JavaScript data types.",
    code: `// String
  let str = "Hello";
  
  // Number
  let num = 123;
  
  // Boolean
  let bool = true;
  
  // Array
  let arr = [1, 2, 3];
  
  // Object
  let obj = { name: "Alice", age: 25 };`,
    usage: `(() => {
    let str = "JS";
    let num = 10;
    let arr = [str, num];
    return arr.join("-"); // "JS-10"
  })()`,
    run: () => {
      let str = "JS";
      let num = 10;
      let arr = [str, num];
      return arr.join("-");
    },
  },
  {
    id: "functions",
    name: "Functions",
    description: "Demonstrates function declaration and arrow functions.",
    code: `// Traditional function declaration
  function greet(name) {
    return "Hello " + name;
  }
  
  // Arrow function (ES6+)
  const greetArrow = (name) => "Hi " + name;`,
    usage: `(() => {
    const greetArrow = (name) => "Hi " + name;
    return greetArrow("Bob"); // "Hi Bob"
  })()`,
    run: () => {
      const greetArrow = (name) => "Hi " + name;
      return greetArrow("Bob");
    },
  },
  {
    id: "conditionals",
    name: "Conditionals",
    description: "Using if...else for simple decision making.",
    code: `let score = 75;
  
  // Simple if-else check
  if (score > 80) {
    console.log("Great");
  } else {
    console.log("Keep going");
  }`,
    usage: `(() => {
    let score = 75;
    return score > 80 ? "Great" : "Keep going"; // "Keep going"
  })()`,
    run: () => {
      let score = 75;
      return score > 80 ? "Great" : "Keep going";
    },
  },
  {
    id: "loops-foreach",
    name: "Loops (forEach)",
    description: "Iterating through an array using forEach.",
    code: `const numbers = [1, 2, 3];
  
  // forEach iterates over each element
  numbers.forEach(num => {
    console.log(num);
  });`,
    usage: `(() => {
    let result = "";
    [1, 2, 3].forEach(n => result += n); // Concatenates "123"
    return result;
  })()`,
    run: () => {
      let result = "";
      [1, 2, 3].forEach((n) => (result += n));
      return result;
    },
  },
  {
    id: "loops-for",
    name: "Loops (for loop)",
    description: "Basic for loop with index.",
    code: `// Traditional for loop
  for (let i = 0; i < 3; i++) {
    console.log("i =", i);
  }`,
    usage: `(() => {
    let sum = 0;
    for (let i = 0; i < 3; i++) {
      sum += i; // 0 + 1 + 2 = 3
    }
    return sum;
  })()`,
    run: () => {
      let sum = 0;
      for (let i = 0; i < 3; i++) {
        sum += i;
      }
      return sum;
    },
  },
];
