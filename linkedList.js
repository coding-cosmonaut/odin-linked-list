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
  append(newItem) {
    const newNode = new Node(newItem);
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
firstList.append("first NODE");
firstList.append("second NODE");
firstList.append("third NODE");
firstList.append("fourth NODE");
// firstList.pop();
// firstList.pop();
// firstList.pop();
// firstList.pop();
console.log(firstList.pop());
