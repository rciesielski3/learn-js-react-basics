export const debugChallenges = [
  {
    code: `const list = [1, 2, 3];
list.map(num => {
  return num * 2;
});
console.log(num); // What’s wrong here?`,
    explanation:
      "`num` is scoped inside the map callback. It's not available outside for `console.log`."
  },
  {
    code: `function greet(name) {
  console.log('Hello, ' + Name);
}
greet('Alice');`,
    explanation: '`Name` is undefined — JavaScript is case-sensitive. It should be `name`.'
  },
  {
    code: `const user = {};
console.log(user.profile.name);`,
    explanation: '`user.profile` is undefined, so accessing `.name` causes a runtime error.'
  },
  {
    code: `let x = 10;
if (x = 5) {
  console.log('Match!');
}`,
    explanation: '`=` is assignment, not comparison. Use `==` or preferably `===` in conditionals.'
  },
  {
    code: `const isAdmin = false;
if (!isAdmin === true) {
  console.log('Access granted');
}`,
    explanation:
      'Operator precedence issue. `!isAdmin === true` evaluates unexpectedly. Use clearer logic like `if (!isAdmin)`.'
  },
  {
    code: `const arr = [1, 2, 3];
arr.forEach(i => arr.push(i));`,
    explanation:
      'Mutating an array while iterating over it can cause infinite loops or unexpected behavior.'
  },
  {
    code: `let total = '5' + 1;
console.log(total);`,
    explanation:
      "This results in string concatenation ('51'), not addition. Use `Number('5') + 1` if numeric addition is intended."
  },
  {
    code: `const obj = { a: 1 };
delete obj.b;`,
    explanation: "This won't throw an error but deleting non-existent properties is meaningless."
  },
  {
    code: `let result;
console.log(result.length);`,
    explanation: '`undefined` has no `length` property. Check for null/undefined before accessing.'
  },
  {
    code: `const name = 'Bob';
name[0] = 'J';
console.log(name);`,
    explanation: "Strings are immutable in JavaScript. You can't reassign characters like arrays."
  },
  {
    code: `const items = [1, 2, 3];
console.log(items[3]);`,
    explanation: 'Index 3 is out of bounds and returns `undefined`, not an error.'
  },
  {
    code: `let flag = true;
if (flag == 'true') {
  console.log('Yes');
}`,
    explanation: 'Loose equality causes confusion. Use strict comparison (`flag === true`).'
  },
  {
    code: `const scores = [10, 20, 30];
scores.length = 0;
console.log(scores);`,
    explanation: 'Setting `length = 0` clears the array. Useful but potentially dangerous.'
  },
  {
    code: `console.log(typeof NaN);`,
    explanation: "`typeof NaN` is `'number'`, which surprises many developers."
  },
  {
    code: `let a = [1, 2];
let b = a;
b.push(3);
console.log(a);`,
    explanation: 'Arrays are reference types. `a` and `b` point to the same array.'
  },
  {
    code: `function sayHi() {
  return;
  console.log('Hi');
}`,
    explanation: 'Code after `return` is unreachable and will not execute.'
  },
  {
    code: `const settings = null;
console.log(settings.theme);`,
    explanation: 'Cannot read properties of null. Add null checks or optional chaining.'
  },
  {
    code: `const nums = [1, 2, 3];
nums.map(num => num * 2);`,
    explanation:
      "`.map()` returns a new array but it's not used here. Use the return value or use `.forEach()`."
  },
  {
    code: `let str = 'hello';
console.log(str.reverse());`,
    explanation:
      "Strings don't have a `reverse()` method. Convert to array first: `str.split('').reverse().join('')`."
  },
  {
    code: `let user = { age: 25 };
console.log(user.name.first);`,
    explanation: 'Accessing nested properties without checks can cause runtime errors.'
  },
  {
    code: `function sum(a, b) {
  return
    a + b;
}`,
    explanation:
      'Automatic semicolon insertion ends `return` early. Use same line: `return a + b;`.'
  },
  {
    code: `console.log([10] == 10);`,
    explanation: 'Array is coerced to string → number. Avoid abstract equality comparisons.'
  },
  {
    code: `const obj = {};
obj[true] = 'yes';
obj[1] = 'no';
console.log(obj[true]);`,
    explanation: "Keys are coerced to strings. `true` and `1` both become `'1'`."
  },
  {
    code: `console.log(0.1 + 0.2 === 0.3);`,
    explanation: 'Floating point precision error. Use epsilon comparisons.'
  },
  {
    code: `const user = { name: 'Alice' };
Object.freeze(user);
user.name = 'Bob';
console.log(user.name);`,
    explanation: '`Object.freeze()` makes objects immutable. Mutation has no effect.'
  },
  {
    code: `console.log(typeof null);`,
    explanation: "`typeof null` is `'object'`. This is a long-standing JS quirk."
  },
  {
    code: `const x = '5';
const y = 5;
console.log(x + y);`,
    explanation:
      "String concatenation → '55'. Use explicit type conversion if numeric output is desired."
  },
  {
    code: `const fn = () => {};
console.log(fn());`,
    explanation: 'The function returns `undefined` unless a value is explicitly returned.'
  },
  {
    code: `const num = 5;
if (num) {
  console.log('Truthy');
}`,
    explanation: "This works, but always check edge cases like 0, '', null."
  },
  {
    code: `let flag;
if (flag) {
  console.log('Defined');
}`,
    explanation: '`flag` is `undefined` → falsy. Always initialize variables.'
  },
  {
    code: `let obj = { name: 'A' };
obj = null;
console.log(obj.name);`,
    explanation: 'Accessing `.name` on `null` causes a runtime error.'
  },
  {
    code: `const arr = [1, 2, 3];
arr.length = -1;`,
    explanation: 'Setting length to a negative number throws a RangeError.'
  },
  {
    code: `let count = 0;
count++;
console.log(++count);`,
    explanation:
      '`count++` returns the value before incrementing. Be mindful of prefix/postfix operators.'
  },
  {
    code: `function test() {
  console.log(arguments);
}
test(1, 2);`,
    explanation:
      '`arguments` is not available in arrow functions. This works only in regular functions.'
  },
  {
    code: `console.log(typeof []);
console.log(typeof {});`,
    explanation: "Both return `'object'`. Use `Array.isArray()` to distinguish."
  },
  {
    code: `console.log(parseInt('08'));`,
    explanation:
      "`parseInt` may treat numbers starting with '0' as octal in older engines. Always pass radix."
  },
  {
    code: `console.log(!!'false');`,
    explanation: "Non-empty strings are truthy, even if they say 'false'."
  },
  {
    code: `let val = '10';
val--;`,
    explanation: 'Unary operators coerce strings to numbers. Be explicit with types.'
  },
  {
    code: `console.log([] == ![]);`,
    explanation: 'Weird coercion: `[] == false`, and `![] == false`, so both sides are equal.'
  },
  {
    code: `function sayHi(name = 'Guest') {
  console.log('Hi ' + name);
}
sayHi(undefined);`,
    explanation: 'Passing `undefined` triggers default. Passing `null` won’t.'
  },
  {
    code: `const obj = { x: 1 };
const copy = obj;
copy.x = 2;
console.log(obj.x);`,
    explanation: 'Objects are reference types — `obj` and `copy` are linked.'
  },
  {
    code: `console.log('10' - 2);`,
    explanation: "JS coerces '10' to number. Result is 8. Strange but legal."
  },
  {
    code: `const nums = [1, 2, 3];
console.log(nums.sort());`,
    explanation: 'Default sort is lexicographic. Use `.sort((a,b) => a-b)` for numbers.'
  },
  {
    code: `let output = '';
for (var i = 0; i < 3; i++) {
  setTimeout(() => output += i, 0);
}`,
    explanation:
      '`var` is function-scoped — closures capture final value. Use `let` to preserve block scope.'
  },
  {
    code: `if ('0') {
  console.log('Truthy');
}`,
    explanation: "Non-empty strings are always truthy, even if they contain '0'."
  },
  {
    code: `const x = true + false;`,
    explanation: '`true` becomes 1, `false` becomes 0 → result is 1.'
  },
  {
    code: `console.log([1,2] == '1,2');`,
    explanation: "Array is coerced to string '1,2', which matches the right-hand string."
  },
  {
    code: `console.log(1 < 2 < 3);
console.log(3 > 2 > 1);`,
    explanation: 'Chained comparisons don’t work like math. Break into separate expressions.'
  }
];
