//Relationships
//Scaling is hard
//noe4j
//Cylic or Acylic
//Weighted or Unweighted
//Directed or Undirected
class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = '';
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + ' ';
      }
      console.log(node + '-->' + connections);
    }
  }
  isAdjacent(node, value) {
    return node ===
      Object.keys(this.adjacentList).find(key => {
        console.log('this.adjacentList[key]', this.adjacentList[key]);

        return this.adjacentList[key].indexOf(value) !== -1;
      })
      ? true
      : false;
  }
  print_order() {
    let graph = Object.assign(
      ...Object.keys(this.adjacentList).map(node => ({
        [node]: this.adjacentList[node].map(String),
      }))
    );
    console.log(graph);
    let queue = Object.keys(this.adjacentList);
    while (queue.length) {
      const batch = [];
      for (const path of queue) {
        const parents = graph[path[0]] || [];
        for (const node of parents) {
          if (node === path[path.length - 1]) return [node, ...path];
          batch.push([node, ...path]);
        }
      }
      queue = batch;
    }
  }
  dfsTopSortHelper(v, n, visited, topNums) {
    visited[v] = true;
    const nodes = this.adjacentList[v];
    for (const node of nodes) {
      if (!visited[nodes]) {
        n = this.dfsTopSortHelper(node, n, visited, topNums);
      }
    }
    topNums[v] = n;
    return n - 1;
  }

  dfsLogicalSort() {
    const vertices = Object.keys(this.adjacentList);
    const visited = {};
    const topNums = {};
    let n = vertices.length - 1;
    for (const v of vertices) {
      if (!visited[v]) {
        n = this.dfsTopSortHelper(v, n, visited, topNums);
      }
    }
    return Object.keys(topNums).sort((a, b) => {
      return topNums[a] - topNums[b];
    });
  }
}

const myGraph = new Graph();
myGraph.addVertex('a');
myGraph.addVertex('b');
myGraph.addVertex('c');
// myGraph.addVertex('d');
// myGraph.addVertex('e');
//{ a: [ 'b', 'b' ], b: [], c: [ 'a', 'b' ] }
myGraph.addEdge('a', 'b');
myGraph.addEdge('c', 'b');
myGraph.addEdge('c', 'a');

myGraph.isAdjacent('a', 'b');

// a: ['b', 'c'],
// b: ['d', 'c'],
// e: ['a', 'b'],
// d: ['e']

//myGraph.showConnections();

console.log(myGraph.dfsLogicalSort());
console.log(myGraph.isAdjacent('a', 'b'));
