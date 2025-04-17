export const jsBasicsExamples = [
  {
    id: "variables",
    name: "Variable Declarations",
    description:
      "Demonstrates the use of var, let, and const to declare variables. Show how each keyword behaves when redeclared or reassigned.",
    code: `  // 'var' is function-scoped and can be redeclared
  var x = 1;
  var x = 2; // OK
  
  // 'let' is block-scoped
  let y = 1;
  // let y = 2; // ❌ Error: 'y' already declared
  y = 3; // ✅ OK
  
  // 'const' is block-scoped and cannot be reassigned
  const z = 1;
  // z = 2; // ❌ Error: assignment to constant variable
  // const z = 3; // ❌ Error: already declared`,
    usage: `    var x = 2; // redeclared
    let y = 3; // reassigned
    const z = 1; // cannot be reassigned/redeclared`,
    run: () => {
      var x = 1;
      var x = 2;
      let y = 1;
      y = 3;
      const z = 1;
      return [x, y, z];
    },
  },
  {
    id: "arrays",
    name: "Array Methods",
    description:
      "Demonstrates essential array methods like which are useful for transforming or modifying arrays.",
    code: `  const numbers = [1, 2, 3];
  
  numbers.push(4);      // [1, 2, 3, 4]
  numbers.pop();        // [1, 2, 3]
  numbers.unshift(0);   // [0, 1, 2, 3]
  numbers.splice(1, 1); // [0, 2, 3]
  
  const sliced = numbers.slice(0, 2);        // [0, 2]
  const joined = numbers.join("-");          // "0-2-3"
  const doubled = numbers.map(n => n * 2);   // [0, 4, 6]
  const filtered = numbers.filter(n => n > 1); // [2, 3]
  const total = numbers.reduce((acc, n) => acc + n, 0); // 5`,
    usage: `  const arr = [1, 2, 3];
  arr.push(4);         // [1, 2, 3, 4]
  arr.pop();           // [1, 2, 3]
  arr.map(n => n * 2); // [2, 4, 6]`,
    run: () => {
      const log = [];
      const arr = [1, 2, 3];
      arr.push(4);
      log.push([...arr]); // [1,2,3,4]
      arr.pop();
      log.push([...arr]); // [1,2,3]
      log.push(arr.map((n) => n * 2)); // [2,4,6]
      return log;
    },
  },
  {
    id: "functions",
    name: "Functions",
    description:
      "Shows how to define and use traditional and arrow functions. Highlights syntax differences and behavior for returning values.",
    code: `   // Traditional function
  function greet(name) {
    return "Hello " + name;
  }
  
  // Arrow function
  const greetArrow = (name) => "Hi " + name;
  
  greet("Alice");       // "Hello Alice"
  greetArrow("Bob");    // "Hi Bob"`,
    usage: `  function greet(name) {
    return "Hello " + name;
  }
  greet("Alice"); // "Hello Alice"`,
    run: () => {
      function greet(name) {
        return "Hello " + name;
      }
      const greetArrow = (name) => "Hi " + name;
      return [greet("Alice"), greetArrow("Bob")];
    },
  },
  {
    id: "objects",
    name: "Objects",
    description:
      "Demonstrates object creation, property access, updating values, and destructuring. Useful for storing and accessing structured data.",
    code: `  const user = {
    name: "Alice",
    age: 25,
    isMember: true,
  };
  
  user.age = 26;
  const { name, isMember } = user;
  name;      // "Alice"
  isMember;  // true`,
    usage: `  const user = { name: "Alice", age: 25 };
  user.age = 26;
  const { name } = user; // "Alice"`,
    run: () => {
      const user = {
        name: "Alice",
        age: 25,
        isMember: true,
      };
      user.age = 26;
      const { name, isMember } = user;
      return [user.age, name, isMember];
    },
  },
  {
    id: "strings",
    name: "String Methods",
    description:
      "Covers common string operations like `.length`, `.slice()`, `.toUpperCase()`, and `.includes()`. Useful for parsing and manipulating textual data.",
    code: `  const text = "JavaScript";
  
  text.length;              // 10
  text.slice(0, 4);         // "Java"
  text.toUpperCase();       // "JAVASCRIPT"
  text.includes("Script");  // true`,
    usage: `  const text = "JavaScript";
  text.length;
  text.slice(0, 4);
  text.includes("Script");`,
    run: () => {
      const text = "JavaScript";
      return [
        text.length,
        text.slice(0, 4),
        text.toUpperCase(),
        text.includes("Script"),
      ];
    },
  },
  {
    id: "template-literals",
    name: "Template Literals",
    description:
      "Use backticks and `${}` to embed variables inside strings. Improves readability for multi-line or dynamic strings.",
    code: `  const name = "Alice";
  const age = 30;
  
  const message = \`My name is \${name} and I'm \${age} years old.\`;
  message; // "My name is Alice and I'm 30 years old."`,
    usage: `  const name = "Alice";
  const age = 30;
  \`My name is \${name} and I'm \${age} years old.\`;`,
    run: () => {
      const name = "Alice";
      const age = 30;
      return `My name is ${name} and I'm ${age} years old.`;
    },
  },
  {
    id: "type-conversion",
    name: "Type Conversion",
    description:
      "Shows how to convert values between types using `Number`, `String`, `Boolean`, and `parseInt`. Essential for working with form inputs and data parsing.",
    code: `  const str = "123";
  Number(str);      // 123
  
  const num = 99;
  String(num);      // "99"
  
  Boolean(0);       // false
  Boolean(1);       // true
  
  parseInt("42px"); // 42`,
    usage: `  Number("123");   // 123
  String(99);      // "99"
  Boolean(0);      // false`,
    run: () => {
      return [Number("123"), String(99), Boolean(0)];
    },
  },
  {
    id: "truthy-falsy",
    name: "Truthy & Falsy",
    description:
      "Demonstrates values that evaluate to `true` or `false` in conditions. Helps understand which values trigger logic in if-statements.",
    code: `  Boolean("");        // false
  Boolean("hello");    // true
  Boolean(0);          // false
  Boolean(123);        // true
  Boolean(null);       // false
  Boolean(undefined);  // false`,
    usage: `  Boolean("");      // false
  Boolean("Hi");    // true
  Boolean(0);       // false`,
    run: () => {
      return [Boolean(""), Boolean("hello"), Boolean(0)];
    },
  },
  {
    id: "logical-operators",
    name: "Logical Operators",
    description:
      "Demonstrates use of `&&` (AND), `||` (OR), and `!` (NOT). Useful for default values, condition checks, and short-circuit logic.",
    code: `  const isLoggedIn = true;
  const username = "Alice";
  
  isLoggedIn && username;  // "Alice"
  false || "Guest";        // "Guest"
  !true;                   // false`,
    usage: `  true && "Hello";  // "Hello"
  false || "Fallback"; // "Fallback"
  !false;             // true`,
    run: () => {
      return [true && "Hello", false || "Fallback", !false];
    },
  },
  {
    id: "loops-while",
    name: "Loops (while & do...while)",
    description:
      "Demonstrates `while` and `do...while` loops. Use these when the number of iterations is not known in advance. `while` checks before executing, `do...while` runs at least once.",
    code: `  let i = 0;
  while (i < 3) {
    console.log("while:", i);
    i++;
  }
  
  let j = 0;
  do {
    console.log("do...while:", j);
    j++;
  } while (j < 3);`,
    usage: `  let i = 0;
  while (i < 2) {
    console.log(i++);
  }
  // 0, 1`,
    run: () => {
      let logs = [];
      let i = 0;
      while (i < 2) {
        logs.push("while: " + i);
        i++;
      }
      let j = 0;
      do {
        logs.push("do: " + j);
        j++;
      } while (j < 2);
      return logs;
    },
  },
  {
    id: "switch",
    name: "Switch Statement",
    description:
      "Allows you to compare a value against multiple cases. Useful as a cleaner alternative to many `if-else` statements when checking for exact matches.",
    code: `  const fruit = "banana";
  
  switch (fruit) {
    case "apple":
      console.log("It's an apple");
      break;
    case "banana":
      console.log("It's a banana");
      break;
    default:
      console.log("Unknown fruit");
  }`,
    usage: `  const color = "red";
  switch (color) {
    case "blue": return "Blue!";
    case "red": return "Red!";
    default: return "Other";
  }`,
    run: () => {
      const color = "red";
      switch (color) {
        case "blue":
          return "Blue!";
        case "red":
          return "Red!";
        default:
          return "Other";
      }
    },
  },
  {
    id: "nullish-optional",
    name: "Nullish Coalescing & Optional Chaining",
    description:
      "`?.` allows safe access to nested properties without errors. `??` returns a fallback value only if the left side is null or undefined (not 0, '', or false).",
    code: `  const user = {
    profile: {
      name: "Alice"
    }
  };
  
  console.log(user.profile?.name);     // "Alice"
  console.log(user.settings?.theme);   // undefined
  
  const title = null;
  console.log(title ?? "Default Title"); // "Default Title"`,
    usage: `  const data = null;
  data?.value;         // undefined
  data ?? "Fallback";  // "Fallback"`,
    run: () => {
      const user = {
        profile: {
          name: "Alice",
        },
      };
      const title = null;
      return [
        user.profile?.name,
        user.settings?.theme,
        title ?? "Default Title",
      ];
    },
  },
];
