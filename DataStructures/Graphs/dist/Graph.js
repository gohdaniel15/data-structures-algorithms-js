export class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = new Map();
    }
    addVertex(node) {
        if (this.adjacentList.has(node))
            throw new Error("Node already exists");
        this.adjacentList.set(node, []);
    }
    addEdge(node1, node2) {
        if (!this.adjacentList.has(node1) && !this.adjacentList.has(node2)) {
            throw new Error("One or more nodes specified do not exist");
        }
        this.adjacentList.get(node1).push(node2);
        this.adjacentList.get(node2).push(node1);
    }
}
