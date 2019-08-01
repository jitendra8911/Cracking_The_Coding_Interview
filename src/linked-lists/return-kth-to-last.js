import {LinkedList} from "./linked-list";

const ll = new LinkedList([1,2,3,4,5,6,7,8,9,10]);
const k = 4;
usingIterativeApproach();

function usingSizeOperator() {
    const len = ll.size();
    const k = 9;
    const elePosToFind = len - k;
    if (elePosToFind > 0) {
        const node = ll.findElementAtIndex(elePosToFind);
        console.log(node.data);
    } else {
        console.log('linked list index out of bound');
    }
}

function usingRecursion() {
    const node = recursiveFindKthToLast();
    console.log('kth to last element is ', node.data);
}

function usingIterativeApproach() {
    let p1 = ll.head;
    let p2 = ll.head;

    // move p2 forward by k steps

    for (let i = 1 ; i < k; i++) {
        p2 = p2 && p2.next;
    }

    while (p2 && p2.next) {
        p2 = p2.next;
        p1 = p1.next;
    }

    console.log('p1', p1);



    // let end = null;
    // let p1, p2;
    // for (let i = 1; i <= k; i++) {
    //     p1 = ll.head && ll.head.next;
    //     p2 = ll.head;
    //     while (p1 && p1.next !== end) {
    //         p1 = p1.next;
    //         p2 = p2.next;
    //     }
    //
    //     end = p1;
    // }
    //
    // console.log('p2.next.data', p2 && p2.next && p2.next.data);
}

function moveToEnd() {
    let curr = ll.head;
    let prev = ll.head;
    let i = 0;
    while (curr && curr.next) {
        i++;
        prev = curr.next;
        curr = curr.next.next;
    }

    return curr || prev;
}

function recursiveFindKthToLast() {
    let end = moveToEnd();
    let k = 3;
    for (let i = 1; i < k; i++) {
        end = findKMinus1ToLast(ll.head, end);
    }

    return end;

}

function findKMinus1ToLast(curr, end) {
    if (curr && curr.next === end) {
        return curr;
    }
    curr = curr.next;
    return findKMinus1ToLast(curr, end);
}
