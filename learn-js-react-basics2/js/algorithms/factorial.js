export function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
// Example usage:
// console.log(factorial(5)); // Output: 120
// console.log(factorial(10)); // Output: 3628800
// console.log(factorial(0)); // Output: 1
