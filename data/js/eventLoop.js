export const eventLoopExamples = [
  {
    id: "setTimeout",
    name: "setTimeout Example",
    description:
      "Demonstrates how setTimeout is deferred until the call stack is clear.",
    code: `console.log("Start");
  
  setTimeout(() => {
    console.log("Inside timeout");
  }, 0);
  
  console.log("End");`,
    usage: `(() => {
    const output = [];
    output.push("Start");
  
    setTimeout(() => {
      output.push("Inside timeout");
    }, 0);
  
    output.push("End");
  
    return output.join(" | "); // "Start | End"
  })()`,
    run: () => {
      const output = ["Start"];
      setTimeout(() => {
        output.push("Inside timeout");
      }, 0);
      output.push("End");
      return output.join(" | ");
    },
  },
  {
    id: "promise-microtask",
    name: "Promise Microtask Queue",
    description:
      "Promises run earlier than setTimeout due to microtask priority.",
    code: `console.log("Start");
  
  Promise.resolve().then(() => {
    console.log("Inside promise");
  });
  
  console.log("End");`,
    usage: `(() => {
    const output = [];
    output.push("Start");
  
    Promise.resolve().then(() => output.push("Inside promise"));
  
    output.push("End");
  
    return output.join(" | "); // "Start | End"
  })()`,
    run: () => {
      const output = ["Start"];
      Promise.resolve().then(() => output.push("Inside promise"));
      output.push("End");
      return output.join(" | ");
    },
  },
  {
    id: "async-await",
    name: "Async/Await",
    description:
      "Async functions return promises and await pauses execution until resolved.",
    code: `async function getMessage() {
    return "Hello from async!";
  }
  
  getMessage().then(console.log);`,
    usage: `(() => {
    async function getMessage() {
      return "Hello from async!";
    }
    return getMessage().then((msg) => msg); // "Hello from async!"
  })()`,
    run: () => {
      return "Hello from async!";
    },
  },
  {
    id: "stack-queue",
    name: "Call Stack vs Task Queue",
    description:
      "Demonstrates the event loop conceptually with nested sync vs async.",
    code: `console.log("Start");
  
  setTimeout(() => {
    console.log("Timeout callback");
  }, 0);
  
  console.log("End");`,
    usage: `(() => {
    const output = [];
    output.push("Start");
  
    setTimeout(() => {
      output.push("Timeout callback");
    }, 0);
  
    output.push("End");
  
    return output.join(" | "); // "Start | End"
  })()`,
    run: () => {
      return "Start | End";
    },
  },
];
