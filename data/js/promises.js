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
  },
  {
    id: 'promise-chain',
    name: 'Promise Chaining',
    description:
      'Illustrates how multiple `.then()` calls can be chained to transform values step-by-step.',
    code: `const chained = Promise.resolve(2)
  .then((n) => n * 3)
  .then((n) => n + 1);`,
    usage: `chained.then(console.log); // ➡️ 7`,
    run: () =>
      Promise.resolve(2)
        .then((n) => n * 3)
        .then((n) => n + 1)
  },

  {
    id: 'promise-error',
    name: 'Promise Rejection & Catching',
    description: 'Shows how errors are handled using .catch in promise chains.',
    code: `const failed = new Promise((_, reject) => {
  reject("Something went wrong");
}).catch(err => "Caught: " + err);`,
    usage: `failed.then(console.log);`,
    run: () =>
      new Promise((_, reject) => reject('Something went wrong')).catch((err) => 'Caught: ' + err)
  },

  {
    id: 'promise-all',
    name: 'Promise.all',
    description: 'Run multiple promises concurrently and wait for all to finish.',
    code: `const all = Promise.all([
  Promise.resolve("🍎"),
  Promise.resolve("🍌"),
  Promise.resolve("🍇")
]);`,
    usage: `all.then(console.log); // ➡️ [ '🍎', '🍌', '🍇' ]`,
    run: () => Promise.all([Promise.resolve('🍎'), Promise.resolve('🍌'), Promise.resolve('🍇')])
  }
];
