import { clearNToIBits, clear0ToIBits } from "./common-bit-tasks";

function insertion(n:number, m:number, i:number, j:number) {
    let num:number = n;
    for (let k:number = i; k < j; k++) {
        num = (~(1<<k)) & num;
    }

    console.log('num is ', num);

    return num | (m<<i);
}

function insertionEfficientWay(n:number, m:number, i:number, j:number) {
    const leftMask:number = clearNToIBits(n, i);
    const rightMask:number = clear0ToIBits(n, j);
    const num:number = leftMask | rightMask;

    console.log('num is ', num);

    return num | (m<<i);
}

console.log(insertionEfficientWay(752, 11, 2, 6));