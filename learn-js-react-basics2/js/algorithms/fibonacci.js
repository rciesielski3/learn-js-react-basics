export function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// Example usage:
// console.log(fibonacci(5)); // Output: 5
// console.log(fibonacci(10)); // Output: 55
// console.log(fibonacci(0)); // Output: 0
