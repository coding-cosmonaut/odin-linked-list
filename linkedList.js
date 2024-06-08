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
  push(newItem) {
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
}
const firstList = new LinkedListDataStructure();
firstList.push("first NODE");
firstList.push("second NODE");
firstList.push("third NODE");
firstList.push("fourth NODE");
console.log(firstList)
