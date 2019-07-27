class Node {
    constructor(next, data) {
        this.next = next;
        this.data = data;
    }

}

class LinkedList {
    constructor(arr) {
        this.head = null;
        if (Array.isArray(arr) && arr.length) {
            if (arr.length > 1) {
                const node1 = new Node(null, arr[1]);
                this.head = new Node(node1, arr[0]);
                let prevNode = this.head.next;
                for (let i = 2; i < arr.length; i++) {
                    const currNode = new Node(null, arr[i]);
                    prevNode.next = currNode;
                    prevNode = currNode;
                }
            } else {
                this.head = new Node(null, arr[0]);
            }
        }
    }

    printLinkedList() {
        let currPos = this.head;
        let str = '';
        while (currPos) {
            str = str.concat(currPos.data + ' -> ');
            currPos = currPos.next;
        }

        console.log('linked list: ', str);
    }

    removeElement(ele) {
        if (!this.head) {
            console.log('no element found');
            return;
        }
        if (this.head && this.head.data === ele) {
            this.head = this.head.next;
            console.log(`element found. after removing the element ${ele}, the new linked list is `);
            this.printLinkedList();
            return;
        }
        let prevNode = this.head;
        let currNode = this.head.next;
        while (currNode) {
            if (currNode.data === ele) {
                prevNode.next = currNode.next;
                console.log(`element found. after removing the element ${ele}, the new linked list is `);
                this.printLinkedList();
                return;

            } else {
                currNode = currNode.next;
                prevNode = prevNode.next;
            }
        }
        console.log('no element found');
    }

    addElement(ele) {
        // traverse to the end of the linked list
        let currNode = this.head;
        if (!currNode) {
            this.head = new Node(null, ele);
            console.log('after adding new element, new linked list is ');
            this.printLinkedList();
            return;
        }
        while(currNode.next) {
            currNode = currNode.next;
        }
        currNode.next = new Node(null, ele);
        console.log('after adding new element, new linked list is ');
        this.printLinkedList();
    }
}




let l = new LinkedList([1,2,3,4,5]);
l.printLinkedList();
l.removeElement(1);
l.addElement(1);


