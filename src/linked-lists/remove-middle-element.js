import {LinkedList} from "./linked-list";

const ll = new LinkedList([1,2,3,4,5]);

function removeMiddleElement() {
    const first = ll.head;
    const second = first.next;
    let third = second.next;

    // assume now there is no access to ll.head and any other element except third.
    // Remove 3rd element


    const fourth = third.next;
    third.data = fourth.data;
    third.next = fourth.next;

    ll.printLinkedList();

}

removeMiddleElement();