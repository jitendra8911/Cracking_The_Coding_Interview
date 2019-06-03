export function removeSpaces(str) {
    return str ? str.replace(/\s/gi, '') : str;
}

export function getBitVector(str) {
    let check = 0;
    for (let i = 0; i < str.length; i++) {
        let index = str.charCodeAt(i) - 'a'.charCodeAt(0);
        check ^= 1 << index;
    }

    return check;
}