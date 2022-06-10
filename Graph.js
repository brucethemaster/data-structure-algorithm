class Node {
  constructor(value) {
    this.value = value;
    this.adjacent = []; // adjacency list
  }

  addAdjacent(node) {
    this.adjacent.push(node);
  }

  removeAdjacent(node) {
    const index = this.adjacent.indexOf(node);
    if (index > -1) {
      this.adjacent.splice(index, 1);
      return node;
    }
  }

  getAdjacent() {
    return this.adjacent;
  }

  isAdjacent(node) {
    return this.adjacent.indexOf(node) > -1;
  }
}
