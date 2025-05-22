export const promisesExamples = [
  {
    id: 'basic-promise',
    name: 'Basic Promise',
    description: 'Demonstrates creating and resolving a simple Promise.',
    code: `const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ Resolved!"), 1000);
});`,
    usage: `promise.then(result => console.log(result));`,
    run: () => new Promise((resolve) => setTimeout(() => resolve('✅ Resolved!'), 500))
  },
  {
    id: 'async-await',
    name: 'Async/Await Syntax',
    description: 'Show how to simplify promise handling using async/await.',
    code: `async function getData() {
  const result = await Promise.resolve("📦 Data loaded");
  return result;
}`,
    usage: `getData().then(console.log);`,
    run: async () => {
      const result = await Promise.resolve('📦 Data loaded');
      return result;
    }
  }
];
