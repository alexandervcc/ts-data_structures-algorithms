export default class StackObject<T> {
  #count: number;
  #stack: { [key: number]: T };
  constructor() {
    this.#count = 0;
    this.#stack = {};
  }
  push(element: T) {
    this.#stack[this.#count] = element;
    this.#count++;
  }

  pop(): T {
    if (this.isEmpty()) {
      return undefined;
    }
    this.#count--;
    const result = this.#stack[this.#count];
    delete this.#stack[this.#count];
    return result;
  }

  peek(): T {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.#stack[this.#count - 1];
  }

  isEmpty(): boolean {
    return this.#count === 0;
  }

  clear() {
    this.#stack = {};
    this.#count = 0;
  }

  size(): number {
    return this.#count;
  }

  toString(): string {
    if (this.isEmpty()) {
      return "";
    }
    let toString = ``;
    Array(10).forEach(
      (index) => (toString = `${toString}, ${this.#stack[index]}`)
    );
    return toString;
  }
}
