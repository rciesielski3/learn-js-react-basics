export const tsVsJsExamples = [
  {
    title: "Variable Declarations",
    description:
      "TypeScript allows you to add explicit types, making code more predictable and easier to debug.",
    jsCode: `let count = 5;`,
    tsCode: `let count: number = 5;`,
    summary:
      "TypeScript adds type annotations to catch type-related errors during development.",
  },
  {
    title: "Function Parameters",
    description:
      "You can define types for function parameters and return values in TypeScript.",
    jsCode: `function greet(name) {
    return "Hello " + name;
  }`,
    tsCode: `function greet(name: string): string {
    return "Hello " + name;
  }`,
    summary:
      "Typing function arguments ensures the right input is passed and helps with IntelliSense.",
  },
  {
    title: "Interfaces and Object Types",
    description:
      "TypeScript allows you to define interfaces for objects, ensuring they have the expected structure.",
    jsCode: `const user = {
    name: "Alice",
    age: 25
  };`,
    tsCode: `type User = {
    name: string;
    age: number;
  }
  
  const user: User = {
    name: "Alice",
    age: 25
  };`,
    summary: "Interfaces help enforce structure and type safety for objects.",
  },
  {
    title: "Optional Properties",
    description: "TypeScript lets you mark properties as optional using `?`.",
    jsCode: `const user = {
    name: "Bob"
  };`,
    tsCode: `type User = {
    name: string;
    age?: number;
  }
  
  const user: User = {
    name: "Bob"
  };`,
    summary:
      "Optional properties increase flexibility while maintaining structure.",
  },
  {
    title: "Type Aliases & Union Types",
    description:
      "TypeScript can define custom types and support multiple possible values.",
    jsCode: `function printId(id) {
    console.log("ID:", id);
  }`,
    tsCode: `type ID = number | string;
  
  function printId(id: ID): void {
    console.log("ID:", id);
  }`,
    summary:
      "Union types allow handling multiple valid input types in a controlled way.",
  },
];
