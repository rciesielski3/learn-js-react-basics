export function globalThisExample() {
  console.log(this); // In browsers: `window`, in strict mode: `undefined`
}

export const obj = {
  name: "Rafal",
  greet() {
    console.log("Hi,", this.name);
  },
};

// Example usage:
// globalThisExample(); // Logs the global object (window in browsers)
// obj.greet(); // Logs "Hi, Rafal"
