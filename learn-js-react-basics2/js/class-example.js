export class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a noise.`;
  }
}

export class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

// Example usage:
// const animal = new Animal("Generic Animal");
// console.log(animal.speak()); // Output: Generic Animal makes a noise.

// const dog = new Dog("Buddy");
// console.log(dog.speak()); // Output: Buddy barks.
