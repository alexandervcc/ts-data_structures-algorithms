export default class Stack<T> {
  stack: T[];

  constructor() {
    this.stack = [];
  }

  push(element: T) {
    this.stack.push(element);
  }

  pop(): T {
    return this.stack.pop();
  }

  peek(): T {
    return this.stack[this.stack.length - 1];
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  clear() {
    this.stack = [];
  }

  size(): number {
    return this.stack.length;
  }
}
