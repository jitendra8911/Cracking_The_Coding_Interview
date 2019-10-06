import { Queue } from '../stacks-and-queues/queue';
class Graph {
    private adjacencyList: Map<any, any[]>;
    private inputMap: Map<any, any>;
    constructor() {
        this.adjacencyList = new Map();
        this.inputMap = new Map();
    }

    addVertex(vertex: any) {
        const node = new GraphNode(vertex);
        this.inputMap.set(vertex, node);
        this.adjacencyList.set(vertex, []);
    }

    addEdge(vertexA, vertexB) {
        const nodeB = this.inputMap.get(vertexB);
        this.adjacencyList.get(vertexA).push(nodeB);
    }

    dfs(vertex) {
        const node = this.inputMap.get(vertex);
        if (node == null) return;
        console.log(node.item);
        node.visited = true;
        this.adjacencyList.get(vertex).forEach(element => {
            if (!element.visited) {
                this.dfs(element.item);
            }
        });
    }

    bfs(vertex) {
        const node = this.inputMap.get(vertex);
        const queue = new Queue();
        if (node == null) return;
        queue.enqueue(node);
        node.visited = true;
        while(!queue.isEmpty()) {
            const queueNode = queue.dequeue();
            console.log(queueNode.item);
            this.adjacencyList.get(queueNode.item).forEach(element => {
                if(!element.visited) {
                    queue.enqueue(element);
                    element.visited = true;
                }
            });
        }
    }
}

class GraphNode {
    item: any;
    visited: boolean;
    constructor(item) {
        this.item = item;
    }
}

let inputs = ['0', '1', '2', '3', '4', '5', '6'];
let graph = new Graph();
inputs.forEach(element => {
    graph.addVertex(element);
});
graph.addEdge('0', '1');
graph.addEdge('0', '4');
graph.addEdge('0', '5');
graph.addEdge('1', '3');
graph.addEdge('1', '4');
graph.addEdge('2', '1');
graph.addEdge('3', '2');
graph.addEdge('3', '4');


console.log('graph', graph);
graph.dfs('0');





