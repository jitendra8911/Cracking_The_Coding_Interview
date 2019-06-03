import {getBitVector, removeSpaces} from "../utils/string-utils";

let str = "Tact Coa";


function hasPalindromeUsingHashMap(str) {
    let countMap = {};
    let isThereAnyPalindrome = true;
    // get count of each character
    for (let i = 0; i < str.length; i++) {
        if (!countMap[str.charAt(i)]) {
            countMap[str.charAt(i)] = 1;
        } else {
            countMap[str.charAt(i)] += 1;
        }
    }

    console.log('map is ', countMap);

    // check if there is more than 1 odd numbered count in the map. If yes return false. Otherwise return true

    let oddNumberedCount = 0;
    let countValues = Object.values(countMap);
    for (let i = 0; i < countValues.length; i++) {
        if (countValues[i] % 2 !== 0 || countValues[i] === 1) {
            oddNumberedCount++;
        }

        if (oddNumberedCount > 1) {
            isThereAnyPalindrome = false;
            break;
        }
    }

    console.log(isThereAnyPalindrome);
}



function hasMoreThanOneOnBit(check) {
    return (check & (check - 1)) > 0;
}

function hasPalindromUsingBitVector(str) {
    let check = getBitVector(str);
    return !hasMoreThanOneOnBit(check);
}


let deCapitalizedString = str.toLowerCase();
let spacelessString = removeSpaces(deCapitalizedString);

//hasPalindromeUsingHashMap(spacelessString);

console.log(hasPalindromUsingBitVector(spacelessString));