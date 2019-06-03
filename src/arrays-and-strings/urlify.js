const str = "Mr John Smith ";
let len = 13;

const arr = str.split('');

for (let i = 0; i < len; i++) {
    if (str.charAt(i) === ' ') {
        arr[i] = '%20';
    }
}

console.log(arr.slice(0, 13));


// using regex

let newStr = str.replace(/\s/gi, '%20');
console.log(newStr);