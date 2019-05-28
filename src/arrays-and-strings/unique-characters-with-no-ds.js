import {quickSort} from "../sorting/sort";

const str = "anasuya";
let hasUniqueCharacters = true;
function using_quick_sort(str) {
    const arr = quickSort(str.split(''));
    let prevChar = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let currChar = arr[i];
        if (currChar === prevChar) {
            hasUniqueCharacters = false;
            break;
        }
        prevChar = currChar;
    }
    return hasUniqueCharacters;
}


function using_bit_vector(str) {
    let checker = 0;
    for (let i = 0; i < str.length; i++) {
        let val = str.charCodeAt(i) - 'a'.charCodeAt(0);
        if ((checker & (1 << val)) > 0) {
            return false;
        }
        checker |= (1 << val);
    }

    return true;
}

//console.log(using_bit_vector(str));

console.log(using_quick_sort(str));



