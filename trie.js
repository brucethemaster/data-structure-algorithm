/* empty root node
if a waord or part or word
exist in body of text

prefix tree

benefit space
O(1)
O(of length)
space complexity ()
*
For the use case of searching strings, the time complexity of a binary search tree
 could be O(n) in the worst case. Where ‘n’ is the total number of strings stored in the binary tree.
  Therefore a better performing data structure is needed for searching strings in optimal time.
  The trie data structure avoids traversing the whole tree while searching for a string.
   A string containing only letters limits a trie node’s children to 26. This allows the search time complexity of a string to be O(s) where ‘s’ is the length of the string. So a trie tree is much more efficient in searching strings compared to the binary search tree.


Approach
The structure for a single node in the trie tree consists of an array of size 26 and a boolean to identify if it is the leaf node. Additionally,
the leaf node can have an integer value or any other type of value mapped to the string.
Each index in the array represents letters from a to z and each index can have a ‘TrieNode’ instance.
*/

class TrieNode {
  constructor() {
    this.value = undefined;
    this.isEnd = false;
    this.arr = new Array(26).fill(null);
  }
}

class TrieTree {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word, value) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const index = parseInt(word[i], 36) - 10;

      if (node.arr[index] === null) {
        const temp = new TrieNode();
        node.arr[index] = temp;
        node = temp;
      } else {
        node = node.arr[index];
      }
    }
    node.isEnd = true;
    node.value = value;
  }

  getRoot() {
    return this.root;
  }

  startsWith(prefix) {
    const node = this.searchNode(prefix);
    if (node == null) {
      return false;
    } else {
      this.printStrings(node, '');
      return true;
    }
  }

  printStrings(node, prefix) {
    if (node.isEnd) console.log(prefix);
    for (let i = 0; i < node.arr.length; i++) {
      if (node.arr[i] !== null) {
        const character = String.fromCharCode('a'.charCodeAt() + i);
        this.printStrings(node.arr[i], prefix + '' + character);
      }
    }
  }

  searchNode(str) {
    let node = this.root;
    for (let i = 0; i < str.length; i++) {
      const index = parseInt(str[i], 36) - 10;
      if (node.arr[index] !== null) {
        node = node.arr[index];
      } else {
        return null;
      }
    }

    if (node === this.root) return null;

    return node;
  }
}
const trieTree = new TrieTree();
trieTree.insert('asdfasdf', 5);
trieTree.insert('cdfasdfas', 23);
trieTree.insert('cdfzsvljsdf', 42);

let answer = trieTree.searchNode('asdfasdf');
console.log(answer.value); //5
answer = trieTree.startsWith('cdf');
console.log(answer);
