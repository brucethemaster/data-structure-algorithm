class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      console.log('middle');
      this.root = node;
      return this;
    }
    let currNode = this.root;
    while (currNode !== null) {
      if (currNode.value < value) {
        if (currNode.right === null) {
          currNode.right = node;
          return this;
        } else {
          currNode = currNode.right;
        }
      }
      if (currNode.value > value) {
        if (currNode.left === null) {
          currNode.left = node;
          return this;
        } else {
          currNode = currNode.left;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currNode = this.root;
    while (true) {
      if (value < currNode.value) {
        if (currNode.left === null) {
          return false;
        } else {
          currNode = currNode.left;
        }
      }

      if (value > currNode.value) {
        if (currNode.right === null) {
          return false;
        } else {
          currNode = currNode.right;
        }
      }
      if (value === currNode.value) {
        return currNode;
      }
    }
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currNode = this.root;
    let tempNode;
    let tempNode2;
    while (currNode) {
      if (value < currNode.value) {
        tempNode = currNode;
        currNode = currNode.left;
      } else if (value > currNode.value) {
        tempNode = currNode;
        currNode = currNode.right;
      } else if (value === currNode.value) {
        tempNode = currNode;
        if (currNode.right === null) {
          if (tempNode === null) {
            this.root = currNode.left;
          } else {
            if (currNode.value < tempNode.value) {
              tempNode.left = currNode.left;
            } else if (currNode.value > tempNode.value) {
              tempNode.right = currNode.left;
            }
          }
        } else if (currNode.right.left === null) {
          if (tempNode === null) {
            this.root = currNode.left;
          } else {
            currNode.right.left = currNode.left;
            if (currNode.value < tempNode.value) {
              tempNode.left = currNode.right;
            } else if (currNode.value > tempNode.value) {
              tempNode.right = currNode.right;
            }
          }
        } else {
          let leftMost = currNode.right.left;
          let leftmostParent = currNode.right;
          while (leftMost.left != null) {
            leftmostParent = leftMost;
            leftMost = leftMost.left;
          }
          leftmostParent.left = leftMost.right;
          leftMost.left = currNode.left;
          leftMost.right = currNode.right;
          if (tempNode === null) {
            this.root = leftMost;
          } else {
            if (currNode.value < tempNode.value) {
              tempNode.left = leftMost;
            } else if (currNode.value > tempNode.value) {
              tempNode.right = leftMost;
            }
          }
        }
        return this;
      }
    }
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(tree));
console.log(JSON.stringify(traverse(tree.root)));

console.log(tree.remove(0));
console.log(JSON.stringify(traverse(tree.root)));
