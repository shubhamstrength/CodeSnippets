// Implement DFS using js.
const adjacencyList = new Map();
adjacencyList.set('A', ['B', 'C']);
adjacencyList.set('B', ['A', 'D']);
adjacencyList.set('C', ['A', 'E']);
adjacencyList.set('D', ['B']);
adjacencyList.set('E', ['C', 'F']);
adjacencyList.set('F', ['E']);

function dfs(adjacencyList, startNode) {
  const visited = new Set(); // Keep track of visited nodes

  // Recursive helper function
  function explore(node) {
    visited.add(node);
    console.log(node); // Process or display the node as needed

    // Traverse all adjacent nodes
    const neighbors = adjacencyList.get(node);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        explore(neighbor);
      }
    }
  }

  explore(startNode);
}

dfs(adjacencyList, 'D');
