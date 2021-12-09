//Create a DAC graph for help solve problem
// edge case  1: cycled  Graph
// edge case  2: not unique order ['abcd']

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
  getCycle() {
    let graph = Object.assign(
      ...Object.keys(this.adjacentList).map(node => ({
        [node]: this.adjacentList[node].map(String),
      }))
    );

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
      if (!visited[node]) {
        n = this.dfsTopSortHelper(node, n, visited, topNums);
      }
    }
    topNums[v] = n;
    return n - 1;
  }
  dfsTopLogicalSort() {
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
  isAdjacent(node, value) {
    return node ===
      Object.keys(this.adjacentList).find(key => {
        return this.adjacentList[key].indexOf(value) !== -1;
      })
      ? true
      : false;
  }
  isNotUnqueOrder() {
    return Object.keys(this.adjacentList).filter(
      key => this.adjacentList[key].length === 0
    ).length > 1
      ? true
      : false;
  }
}
const characterOrder = Arra => {
  if (Arra.length === 0) {
    return 'InValid Word Array';
  }
  const myGraph = new Graph();

  let characterSetString = String.prototype.concat(...new Set(Arra.join('')));
  characterSetString.split('').forEach(c => myGraph.addVertex(c));

  let maxWordLength = Math.max(...Arra.map(el => el.length));
  Arra = Arra.map(a => a.padEnd(maxWordLength, ' ').split(''));

  for (let i = 0; i < Arra.length - 1; i++) {
    for (let j = 0; j < maxWordLength; j++) {
      if (Arra[i][j] !== Arra[i + 1][j]) {
        if (Arra[i][j] !== ' ' && Arra[i + 1][j] !== ' ') {
          if (j !== 0 && Arra[i + 1][j - 1] === Arra[i][j - 1]) {
            if (myGraph.isAdjacent(Arra[i][j], Arra[i + 1][j]) !== true) {
              myGraph.addEdge(Arra[i][j], Arra[i + 1][j]);
            }
          } else if (j === 0) {
            if (myGraph.isAdjacent(Arra[i][j], Arra[i + 1][j]) !== true) {
              myGraph.addEdge(Arra[i][j], Arra[i + 1][j]);
            }
          }
          break;
        }
      }
    }
  }

  if (myGraph.isNotUnqueOrder()) {
    return 'Not Unqiue Order';
  }
  if (myGraph.getCycle()) {
    return 'Find Cycle Invalid Order';
  }
  return myGraph.dfsTopLogicalSort();
};

console.log(['zx', 'xc'], characterOrder(['z', 'x', 'c']));

console.log(
  ['acbc', 'bcc', 'bcb', 'ba'],
  characterOrder(['acbc', 'bcc', 'bcb', 'ba'])
);

console.log(
  ['aaw', 'aas', 'aav', 'aab', 'aaa'],
  characterOrder(['aaw', 'aas', 'aav', 'aab', 'aaa'])
);

console.log(['bca,aaa,acb'], characterOrder(['bca', 'aaa', 'acb']));
console.log(['xz', 'xx', 'y', 'z'], characterOrder(['xz', 'xx', 'y', 'z']));
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

console.log(['z', 'x', 'z'], characterOrder(['z', 'x', 'z']));

console.log(['a', 'ab', 'abe'], characterOrder(['a', 'ab', 'abe']));

console.log(['1', '2', '32', '2'], characterOrder(['1', '2', '32', '2']));
console.log(['', 'a'], characterOrder(['', 'a']));
