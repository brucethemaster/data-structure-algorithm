class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    this.length++;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    let leader = this.head;
    for (let i = 0; i < index - 1; i++) {
      leader = leader.next;
    }
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
  }

  delete(index) {
    let leader = this.head;
    for (let i = 0; i < index - 2; i++) {
      leader = leader.next;
    }
    const follower = leader.next;
    follower.next.prev = leader;
    leader.next = follower.next;

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
  printListBackWord() {
    const arra = [];
    let currentNode = this.tail;
    while (currentNode != null) {
      arra.push(currentNode.value);
      currentNode = currentNode.prev;
    }
    return arra;
  }
  reverse() {
    const arra = [];

    let currentNode = this.tail;
    const newList = new DoubleLinkedList(currentNode.value);
    arra.push(currentNode.value);
    currentNode = currentNode.prev;
    while (currentNode != null) {
      newList.append(currentNode.value);
      arra.push(currentNode.value);
      currentNode = currentNode.prev;
    }

    return newList;
  }
}

const myLinkedList = new DoubleLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());

myLinkedList.insert(2, 99);
myLinkedList.insert(2, 92);

console.log(myLinkedList.printList());
console.log(myLinkedList.printListBackWord());
myLinkedList.delete(2);
console.log(myLinkedList.printList());
console.log(myLinkedList.printListBackWord());

let newList = myLinkedList.reverse();

console.log(newList.printList());
