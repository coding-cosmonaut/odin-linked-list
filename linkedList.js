class Node {
  constructor(data, nextNode = null) {
    this.data = data;
    this.nextNode = nextNode;
  }
}

class LinkedListDataStructure {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    const currentHead = this.head;
    if (currentHead) {
      this.head = newNode;
      this.head.nextNode = currentHead;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    if (!this.head) return undefined;

    let previous;
    let current = this.head;
    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = previous;
      this.tail.nextNode = null;
    }
    this.length--;
    return current;
  }
}
const firstList = new LinkedListDataStructure();
// firstList.append("first NODE");
// firstList.append("second NODE");
// firstList.append("third NODE");
// firstList.append("fourth NODE");
console.log(firstList);
firstList.prepend("Prepended new node");
firstList.append("fourth NODE");
// firstList.prepend("Added another node");
console.log(firstList);
