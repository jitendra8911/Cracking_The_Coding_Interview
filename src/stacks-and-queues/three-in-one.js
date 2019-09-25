class ThreeStack {
    constructor() {
        this.arr = [];
        this.stackTop = [0,1,2];
    }

    /**
     * @param i: stack to which element has to be pushed
     * @param ele: element
     */
    push(i, ele) {
        if (this.arr[this.stackTop[i]]) {
            this.arr[this.stackTop[i] + 3] = ele;
            this.stackTop[i] = this.stackTop[i] + 3;
        } else {
            this.arr[this.stackTop[i]] = ele;
        }
    }

    pop(i) {
        if (this.arr[this.stackTop[i]]) {
            this.arr[this.stackTop[i]] = null;
            this.stackTop[i] = this.stackTop[i] - 3;
        } else {
            throw 'Empty Stack';
        }

    }
    peek(i) {
        console.log(this.arr[this.stackTop[i]]);

    }
}

const threeStack = new ThreeStack();
threeStack.push(2, 5);
threeStack.push(1, 6);
threeStack.push(1, 10);
threeStack.push(0, 60);
threeStack.push(0, 600);
threeStack.push(0, 6000);
threeStack.pop(0);
threeStack.pop(1);
threeStack.pop(2);
threeStack.peek(1);
console.log(threeStack.arr);
