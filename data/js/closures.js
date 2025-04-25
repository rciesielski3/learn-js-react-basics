export const closuresExamples = [
  {
    id: "basic-closure",
    name: "Basic Closure",
    description:
      "A closure allows a function to access variables from an outer scope even after that scope has closed.",
    code: `function outer() {
    let count = 0;
    return function inner() {
      count++;
      return count;
    };
  }`,
    usage: `(() => {
    const counter = (function outer() {
      let count = 0;
      return function inner() {
        count++;
        return count;
      };
    })();
  
    return counter(); // 1
  })()`,
    run: () => {
      const counter = (() => {
        let count = 0;
        return () => {
          count++;
          return count;
        };
      })();
      return counter();
    },
  },
  {
    id: "lexical-scope",
    name: "Lexical Scope",
    description:
      "Functions in JavaScript form closures around the scope they were defined in — not where they are invoked.",
    code: `let globalVar = "global";
  
  function outer() {
    let outerVar = "outer";
  
    function inner() {
      return outerVar + " & " + globalVar;
    }
  
    return inner;
  }`,
    usage: `(() => {
    const fn = (function outer() {
      let outerVar = "outer";
      return function inner() {
        return outerVar + " & " + "global";
      };
    })();
  
    return fn(); // "outer & global"
  })()`,
    run: () => {
      const fn = (() => {
        let outerVar = "outer";
        return () => outerVar + " & " + "global";
      })();
      return fn();
    },
  },
  {
    id: "closure-in-loop",
    name: "Closures in Loops",
    description:
      "Using closures inside loops can lead to unexpected results unless handled carefully.",
    code: `const funcs = [];
  
  for (var i = 0; i < 3; i++) {
    funcs.push(function () {
      return i;
    });
  }
  
  // All funcs return 3 because 'i' is shared
  `,
    usage: `(() => {
    const funcs = [];
    for (var i = 0; i < 3; i++) {
      funcs.push(function () {
        return i;
      });
    }
    return funcs[0](); // 3
  })()`,
    run: () => {
      const funcs = [];
      for (var i = 0; i < 3; i++) {
        funcs.push(function () {
          return i;
        });
      }
      return funcs[0]();
    },
  },
  {
    id: "fix-closure-in-loop",
    name: "Fixing Closure in Loop with IIFE",
    description:
      "You can use an IIFE to preserve the loop variable's value in each iteration.",
    code: `const funcs = [];
  
  for (var i = 0; i < 3; i++) {
    (function (j) {
      funcs.push(function () {
        return j;
      });
    })(i);
  }
  
  // Each function now returns the correct value
  `,
    usage: `(() => {
    const funcs = [];
    for (var i = 0; i < 3; i++) {
      (function (j) {
        funcs.push(function () {
          return j;
        });
      })(i);
    }
    return funcs[0](); // 0
  })()`,
    run: () => {
      const funcs = [];
      for (var i = 0; i < 3; i++) {
        ((j) => {
          funcs.push(() => j);
        })(i);
      }
      return funcs[0]();
    },
  },
];
