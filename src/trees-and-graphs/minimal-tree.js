const arr = [12,30,45,60,72,90,100];
class Node {
    constructor(data) {
        this.data = data;
    }
}
class MinimalStack {
    constructor(arr) {
        this.arr= arr;
        this.build();
    }
    build() {
        if (!(arr && arr.length)) {
            throw 'empty minimal stack exception';
        }
        const mid = parseInt(arr.length / 2);
        this.root = new Node(arr[mid]);
        this.root = this.buildBinaryTree(this.root, 0, arr.length - 1);
    }
    buildBinaryTree(node, start, end) {
        if (start > end) {
            return
        }
        if (start === end) {
            return new Node(arr[start]);
        }
        const mid = parseInt((start + end)/2);
        node = new Node(arr[mid]);
        const left = this.buildBinaryTree(node, start, mid -1);
        const right = this.buildBinaryTree(node, mid+1, end);
        node.left = left;
        node.right = right;
        return node;
    }
}

const minimalStack = new MinimalStack(arr);
console.dir(minimalStack);