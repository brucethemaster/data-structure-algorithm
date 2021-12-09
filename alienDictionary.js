//i wrote a helper function linkedlist for javascript,
// time complexcity O(n*k) n= length of wor array,k max length of word array elements

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

  getIndex(value) {
    let currentNode = this.head;
    let i = 0;
    while (currentNode.value != value) {
      currentNode = currentNode.next;
      i++;
      if (currentNode === null) {
        return -1;
      }
    }
    return i;
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

const characterOrder = Arra => {
  let characterSetString = String.prototype.concat(...new Set(Arra.join('')));

  const myLinkedList = new LinkedList(' ');

  let maxWordLength = Math.max(...Arra.map(el => el.length));
  let breakInnerLoop = false;

  Arra = Arra.map(a => a.padEnd(maxWordLength, ' ').split(''));

  for (let i = 0; i < Arra.length - 1; i++) {
    for (let j = 0; j < maxWordLength; j++) {
      if (Arra[i][j] !== Arra[i + 1][j]) {
        //handle eddge case ['a','b','a']
        if (
          myLinkedList.getIndex(Arra[i][j]) !== -1 &&
          myLinkedList.getIndex(Arra[i + 1][j]) !== -1 &&
          myLinkedList.getIndex(Arra[i + 1][j]) <
            myLinkedList.getIndex(Arra[i][j])
        ) {
          if (j !== 0 && Arra[i + 1][j - 1] === Arra[i][j - 1]) {
            // console.log('myLinkedList.printList() ', myLinkedList.printList());
            // console.log('Arra[i][j]', Arra[i][j], 'i:', i, 'j: ', j);
            // console.log('Arra[i + 1][j - 1] ', Arra[i + 1][j - 1]);
            return ['invalid order'];
          } else if (j === 0) {
            return ['invalid order'];
          }
        }

        if (
          myLinkedList.getIndex(Arra[i][j]) === -1 &&
          Arra[i][j] !== ' ' &&
          myLinkedList.getIndex(Arra[i + 1][j]) === -1 &&
          Arra[i + 1][j] !== ' '
        ) {
          if (Arra[i + 1][j] === 'c') {
            console.log('c here1', Arra[i][j]);
          }
          myLinkedList.append(Arra[i][j]);
          myLinkedList.append(Arra[i + 1][j]);
          break;
        }
        if (
          myLinkedList.getIndex(Arra[i][j]) === -1 &&
          Arra[i][j] !== ' ' &&
          myLinkedList.getIndex(Arra[i + 1][j]) !== -1
        ) {
          if (Arra[i][j] === 'c') {
            console.log('c here2 ', Arra[i][j]);
            console.log(myLinkedList.printList());
            console.log('i:', i, 'j: ', j);
            console.log('Arra[i + 1][j]', Arra[i + 1][j]);
          }
          myLinkedList.insert(
            myLinkedList.getIndex(Arra[i + 1][j]),
            Arra[i][j]
          );

          break;
        }
        if (
          myLinkedList.getIndex(Arra[i][j]) !== -1 &&
          Arra[i][j] !== ' ' &&
          myLinkedList.getIndex(Arra[i + 1][j]) === -1
        ) {
          if (Arra[i + 1][j] === 'c') {
            console.log('c here3', Arra[i][j]);
          }
          myLinkedList.insert(
            myLinkedList.getIndex(Arra[i][j]) + 1,
            Arra[i + 1][j]
          );
          break;
        }
      }
    }
  }

  if (myLinkedList.printList().length - 1 < characterSetString.length) {
    //handle eddge case ['zx', 'xc'], since c is not determined
    return 'there is no unique order';
  }
  let order = myLinkedList.printList();
  order.shift(); //remove the empty space
  return order;
};

console.log(
  ['aaw', 'aas', 'aav', 'aab', 'aaa'],
  characterOrder(['aaw', 'aas', 'aav', 'aab', 'aaa'])
);

console.log(['bca,aaa,acb'], characterOrder(['bca', 'aaa', 'acb']));
console.log(['a,b,a'], characterOrder(['xz', 'xx', 'xz']));
console.log(
  ['aba', 'bac', 'baa', 'bbcb', 'bbbc'],
  characterOrder(['aba', 'bac', 'baa', 'bbcb', 'bbbc'])
);

console.log(['abcd'], characterOrder(['abcd']));

console.log(['zx', 'xc'], characterOrder(['zx', 'xc']));

console.log(
  ['baa', 'abcd', 'abca', 'cab', 'cad'],
  characterOrder(['baa', 'abcd', 'abca', 'cab', 'cad'])
);

console.log(
  ['acbc', 'bcc', 'bcb', 'ba'],
  characterOrder(['acbc', 'bcc', 'bcb', 'ba'])
);
