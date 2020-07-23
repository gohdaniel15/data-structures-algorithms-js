export class Graph {
  // Undirected, unweighted graph
  numberOfNodes: number
  adjacentList: Map<string, Array<string>>

  constructor() {
    this.numberOfNodes = 0
    this.adjacentList = new Map()
  }

  addVertex(node: string) {
    if (this.adjacentList.has(node)) throw new Error("Node already exists");

    this.adjacentList.set(node, [])
    this.numberOfNodes++
  }

  addEdge(node1: string, node2: string) {
    if (!this.adjacentList.has(node1) && !this.adjacentList.has(node2)) {
      throw new Error("One or more nodes specified do not exist");
    }

    this.adjacentList.get(node1).push(node2)
    this.adjacentList.get(node2).push(node1)
  }
}