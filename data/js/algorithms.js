export const algorithmExamples = [
  {
    id: "fibonacci",
    name: "Fibonacci Sequence",
    description:
      "Generates the nth number in the Fibonacci sequence using recursion.",
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
    description: "Calculates the factorial of a number recursively.",
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
    description: "Determines whether a string is a palindrome.",
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
    description: "Reverses the characters in a string.",
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
    description: "Computes the sum of all elements in an array.",
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
  {
    id: "binarySearch",
    name: "Binary Search",
    description: "Efficiently finds an element in a sorted array.",
    code: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
    usage: `binarySearch([1, 3, 5, 7, 9], 5);`,
    run: () => {
      function binarySearch(arr, target) {
        let left = 0,
          right = arr.length - 1;
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (arr[mid] === target) return mid;
          if (arr[mid] < target) left = mid + 1;
          else right = mid - 1;
        }
        return -1;
      }
      return binarySearch([1, 3, 5, 7, 9], 5);
    },
  },
  {
    id: "deepClone",
    name: "Deep Clone Object",
    description: "Creates a deep copy of an object using recursion.",
    code: `function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  const clone = {};
  for (const key in obj) {
    clone[key] = deepClone(obj[key]);
  }
  return clone;
}`,
    usage: `deepClone({ a: 1, b: { c: 2 } });`,
    run: () => {
      function deepClone(obj) {
        if (obj === null || typeof obj !== "object") return obj;
        if (Array.isArray(obj)) return obj.map(deepClone);
        const clone = {};
        for (const key in obj) {
          clone[key] = deepClone(obj[key]);
        }
        return clone;
      }
      return JSON.stringify(deepClone({ a: 1, b: { c: 2 } }));
    },
  },
  {
    id: "flattenArray",
    name: "Flatten Nested Array",
    description: "Flattens deeply nested arrays into a single-level array.",
    code: `function flatten(arr) {
  return arr.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}`,
    usage: `flatten([1, [2, [3, [4]], 5]]);`,
    run: () => {
      function flatten(arr) {
        return arr.reduce(
          (acc, val) =>
            Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
          []
        );
      }
      return JSON.stringify(flatten([1, [2, [3, [4]], 5]]));
    },
  },
  {
    id: "mergeSort",
    name: "Merge Sort",
    description:
      "Sorts an array using the divide-and-conquer merge sort algorithm.",
    code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return result.concat(left, right);
}`,
    usage: `mergeSort([3, 1, 4, 1, 5, 9]);`,
    run: () => {
      function mergeSort(arr) {
        if (arr.length <= 1) return arr;
        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));
        return merge(left, right);
      }

      function merge(left, right) {
        const result = [];
        while (left.length && right.length) {
          result.push(left[0] < right[0] ? left.shift() : right.shift());
        }
        return result.concat(left, right);
      }

      return JSON.stringify(mergeSort([3, 1, 4, 1, 5, 9]));
    },
  },
];
