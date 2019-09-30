export class GraphNode {
    public name: string;
    public children: GraphNode[]
    constructor(name: string) {
        this.name = name;
    }
}

class Graph {
    public nodes: GraphNode[]
}

const n = new GraphNode('1');
console.log(n);

