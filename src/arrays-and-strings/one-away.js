import {getBitVector} from "../utils/string-utils";

const str1 = "hi";
const str2 = "bye";



function oneAway(str1, str2) {
    let check1 = getBitVector(str1);
    let check2 = getBitVector(str2);

    let diff = check1 ^ check2;
    let diffCount = 0;
    let isOneAway = true;
    let index = diff;

    if (diff === 0) {
        return isOneAway;
    } else {
        while (index > 0) {

            index = index >> 1;
            if ((index & 1) > 0) {
                diffCount++;
            }

            if (diffCount > 2) {
                isOneAway = false;
                break;
            }
        }
    }

    return isOneAway;
}

console.log(oneAway(str1, str2));