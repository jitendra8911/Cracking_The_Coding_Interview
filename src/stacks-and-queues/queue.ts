export class Queue {
    arr: any[];
    constructor() {
        this.arr = [];
    }
    enqueue(item) {
        const len = this.arr.length;
        this.arr[len] = item;
    }

    dequeue() {
        if (!this.arr.length) {
            console.log('empty queue');
        }
        const item = this.arr[0];
        for(let i:number = 0; i <this.arr.length - 1; i++) {
            this.arr[i] = this.arr[i+1];
        }

        this.arr.splice(this.arr.length - 1);
        return item;
    }

    isEmpty() {
        return !this.arr.length;
    }
}
