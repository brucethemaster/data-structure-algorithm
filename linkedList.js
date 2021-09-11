class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    let preNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      preNode = preNode.next;
    }
    let afterNode = preNode.next;
    newNode.next = afterNode;
    preNode.next = newNode;
    this.length++;
  }

  delete(index) {
    let preNode = this.head;
    for (let i = 0; i < index - 2; i++) {
      preNode = preNode.next;
    }
    let afterNode = preNode.next;
    preNode.next = afterNode.next;
    this.length--;
  }

  printList() {
    const arra = [];
    let currentNode = this.head;
    while (currentNode != null) {
      arra.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arra;
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());

myLinkedList.insert(2, 99);
myLinkedList.insert(2, 92);

console.log(myLinkedList.printList());
myLinkedList.delete(2);
console.log(myLinkedList.printList());
myLinkedList.reverse();

console.log(myLinkedList.printList());
