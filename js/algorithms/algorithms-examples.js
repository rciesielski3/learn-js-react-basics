export const algorithmExamples = [
  {
    id: "fibonacci",
    name: "Fibonacci Sequence",
    code: `function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }`,
    usage: `fibonacci(6);`,
    run: () => {
      function fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
      }
      return fibonacci(6);
    },
  },
  {
    id: "factorial",
    name: "Factorial",
    code: `function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }`,
    usage: `factorial(5);`,
    run: () => {
      function factorial(n) {
        if (n === 0) return 1;
        return n * factorial(n - 1);
      }
      return factorial(5);
    },
  },
  {
    id: "isPalindrome",
    name: "Check Palindrome",
    code: `function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }`,
    usage: `isPalindrome("racecar");`,
    run: () => {
      function isPalindrome(str) {
        return str === str.split("").reverse().join("");
      }
      return isPalindrome("racecar");
    },
  },
  {
    id: "reverseString",
    name: "Reverse String",
    code: `function reverseString(str) {
    return str.split('').reverse().join('');
  }`,
    usage: `reverseString("hello");`,
    run: () => {
      function reverseString(str) {
        return str.split("").reverse().join("");
      }
      return reverseString("hello");
    },
  },
  {
    id: "sumArray",
    name: "Sum of Array Elements",
    code: `function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }`,
    usage: `sumArray([1, 2, 3, 4]);`,
    run: () => {
      function sumArray(arr) {
        return arr.reduce((a, b) => a + b, 0);
      }
      return sumArray([1, 2, 3, 4]);
    },
  },
];
