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
  size() {
    return this.length;
  }
  firstNode() {
    return this.head;
  }
  lastNode() {
    return this.tail;
  }
  contains(value) {
    let current = this.head;
    while (current) {
      if (value === current.data) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }
  toString() {
    if (!this.head) return null;
    let listString = "";
    let current = this.head;
    while (current) {
      listString += `(${current.data}) -> `;
      current = current.nextNode;
    }
    listString += "null";
    return listString;
  }
  at(index) {
    let current = this.head;
    let i = 0;
    while (i < this.length) {
      if (i === index) {
        return current;
      }
      current = current.nextNode;
      i++;
    }
    return null;
  }
  find(value) {
    let current = this.head;
    let i = 0;
    while (i < this.length) {
      if (current.data === value) {
        return i;
      }
      current = current.nextNode;
      i++;
    }
    return null;
  }
  insertAt(value, index) {
    const newNode = new Node(value);
    let previous = this.head;
    let current = this.head;
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.head = newNode;
      newNode.nextNode = current;
      this.length++;
      return true;
    }

    let i = 0;
    while (current) {
      if (i === index) {
        previous.nextNode = newNode;
        newNode.nextNode = current;
        this.length++;
        return true;
      }
      previous = current;
      current = current.nextNode;
      i++;
    }
    if (index === this.length) {
      this.tail = newNode;
      previous.nextNode = this.tail;
      this.length++;
      return true;
    }
    return true;
  }
}
const firstList = new LinkedListDataStructure();
firstList.append("first NODE");
firstList.append("second NODE");
firstList.append("third NODE");
firstList.append("fourth NODE");
console.log(firstList.insertAt("INSERTED VALUE", 3));
