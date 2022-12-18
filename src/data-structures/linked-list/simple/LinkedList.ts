import { defaultEquals } from "../../../utils/utils";
import Node from "./Node";

export default class LinkedList<T> {
  listSize: number;
  head: Node<T>;
  equalsFn: (a: T, b: T) => boolean;

  constructor(eq = defaultEquals) {
    this.listSize = 0;
    this.head = undefined;
    this.equalsFn = eq;
  }

  push(e: T) {
    const newNode = new Node(e);
    let aux: Node<T>;
    if (this.head === null) {
      this.head = newNode;
    } else {
      aux = this.head;
      while (aux.next !== null) {
        aux = aux.next;
      }
      aux.next = newNode;
    }
    this.listSize++;
  }

  removeAt(index: number): T {
    if (index > this.listSize || this.listSize === 0) {
      return undefined;
    }
    let aux = this.head;
    if (index === 0) {
      aux = this.head;
      this.head = this.head.next;
    } else {
      let prev: Node<T>;
      for (let i = 0; i < index; i++) {
        prev = aux;
        aux = aux.next;
      }
      prev.next = aux.next;
    }
    this.listSize--;
    return aux.element;
  }

  getElementAt(index: number): T {
    if (index > this.listSize || this.listSize === 0) {
      return undefined;
    }
    let aux = this.head;
    for (let i = 0; i < index; i++) {
      aux = aux.next;
    }
    return aux.element;
  }

  insert(e: T, index: number): boolean {
    const newNode = new Node(e);
    if (index > this.listSize || this.listSize === 0) {
      return false;
    }
    let aux = this.head;
    let prev: Node<T>;
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      for (let i = 0; i < index; i++) {
        prev = aux;
        aux = aux.next;
      }
      prev.next = newNode;
      newNode.next = aux;
    }
    this.listSize++;
    return true;
  }

  indexOf(e: T): number {
    let aux = this.head;
    for (let i = 0; i < this.listSize && aux !== null; i++) {
      if (this.equalsFn(e, aux.element)) {
        return i;
      }
      aux = aux.next;
    }
    return -1;
  }

  remove(e: T) {
    const index = this.indexOf(e);
    if (index !== -1) {
      return this.removeAt(index);
    }
    return undefined;
  }

  isEmpty(): boolean {
    return this.listSize === 0;
  }

  size(): number {
    return this.listSize;
  }

  getHead(): T {
    return this.head.element;
  }

  toString(): string {
    if (this.isEmpty()) {
      return "";
    }
    let aux = this.head;
    let toString = ``;
    for (let i = 0; i < this.listSize && aux !== null; i++) {
      toString = `${toString} -> ${aux.element}`;
      aux = aux.next;
    }
    return toString;
  }
}
