import {LinkedList} from "./linked-list";

let ll = new LinkedList([1,2,3,4,5,6,7,8,9,10,11,2,3,4,5,6,12,13,14,15,16]);

const removeDuplicates = function (list) {
    let currNode = list.head;
    if (!currNode || !currNode.next) {
        console.log('no duplicates');
        return;
    }

    while(currNode.next) {
        let nextNode = currNode.next;
        let prevNode = currNode;
        while(nextNode) {
            if (nextNode.data === currNode.data) {
                prevNode.next = nextNode.next;
                break;
            }
            prevNode = prevNode.next;
            nextNode = nextNode.next;
        }
        currNode = currNode.next;
    }
};

removeDuplicates(ll);
console.log('linked list after deleting duplicates is ');
ll.printLinkedList();