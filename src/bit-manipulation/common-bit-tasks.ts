export function getBit(num: number, i: number) {
    return ((1 << i) & num) > 0 ? 1 : 0;
}

export function setBit(num: number, i: number) {
    return ((1 << i) | num)
}

export function clearBit(num: number, i: number) {
    return (~(1<<i) & num);
}

export function clearNToIBits(num: number, i:number) {
    return ((1<<i) - 1) & num;
}

export function clear0ToIBits(num: number, i:number) {
    return ~((1<<i+1) - 1) & num;
}

export function updateBit(num:number, i:number, v:number) {
    return (~(1<<i) & num) | (v<<i)
}

console.log(this.updateBit(123, 7, 1));